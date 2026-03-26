<script lang="ts">
	import type { Component } from 'svelte';

	let {
		icon,
		label,
		value,
		subtitle,
		href
	}: {
		// lucide-svelte v1 uses the Svelte 4 class API — accept any constructor alongside Component
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		icon: Component | (new (...args: any[]) => any);
		label: string;
		value: string;
		subtitle?: string;
		href?: string;
	} = $props();
</script>

<div class="group flex items-center gap-6">
	<div
		class="flex h-14 w-14 items-center justify-center rounded-2xl bg-surface-container-highest transition-all {href
			? 'group-hover:bg-primary'
			: ''}"
	>
		<div class="text-on-surface-variant {href ? 'group-hover:text-on-primary' : ''}">
			{#if icon}
				{@const Icon = icon}
				<Icon size={20} />
			{/if}
		</div>
	</div>
	<div>
		<div class="mb-1 font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant">
			{label}
		</div>
		{#if href}
			<a href={href} class="font-headline text-lg font-bold transition-colors hover:text-primary">
				{value}
			</a>
		{:else}
			<div class="font-headline text-lg font-bold">{value}</div>
		{/if}
		{#if subtitle}
			<div class="mt-0.5 font-label text-[9px] uppercase tracking-[0.2em] text-on-surface-variant opacity-50">
				{subtitle}
			</div>
		{/if}
	</div>
</div>
