import { API_KEY_RESEND } from '$env/static/private';
import { Resend } from 'resend';
import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';

const resend = new Resend(API_KEY_RESEND);

export const actions: Actions = {
	contact: async ({ request }) => {
		const data = await request.formData();
		const name = data.get('name')?.toString().trim();
		const email = data.get('email')?.toString().trim();
		const message = data.get('message')?.toString().trim();

		if (!name || !email || !message) {
			return fail(400, { error: 'Tous les champs sont requis.', name, email, message });
		}

		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
			return fail(400, { error: 'Adresse email invalide.', name, email, message });
		}

		const { error } = await resend.emails.send({
			from: 'Portfolio <onboarding@resend.dev>',
			to: 'desnouck.baptiste@gmail.com',
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
