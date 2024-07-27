export type Project = {
	id: number;
	title: string;
	description: string;
	technologies: string[];
	images: string[];
	links: Link[];
	structure: ProjectStructure;
};

export type ProjectStructure = {
	longDescription: string;
	elements: Array<StructureElement>;
};

export type StructureElement = {
	type: string;
	content: string;
	alt?: string;
};

export type Link = {
	url: string;
	name: string;
};

export type Education = {
	id: number;
	name: string;
	institution: string;
	date: string;
};