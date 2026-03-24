<script lang="ts">
	import { type ContactInfoItem } from '$lib/types/portfolio';
	import ContactInfoRow from '$lib/components/ui/ContactInfoRow.svelte';

	const contactInfo: ContactInfoItem[] = [
		{
			icon: 'mail',
			label: 'Email',
			value: 'contact@baptistedesnouck.com',
			href: 'mailto:contact@baptistedesnouck.com'
		},
		{
			icon: 'location_city',
			label: 'Base',
			value: 'Toulouse, France'
		}
	];
</script>

<section id="contact" class="relative overflow-hidden bg-surface px-6 py-32">
	<div class="mx-auto max-w-7xl">
		<div class="grid grid-cols-1 items-center gap-20 lg:grid-cols-2">
			<!-- Left: headline + contact info -->
			<div>
				<div class="mb-8">
					<div class="mb-4 font-headline text-xs tracking-[0.5em] text-primary uppercase">
						I/O PORT
					</div>
					<h2 class="font-headline text-5xl leading-none font-bold tracking-tight md:text-6xl">
						LET'S BUILD THE <span class="primary-gradient-text">FUTURE.</span>
					</h2>
				</div>
				<p class="mb-12 max-w-md font-body text-lg text-on-surface-variant opacity-80">
					Seeking collaborations on high-impact AI systems. Available for R&D roles starting late
					2026.
				</p>

				<div class="space-y-8">
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
						href="mailto:contact@baptistedesnouck.com"
						class="inline-flex items-center gap-3 rounded-xl bg-primary px-10 py-5 font-headline text-sm font-bold tracking-[0.2em] text-on-primary uppercase transition-all hover:shadow-[0_10px_30px_rgba(211,254,67,0.3)]"
					>
						SEND AN EMAIL
						<span class="material-symbols-outlined text-sm">send</span>
					</a>
				</div>
			</div>

			<!-- Right: decorative panel -->
			<div
				class="relative flex min-h-64 items-center justify-center overflow-hidden rounded-3xl border border-white/5 bg-surface-container-low p-8 shadow-2xl md:p-12"
			>
				<div class="absolute top-0 right-0 h-32 w-32 rounded-full bg-primary/5 blur-3xl"></div>
				<div class="relative z-10 text-center">
					<div
						class="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10"
					>
						<span
							class="material-symbols-outlined text-4xl text-primary"
							style="font-variation-settings: 'FILL' 1, 'wght' 300, 'GRAD' 0, 'opsz' 24"
						>
							bolt
						</span>
					</div>
					<p class="font-headline text-lg font-bold tracking-[0.2em] text-on-surface uppercase">
						Available from
					</p>
					<p class="mt-2 font-headline text-4xl font-bold text-primary">OCT 2026</p>
					<p class="mt-4 max-w-xs font-body text-sm text-on-surface-variant opacity-70">
						Open to R&D roles, research collaborations, and high-impact AI engineering missions.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>
