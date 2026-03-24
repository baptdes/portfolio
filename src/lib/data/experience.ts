import type { ExperienceItem } from '$lib/types/portfolio';

export const experiences: ExperienceItem[] = [
	{
		variant: 'featured',
		company: 'Airbus Defence & Space',
		role: 'Machine Learning Engineer Intern',
		period: 'APR 2024 — SEP 2024',
		imageUrl:
			'https://lh3.googleusercontent.com/aida-public/AB6AXuBfBz32cdo4e2yYQMoPmLM34xRFYDm2INnhT8A_mV9-oLIpcaxJT7uKI0xzVeDAKlkuNgvgZlY2AwnpLuymHz8guwD2aVTM52PnJXAGwK0WhUpq4Q9i4PGmOXFCRhY9SpNpZxqu2iee-6vsUYaAJdqsQRC-8LGWw1mbbWYFwMQcd7nE8E4UMSEgcntRl40SxC13qO8VDHwD8bGRp65yBT-2yTY5SL8QLj6b7maJvI0YChfoYwpR1AFOpJBcSrG5qVSRK4uIJixqjPli',
		imageAlt: 'Satellite orbiting earth with data overlay',
		bullets: [
			'Developed advanced neural networks for satellite imagery analysis and object detection.',
			'Optimized inference pipelines reducing latency by 40% on embedded hardware.'
		]
	},
	{
		variant: 'compact',
		company: 'UP2SMART',
		role: 'AI & Computer Vision Specialist',
		period: '',
		imageUrl:
			'https://lh3.googleusercontent.com/aida-public/AB6AXuCrFnsKiqCnvkf8dNVR2hrycJsv8SNN3IUIYYKfyfqa9Xwq3tnpeKR_zKG2ktl5hAU3qSITk4k7btdufE_QF6BwczqAa2RcFGEwx7HQQ6xkVwEkbsWM9qsvAARslGtuhCjvl1oK3jKNa4qa-xDten9nHYqMoA3_QxeytoN3T_jsQWbQ7BGrU_gBb7BhfR-db64asIMo6vfQSLwlecbRbfv8OVMknW6YuykKRZFsO5PUE61erzUAAiYyj5HiyELrPVqVAh00JqpEFXYy',
		imageAlt: 'Industrial smart city monitoring with AI nodes',
		description:
			'Leading development of real-time monitoring via edge AI. Specialized in industrial safety CV algorithms.',
		tags: ['PyTorch', 'Jetson']
	},
	{
		variant: 'compact',
		company: 'N7 Consulting',
		role: 'Project Manager / Tech Lead',
		period: '',
		imageUrl:
			'https://lh3.googleusercontent.com/aida-public/AB6AXuDK85PBHHbwiEISUok6tlYpNAn8lxgxbdo8KXxkRxOgCK3Sg9t6D4D_3VMmtgmdpkDC4EZNaSfgo4kF0qnRNb2gouiYUAlXf47SPE1th_wGLL4TWdPE3ljNpO792RzheHWhPqpb_JBh4d9pnsP_FcMH23KLPOvLIuriUFLpFCugCwR6KxxFuZrAz8emz-DTyd0If0a3RECAJMCbCKZjMseg2ZaVas5ZPRZMjxZ1NXHN3f7puycGS9udguYGTRx4gxlIvhuG7rV0L_mn',
		imageAlt: 'Professional boardroom with architectural blueprints',
		description:
			'Managing engineering delivery for high-stakes projects. Leading cross-functional teams of 10+ developers.',
		tags: ['Agile', 'Architecture']
	}
];
