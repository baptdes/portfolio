<script lang="ts">
	import { stack } from '$lib/data/stack';
	import SectionHeader from '$lib/components/ui/SectionHeader.svelte';
</script>

<section id="stack" class="bg-surface-container-low px-6 py-32">
	<div class="mx-auto max-w-7xl">
		<div class="mb-20">
			<SectionHeader title="COMPETENCES" subtitle="Soft and Technical Skills" />
		</div>

		<div class="grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-6">
			{#each stack as category (category.title)}
				{#if category.variant === 'grid'}
					<div
						class="rounded-2xl border border-white/5 bg-surface-container-highest p-10 md:col-span-2 lg:col-span-3"
					>
						<div class="mb-10 flex items-center gap-4">
							<span
								class="material-symbols-outlined text-4xl {category.iconColor === 'primary'
									? 'text-primary'
									: 'text-secondary'}">{category.icon}</span
							>
							<h3 class="font-headline text-2xl font-bold tracking-tight uppercase">
								{category.title}
							</h3>
						</div>
						<div class="grid grid-cols-2 gap-x-8 gap-y-8">
							{#each category.gridItems ?? [] as sub (sub.category)}
								<div>
									<div
										class="mb-1 font-label text-[10px] tracking-widest uppercase opacity-70 {category.iconColor ===
										'primary'
											? 'text-primary'
											: 'text-secondary'}"
									>
										{sub.category}
									</div>
									<div class="font-body text-on-surface">{sub.items}</div>
								</div>
							{/each}
						</div>
					</div>
				{:else}
					<!-- Wide card: Autonomous Systems -->
					<div
						class="flex flex-col items-center gap-10 rounded-2xl border border-primary/10 bg-surface-container-low p-10 md:col-span-4 md:flex-row lg:col-span-6"
					>
						<div class="flex-shrink-0">
							<div class="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
								<span
									class="material-symbols-outlined text-4xl text-primary"
									style="font-variation-settings: 'FILL' 1, 'wght' 300, 'GRAD' 0, 'opsz' 24"
								>
									{category.icon}
								</span>
							</div>
						</div>
						<div class="flex-grow">
							<h3 class="mb-2 font-headline text-xl font-bold tracking-[0.2em] uppercase">
								{category.title}
							</h3>
							<p class="max-w-2xl font-body text-sm text-on-surface-variant opacity-80">
								{category.description}
							</p>
						</div>
						{#if category.decorativeIcons}
							<div class="flex gap-6 opacity-40">
								{#each category.decorativeIcons as icon, i (i)}
									<span class="material-symbols-outlined">{icon}</span>
								{/each}
							</div>
						{/if}
					</div>
				{/if}
			{/each}
		</div>
	</div>
</section>
