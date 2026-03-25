import type { Component } from 'svelte';
import {type LucideIcon} from '@lucide/svelte';

export interface ExperienceItem {
	variant: 'featured' | 'compact';
	company: string;
	role: string;
	period: string;
	imageUrl: string;
	imageAlt: string;
	description?: string;
	bullets?: string[];
	tags?: string[];
}

export interface ImpactItem {
	title: string;
	subtitle: string;
	badgeLabel: string;
	badgeVariant: 'neutral' | 'primary';
	imageUrl: string;
	imageAlt: string;
	description: string;
}

export interface EducationItem {
	index: string;
	isPrimary: boolean;
	institution: string;
	credential: string;
	description: string;
}

export interface StackSubItem {
	category: string;
	items: string;
}

export interface StackCategory {
	variant: 'grid' | 'wide';
	icon: LucideIcon;
	iconColor: 'primary' | 'secondary';
	title: string;
	gridItems?: StackSubItem[];
	description?: string;
	decorativeIcons?: LucideIcon[];
}

export interface NavLink {
	label: string;
	href: string;
}

export interface ContactInfoItem {
	icon: Component | LucideIcon;
	label: string;
	value: string;
	href?: string;
}
