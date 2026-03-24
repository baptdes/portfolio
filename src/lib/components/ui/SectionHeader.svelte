<script lang="ts">
	let {
		registry,
		title,
		subtitle,
		align = 'left'
	}: {
		registry?: string;
		title: string;
		subtitle?: string;
		align?: 'left' | 'center';
	} = $props();
</script>

<div class={align === 'center' ? 'text-center' : ''}>
	{#if registry}
		<div class="mb-4 font-headline text-xs tracking-[0.5em] text-primary uppercase">{registry}</div>
	{/if}
	<h2 class="font-headline text-4xl font-bold tracking-tight md:text-5xl">{title}</h2>
	{#if subtitle}
		<p
			class="mt-2 font-label text-xs tracking-[0.3em] text-on-surface-variant uppercase opacity-60"
		>
			{subtitle}
		</p>
	{/if}
	{#if align === 'center'}
		<div class="mx-auto mt-4 h-1 w-16 bg-primary"></div>
	{/if}
</div>
