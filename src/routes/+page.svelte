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
    
    let { form }: { form: ActionData } = $props();
    
    const description =
        "Baptiste Desnouck, ingénieur IA et logiciel. Disponible pour un poste en développement ou R&D à partir d'octobre 2026. Basé à Toulouse, mobile sur toute la France.";
    const siteUrl = 'https://www.baptistedesnouck.fr';
    
    const personSchema = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Baptiste Desnouck',
        jobTitle: 'Ingénieur IA & Logiciel',
        url: siteUrl,
        email: 'baptiste.desnouck@gmail.com',
        sameAs: [
            'https://www.linkedin.com/in/baptiste-desnouck',
            'https://github.com/baptdes'
        ],
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Toulouse',
            addressCountry: 'FR'
        },
        knowsAbout: ['Intelligence Artificielle', 'Vision par Ordinateur', 'Développement Logiciel', "AI agents"]
    };
    
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const personSchemaJson = JSON.stringify(personSchema);  
</script>

<svelte:head>
    <meta name="description" content={description} />
    <meta name="author" content="Baptiste Desnouck" />
    <meta name="robots" content="index, follow" />
    <!-- Open Graph -->
    <meta property="og:type" content="profile" />
    <meta property="og:title" content="Baptiste Desnouck — Ingénieur IA & Logiciel" />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={siteUrl} />
    <meta property="og:locale" content="fr_FR" />
    <meta property="profile:first_name" content="Baptiste" />
    <meta property="profile:last_name" content="Desnouck" />
    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content="Baptiste Desnouck — Ingénieur IA & Logiciel" />
    <meta name="twitter:description" content={description} />
    <!-- JSON-LD Person schema -->
    <script type="application/ld+json">
        {personSchemaJson}
    </script>
</svelte:head>

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