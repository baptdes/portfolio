<script lang="ts">
	import { education } from '$lib/data/education';
	import SectionHeader from '$lib/components/ui/SectionHeader.svelte';
</script>

<section id="edu" class="bg-surface-dim px-6 py-32">
	<div class="mx-auto max-w-7xl">
		<div class="mb-20">
			<SectionHeader title="EDUCATION" align="center" />
		</div>

		<div class="grid grid-cols-1 gap-12 md:grid-cols-3">
			{#each education as item (item.index)}
				<div class="relative border-t border-outline-variant/10 pt-12">
					<div
						class="absolute -top-6 left-0 flex h-12 w-12 items-center justify-center font-headline font-bold {item.isPrimary
							? 'bg-primary text-on-primary'
							: 'border border-primary/30 bg-surface-container-highest text-primary'}"
					>
						{item.index}
					</div>
					<h3 class="mb-2 font-headline text-xl font-bold text-white">{item.institution}</h3>
					<p class="mb-4 font-label text-sm tracking-widest text-primary uppercase">
						{item.credential}
					</p>
					<p class="font-body text-sm leading-relaxed text-on-surface-variant opacity-80">
						{item.description}
					</p>
				</div>
			{/each}
		</div>
	</div>
</section>
