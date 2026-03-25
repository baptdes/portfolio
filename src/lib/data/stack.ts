import { Activity, Bot, Brain, GitGraph, Network, Terminal } from 'lucide-svelte';
import type { StackCategory } from '$lib/types/portfolio';

export const stack: StackCategory[] = [
	{
		variant: 'grid',
		icon: Brain,
		iconColor: 'primary',
		title: 'AI / ML',
		gridItems: [
			{ category: 'Deep Learning', items: 'PyTorch, TensorFlow' },
			{ category: 'Vision', items: 'OpenCV, YOLO, SAM' },
			{ category: 'Langages', items: 'Python, C++' }
		]
	},
	{
		variant: 'grid',
		icon: Terminal,
		iconColor: 'secondary',
		title: 'Fullstack / UI',
		gridItems: [
			{ category: 'Frameworks', items: 'Svelte' },
			{ category: 'Styling', items: 'Tailwind CSS' },
			{ category: 'Database', items: 'PostgreSQL' },
			{ category: 'Backend', items: 'SvelteKit, SpringBoot' }
		]
	},
	{
		variant: 'wide',
		icon: Bot,
		iconColor: 'primary',
		title: 'Agents IA',
		description:
			"Je me tiens à jour sur les dernières avancées en matière d'agents IA et je suis capable d'en utiliser à leurs pleines capacités sur certains de mes projets et dans mon travail.",
		decorativeIcons: [GitGraph, Activity, Network]
	}
];
