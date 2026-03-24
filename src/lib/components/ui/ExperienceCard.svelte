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
		<h3 class="mb-1 font-headline text-xl font-bold text-primary uppercase">{item.company}</h3>
		<p
			class="mb-6 font-label text-[10px] tracking-widest text-on-surface-variant uppercase opacity-70"
		>
			{item.role}
		</p>
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
