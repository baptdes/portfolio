<script lang="ts">
	import { ArrowRight, MapPin } from 'lucide-svelte';
</script>

<section
	id="hero"
	class="hero-gradient relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6"
>
	<!-- Ambient glow -->
	<div class="pointer-events-none absolute inset-0 opacity-10">
		<div class="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary blur-[120px]"></div>
	</div>

	<div class="z-10 grid w-full max-w-7xl grid-cols-1 items-center gap-12 py-20 lg:grid-cols-2">
		<!-- Left: Text content -->
		<div class="text-center lg:text-left">
			<div
				class="mb-10 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 font-headline text-[10px] tracking-[0.3em] text-primary uppercase"
			>
				<MapPin size={14} />
				Toulouse, France · Mobile France
			</div>

			<h1
				class="mb-8 font-headline text-5xl leading-[0.9] font-bold tracking-tight text-white md:text-8xl"
			>
				BAPTISTE <br />DESNOUCK
			</h1>

			<div class="mb-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
				<span
					class="font-headline text-sm font-light tracking-[0.4em] text-on-surface-variant/80 uppercase md:text-lg"
				>
					Ingénieur IA
				</span>
				<span class="h-1 w-1 rounded-full bg-primary/40"></span>
				<span
					class="font-headline text-sm font-light tracking-[0.4em] text-on-surface-variant/80 uppercase md:text-lg"
				>
					Logiciel
				</span>
			</div>

			<p
				class="mx-auto mb-12 max-w-xl font-body text-base leading-relaxed text-on-surface-variant opacity-80 md:text-lg lg:mx-0"
			>
				Spécialisé en intelligence artificielle et vision par ordinateur, 
				je recherche un poste en développement ou en R&D <br />
				à partir d'<span class="font-semibold text-primary">octobre 2026</span>.
			</p>

			<div class="flex justify-center gap-6 lg:justify-start">
				<a
					href="#contact"
					class="flex items-center gap-3 rounded-xl bg-primary px-10 py-4 text-on-primary transition-all hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(211,254,67,0.2)]"
				>
					<span class="font-headline text-sm font-bold tracking-widest uppercase">Me contacter</span
					>
					<ArrowRight size={20} />
				</a>
			</div>
		</div>

		<!-- Right: Video placeholder -->
		<div class="group relative">
			<div
				class="absolute -inset-1 from-primary to-secondary opacity-20 blur-2xl transition-opacity group-hover:opacity-30"
			></div>
			<div
				class="relative aspect-video overflow-hidden rounded-3xl border border-white/10 bg-surface-container-highest shadow-2xl"
			>
				<div class="absolute inset-0 z-10 flex items-center justify-center bg-black/40">
					<button
						class="flex font-headline h-10 w-50 items-center justify-center rounded-full bg-primary/90 text-on-primary transition-transform hover:scale-110"
					>
						IN PROGRESS ⚒️
					</button>
				</div>
				<div class="h-full w-full bg-surface-container-highest"></div>
				<div class="absolute bottom-6 left-6 z-20">
					<div
						class="rounded bg-black/60 px-3 py-1 font-headline text-[10px] tracking-widest text-white uppercase backdrop-blur-md"
					>
						Video Intro // 0:45
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Key metrics -->
	<div class="z-10 mb-12 grid w-full max-w-5xl grid-cols-2 gap-4 px-6 opacity-50 md:grid-cols-3">
		<div class="text-center">
			<div class="font-headline text-2xl font-bold text-primary">New graduate</div>
			<div class="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">
				Status
			</div>
		</div>
		<div class="border-l border-outline-variant/20 text-center">
			<div class="font-headline text-2xl font-bold text-primary">AI/CV</div>
			<div class="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">
				Spécialisation
			</div>
		</div>
		<div class="border-l border-outline-variant/20 text-center">
			<div class="font-headline text-2xl font-bold text-primary">Oct 26</div>
			<div class="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">
				Availability
			</div>
		</div>
	</div>
</section>
