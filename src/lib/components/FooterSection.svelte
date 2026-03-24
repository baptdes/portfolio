<script lang="ts">
	const socialLinks = [
		{ label: 'LINKEDIN', href: '#' },
		{ label: 'GITHUB', href: '#' },
		{ label: 'TWITTER', href: '#' }
	];
</script>

<footer class="w-full border-t border-white/5 bg-surface-container-lowest py-16">
	<div class="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-8 md:flex-row">
		<div class="font-headline text-[10px] tracking-[0.3em] text-neutral-500 uppercase">
			© 2024 BAPTISTE DESNOUCK <span class="mx-2 text-white/10">//</span> SYSTEMS ARCHITECT
		</div>
		<div class="flex gap-10 font-headline text-[10px] tracking-[0.3em] uppercase">
			{#each socialLinks as link (link.label)}
				<a href={link.href} class="text-neutral-500 transition-colors hover:text-primary">
					{link.label}
				</a>
			{/each}
		</div>
	</div>
</footer>
