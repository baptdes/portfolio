import type { ExperienceItem } from '$lib/types/portfolio';

export const experiences: ExperienceItem[] = [
	{
		variant: 'featured',
		company: 'Airbus Defence & Space',
		role: 'Apprenti en IA et traitement d’images',
		period: "SEP 2025 — AUJOURD'HUI",
		imageUrl:
			'https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2015/03/sentinel-2/15292661-1-eng-GB/Sentinel-2_pillars.jpg',
		imageAlt: 'Satellite Sentinel-2 qui orbite autour de la Terre',
		bullets: [
			"Développement de modules IA appliqués à l'imagerie géospatiale.",
			'Optimisation de données satellites pour deep learning.',
			'Déploiement en environnement cloud R&D'
		],
		tags: ['Python', 'PyTorch', 'Computer Vision', 'Cloud']
	},
	{
		variant: 'compact',
		company: 'UP2SMART',
		role: 'Stagiaire en recherche IA',
		period: 'JUIN 2025 — AOÛT 2025',
		imageUrl:
			'https://github.com/baptdes/YOLOx3D/raw/main/images_geo.png',
		imageAlt: "Résultats de détection d'objets 3D à partir d'une image monoculaire",
		description:
			"Développement et test d'un pipeline de détection 3D monoculaire.",
		tags: ['Python', 'Pytorch', 'Computer Vision']
	},
	{
		variant: 'compact',
		company: 'N7 Consulting',
		role: 'Responsable des Services Informatiques',
		period: 'MARS 2024 — MARS 2025',
		imageUrl:
			'https://cdn.prod.website-files.com/67a9fca34d150f14e73d9ba7/67a9fe01c0749a737a00f77e_Logo_N7C_classic_fond_bleu.png',
		imageAlt: 'Logo de N7 Consulting, une junior entreprise',
		description:
			'Gestion infrastructure IT & développement d\'automatisations avec App Script',
		tags: ['VPS', 'App Script', 'Automatisation']
	}
];
