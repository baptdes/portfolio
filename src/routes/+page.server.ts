import { API_KEY_RESEND, CONTACT_EMAIL } from '$env/static/private';
import { Resend } from 'resend';
import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';

const resend = new Resend(API_KEY_RESEND);

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 3;
const RATE_WINDOW_MS = 60_000;

function checkRateLimit(ip: string): boolean {
	const now = Date.now();
	const entry = rateLimitMap.get(ip);
	if (!entry || now > entry.resetAt) {
		rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
		return true;
	}
	if (entry.count >= RATE_LIMIT) return false;
	entry.count++;
	return true;
}

export const actions: Actions = {
	contact: async (event) => {
		if (!checkRateLimit(event.getClientAddress())) {
			return fail(429, { error: 'Trop de tentatives. Réessayez dans une minute.' });
		}

		const data = await event.request.formData();
		const name = data.get('name')?.toString().trim();
		const email = data.get('email')?.toString().trim();
		const message = data.get('message')?.toString().trim();

		if (!name || !email || !message) {
			return fail(400, { error: 'Tous les champs sont requis.', name, email, message });
		}

		if (name.length > 100 || email.length > 254 || message.length > 3000) {
			return fail(400, {
				error: 'Un ou plusieurs champs dépassent la taille maximale autorisée.',
				name,
				email,
				message
			});
		}

		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
			return fail(400, { error: 'Adresse email invalide.', name, email, message });
		}

		const { error } = await resend.emails.send({
			from: 'Portfolio <onboarding@resend.dev>',
			to: CONTACT_EMAIL,
			replyTo: email,
			subject: `Message de ${name} — Portfolio`,
			text: `Nom : ${name}\nEmail : ${email}\n\n${message}`
		});

		if (error) {
			return fail(500, { error: "Erreur lors de l'envoi. Réessayez plus tard.", name, email, message });
		}

		return { success: true };
	}
};
