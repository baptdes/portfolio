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

<svelte:element
	this={href ? 'a' : 'div'}
	{href}
	class="group flex items-center gap-3 sm:gap-6 {href ? 'cursor-pointer' : ''}"
>
	<div
		class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-surface-container-highest transition-all sm:h-14 sm:w-14 sm:rounded-2xl {href
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
		<div
			class="break-all font-headline text-sm font-bold sm:text-lg {href
				? 'transition-colors group-hover:text-primary'
				: ''}"
		>
			{value}
		</div>
		{#if subtitle}
			<div class="mt-0.5 font-label text-[9px] uppercase tracking-[0.2em] text-on-surface-variant opacity-50">
				{subtitle}
			</div>
		{/if}
	</div>
</svelte:element>
