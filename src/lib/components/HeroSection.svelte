<script lang="ts">
	const videoPlaceholderUrl =
		'https://lh3.googleusercontent.com/aida-public/AB6AXuBfBz32cdo4e2yYQMoPmLM34xRFYDm2INnhT8A_mV9-oLIpcaxJT7uKI0xzVeDAKlkuNgvgZlY2AwnpLuymHz8guwD2aVTM52PnJXAGwK0WhUpq4Q9i4PGmOXFCRhY9SpNpZxqu2iee-6vsUYaAJdqsQRC-8LGWw1mbbWYFwMQcd7nE8E4UMSEgcntRl40SxC13qO8VDHwD8bGRp65yBT-2yTY5SL8QLj6b7maJvI0YChfoYwpR1AFOpJBcSrG5qVSRK4uIJixqjPli';
</script>

<section
	id="hero"
	class="soft-grain relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6"
>
	<!-- Background gradient -->
	<div class="hero-gradient pointer-events-none absolute inset-0 opacity-60"></div>

	<div class="z-10 grid w-full max-w-7xl grid-cols-1 items-center gap-12 py-20 lg:grid-cols-2">
		<!-- Left: Text content -->
		<div class="text-center lg:text-left">
			<div
				class="mb-10 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 font-headline text-[10px] tracking-[0.3em] text-primary uppercase"
			>
				<span class="material-symbols-outlined text-[14px]">my_location</span>
				Toulouse, France
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
					AI Engineer
				</span>
				<span class="h-1 w-1 rounded-full bg-primary/40"></span>
				<span
					class="font-headline text-sm font-light tracking-[0.4em] text-on-surface-variant/80 uppercase md:text-lg"
				>
					Software Architect
				</span>
			</div>

			<p
				class="mx-auto mb-12 max-w-xl font-body text-base leading-relaxed text-on-surface-variant opacity-80 md:text-lg lg:mx-0"
			>
				Architecting robust intelligence systems. Blending research-grade AI with production-ready
				software engineering. Currently welcoming new R&D challenges from
				<span class="font-semibold text-primary">OCT 2026</span>.
			</p>

			<div class="flex justify-center gap-6 lg:justify-start">
				<a
					href="#contact"
					class="flex items-center gap-3 rounded-xl bg-primary px-10 py-4 text-on-primary transition-all hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(211,254,67,0.2)]"
				>
					<span class="font-headline text-sm font-bold tracking-widest uppercase">Get in touch</span
					>
					<span class="material-symbols-outlined">arrow_forward</span>
				</a>
			</div>
		</div>

		<!-- Right: Video placeholder -->
		<div class="group relative">
			<div
				class="absolute -inset-1 rounded-[2rem] bg-gradient-to-r from-primary to-secondary opacity-20 blur-2xl transition-opacity group-hover:opacity-30"
			></div>
			<div
				class="relative aspect-video overflow-hidden rounded-3xl border border-white/10 bg-surface-container-highest shadow-2xl"
			>
				<div class="absolute inset-0 z-10 flex items-center justify-center bg-black/40">
					<button
						class="flex h-20 w-20 items-center justify-center rounded-full bg-primary/90 text-on-primary transition-transform hover:scale-110"
					>
						<span class="material-symbols-outlined text-4xl leading-none">play_arrow</span>
					</button>
				</div>
				<img
					src={videoPlaceholderUrl}
					alt="Video Placeholder Background"
					class="h-full w-full object-cover opacity-60"
				/>
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
</section>
