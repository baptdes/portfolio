<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import type { NavLink } from '$lib/types/portfolio';

	const links: NavLink[] = [
		{ label: 'EXPERIENCES', href: '#exp' },
		{ label: 'EDUCATION', href: '#edu' },
		{ label: 'COMPETENCES', href: '#stack' },
		{ label: 'CONTACT', href: '#contact' }
	];

	let activeSection = $state('hero');
	let observer: IntersectionObserver;

	onMount(() => {
		const sections = document.querySelectorAll('#hero, #exp, #edu, #stack, #contact');
		observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						activeSection = entry.target.id;
					}
				}
			},
			{ rootMargin: '-40% 0px -50% 0px', threshold: 0 }
		);
		sections.forEach((el) => observer.observe(el));
	});

	onDestroy(() => observer?.disconnect());
</script>

<nav class="fixed top-0 z-50 w-full border-b border-white/5 bg-neutral-950/40 backdrop-blur-xl">
	<div class="mx-auto flex max-w-7xl items-center justify-between px-8 py-4">
		<a href="#hero" class="font-headline text-xl font-bold tracking-tighter text-primary">B.DESNOUCK</a>
		<div class="hidden items-center gap-8 font-headline text-xs tracking-widest uppercase md:flex">
			{#each links as link (link.href)}
				<a
					href={link.href}
					class={activeSection === link.href.slice(1)
						? 'font-medium text-primary'
						: 'text-neutral-400 transition-colors hover:text-neutral-100'}
					onclick={() => (activeSection = link.href.slice(1))}
				>
					{link.label}
				</a>
			{/each}
		</div>

		<a
			href="/resume.pdf"
			class="scale-95 rounded-lg bg-primary px-6 py-2 font-headline text-xs font-bold tracking-widest text-on-primary uppercase transition-all duration-300 hover:opacity-90 active:scale-90"
		>
			CV
		</a>
	</div>
</nav>
