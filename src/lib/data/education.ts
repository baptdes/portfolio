import type { EducationItem } from '$lib/types/portfolio';

export const education: EducationItem[] = [
	{
		index: '01',
		isPrimary: true,
		institution: 'ENSEEIHT',
		credential: 'Diplôme d\'ingénieur en Informatique',
		description:
			'IA, Vision par Ordinateur, Web, Mathématiques appliquées, Programmation.'
	},
	{
		index: '02',
		isPrimary: false,
		institution: 'CPGE HENRI WALLON',
		credential: 'Classe préparatoire aux grandes écoles en Mathématiques et Physique',
		description:
			'Mathématiques, Physique, Informatique (Python & Ocaml) - MPSI puis MP*'
	},
	{
		index: '03',
		isPrimary: false,
		institution: 'BACCALAURÉAT',
		credential: 'Mention très bien',
		description:
			'Spécialités Mathématiques & Physique'
	}
];
