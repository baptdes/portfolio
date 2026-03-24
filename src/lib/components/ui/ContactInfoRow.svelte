<script lang="ts">
	let {
		icon,
		label,
		value,
		href
	}: {
		icon: string;
		label: string;
		value: string;
		href?: string;
	} = $props();
</script>

<div class="group flex items-center gap-6">
	<div
		class="flex h-14 w-14 items-center justify-center rounded-2xl bg-surface-container-highest transition-all {href
			? 'group-hover:bg-primary'
			: ''}"
	>
		<span class="material-symbols-outlined {href ? 'group-hover:text-on-primary' : ''}">{icon}</span
		>
	</div>
	<div>
		<div class="mb-1 font-label text-[10px] tracking-[0.2em] text-on-surface-variant uppercase">
			{label}
		</div>
		{#if href}
			<a {href} class="font-headline text-lg font-bold transition-colors hover:text-primary">
				{value}
			</a>
		{:else}
			<div class="font-headline text-lg font-bold uppercase">{value}</div>
		{/if}
	</div>
</div>
