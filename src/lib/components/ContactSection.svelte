<script lang="ts">
	import { Building2, Mail, Send, Zap } from 'lucide-svelte';
	import GithubIcon from '$lib/components/icons/GithubIcon.svelte';
	import LinkedinIcon from '$lib/components/icons/LinkedinIcon.svelte';
	import { type ContactInfoItem } from '$lib/types/portfolio';
	import ContactInfoRow from '$lib/components/ui/ContactInfoRow.svelte';
	import { enhance } from '$app/forms';

	type FormResult = {
		success?: boolean;
		error?: string;
		name?: string;
		email?: string;
		message?: string;
	} | null;

	const { form }: { form: FormResult } = $props();

	let sending = $state(false);

	const contactInfo: ContactInfoItem[] = [
		{
			icon: Mail,
			label: 'Email',
			value: 'baptiste.desnouck@gmail.com',
			href: 'mailto:baptiste.desnouck@gmail.com'
		},
		{
			icon: Building2,
			label: 'Localisation',
			value: 'TOULOUSE, FRANCE',
			subtitle: 'MOBILITÉ SUR TOUTE LA FRANCE'
		},
		{
			icon: LinkedinIcon,
			label: 'LinkedIn',
			value: 'Baptiste Desnouck',
			href: 'https://www.linkedin.com/in/baptiste-desnouck'
		},
		{
			icon: GithubIcon,
			label: 'GitHub',
			value: 'Nimdaba',
			href: 'https://github.com/baptdes'
		}
	];
</script>

<section id="contact" class="relative overflow-hidden bg-surface px-6 py-32">
	<div class="mx-auto max-w-7xl">
		<div class="grid grid-cols-1 items-center gap-20 lg:grid-cols-[2fr_1fr]">
			<!-- Left: headline + contact info -->
			<div>
				<div class="mb-8">
					<div class="mb-4 font-headline text-xs uppercase tracking-[0.5em] text-primary">
						I/O PORT
					</div>
					<h2 class="font-headline text-5xl font-bold leading-none tracking-tight md:text-6xl">
						Construisons <span class="primary-gradient-text">ENSEMBLE.</span>
					</h2>
				</div>
				<p class="mb-12 max-w-md font-body text-lg text-on-surface-variant opacity-80">
					Je recherche un poste en développement ou en R&D à partir d'octobre 2026.
				</p>

				<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
					{#each contactInfo as info (info.label)}
						<ContactInfoRow
							icon={info.icon}
							label={info.label}
							value={info.value}
							subtitle={info.subtitle}
							href={info.href}
						/>
					{/each}
				</div>
			</div>

			<!-- Right: contact form -->
			<div
				class="relative overflow-hidden rounded-3xl border border-white/5 bg-surface-container-low p-8 shadow-2xl"
			>
				<div class="absolute right-0 top-0 h-24 w-24 rounded-full bg-primary/5 blur-3xl"></div>

				{#if form?.success}
					<div class="relative z-10 flex flex-col items-center justify-center gap-4 py-12 text-center">
						<div class="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
							<Zap size={28} />
						</div>
						<p class="font-headline text-lg font-bold text-on-surface">Message envoyé !</p>
						<p class="font-body text-sm text-on-surface-variant opacity-70">
							Je vous répondrai dans les plus brefs délais.
						</p>
					</div>
				{:else}
					<form
						method="POST"
						action="?/contact"
						use:enhance={() => {
							sending = true;
							return async ({ update }) => {
								await update();
								sending = false;
							};
						}}
						class="relative z-10 flex flex-col gap-4"
					>
						{#if form?.error}
							<p class="rounded-lg bg-red-500/10 px-4 py-2 font-body text-xs text-red-400">
								{form.error}
							</p>
						{/if}

						<div class="flex flex-col gap-1">
							<label for="name" class="font-headline text-xs uppercase tracking-widest text-on-surface-variant">
								Nom
							</label>
							<input
								id="name"
								name="name"
								type="text"
								required
								value={form?.name ?? ''}
								placeholder="Jack Law"
								class="rounded-xl bg-surface-container px-4 py-3 font-body text-sm text-on-surface placeholder:text-on-surface-variant/40 outline-none ring-1 ring-white/5 transition focus:ring-primary"
							/>
						</div>

						<div class="flex flex-col gap-1">
							<label for="email" class="font-headline text-xs uppercase tracking-widest text-on-surface-variant">
								Email
							</label>
							<input
								id="email"
								name="email"
								type="email"
								required
								value={form?.email ?? ''}
								placeholder="you@example.com"
								class="rounded-xl bg-surface-container px-4 py-3 font-body text-sm text-on-surface placeholder:text-on-surface-variant/40 outline-none ring-1 ring-white/5 transition focus:ring-primary"
							/>
						</div>

						<div class="flex flex-col gap-1">
							<label for="message" class="font-headline text-xs uppercase tracking-widest text-on-surface-variant">
								Message
							</label>
							<textarea
								id="message"
								name="message"
								required
								rows="4"
								value={form?.message ?? ''}
								placeholder="Votre message..."
								class="resize-none rounded-xl bg-surface-container px-4 py-3 font-body text-sm text-on-surface placeholder:text-on-surface-variant/40 outline-none ring-1 ring-white/5 transition focus:ring-primary"
							></textarea>
						</div>

						<button
							type="submit"
							disabled={sending}
							class="btn-primary mt-2 w-full gap-3 px-8 py-4 text-sm"
						>
							{sending ? 'ENVOI...' : 'ENVOYER'}
							<Send size={14} />
						</button>
					</form>
				{/if}
			</div>
		</div>
	</div>
</section>
