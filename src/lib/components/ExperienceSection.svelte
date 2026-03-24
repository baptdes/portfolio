<script lang="ts">
	import { experiences } from '$lib/data/experience';
	import SectionHeader from '$lib/components/ui/SectionHeader.svelte';
	import ExperienceCard from '$lib/components/ui/ExperienceCard.svelte';

	const featured = experiences.find((e) => e.variant === 'featured')!;
	const compact = experiences.filter((e) => e.variant === 'compact');
</script>

<section id="exp" class="bg-surface-container-low px-6 py-32">
	<div class="mx-auto max-w-7xl">
		<div class="mb-16">
			<SectionHeader registry="Registry 01" title="EXPERIENCES PROFESSIONNELLES" />
		</div>

		<div class="grid grid-cols-1 gap-8">
			<!-- Featured card: Airbus -->
			<div
				class="group grid grid-cols-1 overflow-hidden rounded-2xl border border-white/5 bg-surface-container-highest transition-all hover:border-primary/30 lg:grid-cols-12"
			>
				<div class="relative h-64 overflow-hidden lg:col-span-5 lg:h-auto">
					<img
						src={featured.imageUrl}
						alt={featured.imageAlt}
						class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
					/>
					<div class="absolute inset-0 bg-black/40 transition-colors group-hover:bg-black/20"></div>
				</div>
				<div class="p-8 md:p-12 lg:col-span-7">
					<div class="mb-8 flex flex-col justify-between md:flex-row">
						<div>
							<h3 class="mb-1 font-headline text-2xl font-bold text-primary uppercase">
								{featured.company}
							</h3>
							<p
								class="font-label text-xs tracking-widest text-on-surface-variant uppercase opacity-70"
							>
								{featured.role}
							</p>
						</div>
						<div
							class="mt-4 font-label text-[10px] tracking-widest text-on-surface-variant uppercase opacity-60 md:mt-0"
						>
							{featured.period}
						</div>
					</div>
					<ul class="max-w-xl space-y-4 font-body text-sm leading-relaxed text-on-surface/80">
						{#each featured.bullets ?? [] as bullet, i (i)}
							<li class="flex gap-4">
								<span class="text-primary">/</span>
								{bullet}
							</li>
						{/each}
					</ul>
				</div>
			</div>

			<!-- Compact cards: UP2SMART + N7 -->
			<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
				{#each compact as item (item.company)}
					<ExperienceCard {item} />
				{/each}
			</div>
		</div>
	</div>
</section>
