<script lang="ts">
	import NavBar from '$lib/components/NavBar.svelte';
	import HeroSection from '$lib/components/HeroSection.svelte';
	import ExperienceSection from '$lib/components/ExperienceSection.svelte';
	import ImpactSection from '$lib/components/ImpactSection.svelte';
	import EducationSection from '$lib/components/EducationSection.svelte';
	import StackSection from '$lib/components/StackSection.svelte';
	import ContactSection from '$lib/components/ContactSection.svelte';
	import FooterSection from '$lib/components/FooterSection.svelte';
	import type { ActionData } from './$types';

	const { form }: { form: ActionData } = $props();
</script>

<NavBar />
<main class="relative">
	<HeroSection />
	<ExperienceSection />
	<ImpactSection />
	<EducationSection />
	<StackSection />
	<ContactSection {form} />
</main>
<FooterSection />
