<script lang="ts">
	import { Building2, Mail, Send, Zap } from 'lucide-svelte';
	import GithubIcon from '$lib/components/icons/GithubIcon.svelte';
	import LinkedinIcon from '$lib/components/icons/LinkedinIcon.svelte';
	import { type ContactInfoItem } from '$lib/types/portfolio';
	import ContactInfoRow from '$lib/components/ui/ContactInfoRow.svelte';

	const contactInfo: ContactInfoItem[] = [
		{
			icon: Mail,
			label: 'Email',
			value: 'baptiste.desnouck@gmail.com',
			href: 'mailto:baptiste.desnouck@gmail.com'
		},
		{
			icon: Building2,
			label: 'Base',
			value: 'TOULOUSE, FRANCE',
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

				<div class="grid grid-cols-2 gap-6">
					{#each contactInfo as info (info.label)}
						<ContactInfoRow
							icon={info.icon}
							label={info.label}
							value={info.value}
							href={info.href}
						/>
					{/each}
				</div>

				<div class="mt-12">
					<a
						href="mailto:baptiste.desnouck@gmail.com"
						class="inline-flex items-center gap-3 rounded-xl bg-primary px-10 py-5 font-headline text-sm font-bold uppercase tracking-[0.2em] text-on-primary transition-all hover:shadow-[0_10px_30px_rgba(211,254,67,0.3)]"
					>
						SEND AN EMAIL
						<Send size={16} />
					</a>
				</div>
			</div>

			<!-- Right: decorative panel -->
			<div
				class="relative flex items-center justify-center overflow-hidden rounded-3xl border border-white/5 bg-surface-container-low p-8 shadow-2xl"
			>
				<div class="absolute right-0 top-0 h-24 w-24 rounded-full bg-primary/5 blur-3xl"></div>
				<div class="relative z-10 text-center">
					<div
						class="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary"
					>
						<Zap size={28} />
					</div>
					<p class="font-headline text-sm font-bold uppercase tracking-[0.2em] text-on-surface">
						Disponible à partir de
					</p>
					<p class="mt-1 font-headline text-3xl font-bold text-primary">OCT 2026</p>
					<p class="mt-3 max-w-xs font-body text-xs text-on-surface-variant opacity-70">
						Ouvert à des roles de développement et/ou de R&D.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>
