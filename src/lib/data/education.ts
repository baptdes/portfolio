import type { EducationItem } from '$lib/types/portfolio';

export const education: EducationItem[] = [
	{
		index: '01',
		isPrimary: true,
		institution: 'ENSEEIHT',
		credential: 'Engineering Degree',
		description:
			'Computer Science & Applied Mathematics. Specialization in High Performance Computing and AI Architecture.'
	},
	{
		index: '02',
		isPrimary: false,
		institution: 'CPGE HENRI WALLON',
		credential: 'Preparatory Classes',
		description:
			'MPSI/MP* Intensive mathematics and physics track. Elite national curriculum for engineering preparation.'
	},
	{
		index: '03',
		isPrimary: false,
		institution: 'BACCALAURÉAT',
		credential: 'Scientific Mention',
		description:
			'Graduated with Highest Honors (Félicitations du Jury). Strong foundation in analytical sciences.'
	}
];
