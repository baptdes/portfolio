import type { StackCategory } from '$lib/types/portfolio';

export const stack: StackCategory[] = [
	{
		variant: 'grid',
		icon: 'psychology',
		iconColor: 'primary',
		title: 'AI / ML Core',
		gridItems: [
			{ category: 'Deep Learning', items: 'PyTorch, TensorFlow' },
			{ category: 'Vision', items: 'OpenCV, YOLO, SAM' },
			{ category: 'Languages', items: 'Python, C++' },
			{ category: 'Analytics', items: 'Pandas, Scikit-learn' }
		]
	},
	{
		variant: 'grid',
		icon: 'terminal',
		iconColor: 'secondary',
		title: 'Fullstack / UI',
		gridItems: [
			{ category: 'Frameworks', items: 'Svelte, React' },
			{ category: 'Styling', items: 'Tailwind CSS' },
			{ category: 'Runtime', items: 'Node.js, Bun' },
			{ category: 'Database', items: 'Postgres, Redis' }
		]
	},
	{
		variant: 'wide',
		icon: 'robot_2',
		iconColor: 'primary',
		title: 'Autonomous Systems & Agents',
		description:
			'Implementing agentic workflows with Claude Code and LangGraph. Specialized in technical RAG architectures and autonomous developer tooling.',
		decorativeIcons: ['model_training', 'monitoring', 'schema']
	}
];
