<script lang="ts">
	import { impacts } from '$lib/data/impact';
	import SectionHeader from '$lib/components/ui/SectionHeader.svelte';
</script>

<section class="bg-surface px-6 py-32">
	<div class="mx-auto max-w-7xl">
		<div class="mb-16">
			<SectionHeader registry="Registry 02" title="EXPERIENCES ASSOCIATIVES & INTERNATIONALES" />
		</div>

		<div class="grid grid-cols-1 gap-12 md:grid-cols-2">
			{#each impacts as item (item.title)}
				<div class="group">
					<div class="relative mb-8 h-80 overflow-hidden rounded-2xl border border-white/5">
						<img
							src={item.imageUrl}
							alt={item.imageAlt}
							class="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
						/>
						<div
							class="absolute top-6 left-6 rounded px-3 py-1 font-label text-[10px] tracking-widest uppercase backdrop-blur-md {item.badgeVariant ===
							'primary'
								? 'bg-primary/80 font-bold text-on-primary'
								: 'bg-black/60 text-white'}"
						>
							{item.badgeLabel}
						</div>
					</div>
					<h3 class="mb-2 font-headline text-2xl font-bold text-white">{item.title}</h3>
					<p class="mb-4 font-label text-xs tracking-widest text-primary uppercase">
						{item.subtitle}
					</p>
					<p class="max-w-md font-body text-sm leading-relaxed text-on-surface-variant">
						{item.description}
					</p>
				</div>
			{/each}
		</div>
	</div>
</section>
