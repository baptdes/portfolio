<script lang="ts">
	import type { ExperienceItem } from '$lib/types/portfolio';
	import TagChip from './TagChip.svelte';

	let { item }: { item: ExperienceItem } = $props();
</script>

<div
	class="group flex flex-col overflow-hidden rounded-2xl border border-white/5 bg-surface-container-highest transition-all hover:border-primary/30"
>
	<div class="relative h-48 overflow-hidden">
		<img
			src={item.imageUrl}
			alt={item.imageAlt}
			class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
		/>
	</div>
	<div class="flex flex-grow flex-col p-8">
		<div class="mb-6 flex flex-col justify-between gap-1 md:flex-row md:items-start">
			<div>
				<h3 class="mb-1 font-headline text-xl font-bold text-primary uppercase">{item.company}</h3>
				<p class="font-label text-[10px] tracking-widest text-on-surface-variant uppercase opacity-70">
					{item.role}
				</p>
			</div>
			{#if item.period}
				<p class="font-label text-[10px] tracking-widest text-on-surface-variant uppercase opacity-60">
					{item.period}
				</p>
			{/if}
		</div>
		<p class="mb-6 flex-grow font-body text-sm leading-relaxed text-on-surface/80">
			{item.description}
		</p>
		{#if item.tags && item.tags.length > 0}
			<div class="flex flex-wrap gap-2">
				{#each item.tags as tag (tag)}
					<TagChip label={tag} />
				{/each}
			</div>
		{/if}
	</div>
</div>
