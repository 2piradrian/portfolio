export type Education = {
	id: number;
	name: string;
	institution: string;
	date: string;
};

export const education: Education[] = [
	{
		id: 0,
		name: "Ingeniería en Sistemas de Información",
		institution: "Universidad Tecnológica Nacional - FRC",
		date: "2023 - Actualidad",
	},
	{
		id: 1,
		name: "Ingeniería Electromecánica",
		institution: "Universidad Nacional de Córdoba - FCEFyN",
		date: "2020 - 2023 (Cambio de carrera)",
	},
	{
		id: 2,
		name: "Full Stack M.E.R.N. Development",
		institution: "Nucba",
		date: "2022 - 2023",
	},
	{
		id: 3,
		name: "Node.js: Backend Development",
		institution: "DevTalles",
		date: "2024 - 2024",
	},
	{
		id: 4,
		name: "Java & Spring Boot: Backend Development",
		institution: "Coderhouse",
		date: "2023 - 2023",
	},
];
