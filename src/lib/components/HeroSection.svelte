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

	<div class="z-10 grid w-full max-w-7xl grid-cols-1 items-center gap-12 py-20">
		<!-- Left: Text content -->
		<div class="text-center">
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

			<div class="mb-10 flex flex-wrap items-center justify-center gap-4">
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
				class="mx-auto mb-12 max-w-xl font-body text-base leading-relaxed text-on-surface-variant opacity-80 md:text-lg"
			>
				Spécialisé en intelligence artificielle et vision par ordinateur, 
				je recherche un poste en développement ou en R&D <br />
				à partir d'<span class="font-semibold text-primary">octobre 2026</span>.
			</p>

			<div class="flex justify-center gap-6">
				<a href="#contact" class="btn-primary gap-3 px-10 py-4 text-sm">
					Me contacter
					<ArrowRight size={20} />
				</a>
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
