export type Project = {
	id: number;
	img: string[];
	title: string;
	description: string;
	link: string;
	links: Link[];
	techs: Array<string>;
	structure?: ProjectStructure;
};

export type ProjectStructure = {
	longDescription: string;
	elements: Array<StructureElement>;
};

export type StructureElement = {
	type: "text" | "image" | "title" | "code";
	content: string;
	alt?: string;
};

export type Link = {
	url: string;
	reference: string;
};

const getImagePath = (folder: string, img: string) => {
	return require(`../assets/projects/${folder}/${img}`).default;
};

export const projects: Project[] = [
	{
		id: 0,
		img: [getImagePath("ads", "ads.png"), getImagePath("ads", "ads.jpg")],
		title: "Ayudante de Santa",
		description: "Sistema de cultivos automatizados",
		link: `/project/0`,
		techs: ["KOTLIN", "COMPOSE", "TS", "NODEJS", "EXPRESS", "MONGODB", "C++"],
		links: [
			{
				url: "https://play.google.com/store/apps/details?id=com.twopiradrian.ads",
				reference: "Google Play Store",
			},
			{
				url: "https://www.instagram.com/ayudantedsok/",
				reference: "Instagram",
			},
		],
		structure: {
			longDescription:
				"Sistema de cultivos automatizados, con control de humedad, temperatura, luz, y riego.",
			elements: [
				{
					type: "title",
					content: "El Proyecto",
				},
				{
					type: "text",
					content:
						"Debido a que es un proyecto en desarrollo para ser comercializado, no se puede mostrar el código. Pero se puede ver el progreso en el instagram del proyecto.",
				},
				{
					type: "title",
					content: "Aprendizaje",
				},
				{
					type: "text",
					content:
						"El proyecto me llevo de la mano, y me hizo enfrentarme a varios desafíos. Como por ejemplo programar el protocolo de comunicación para el bluetooth, el manejo eficiente de websockets, o la odisea de subir la app a la Google Play Store.",
				},
				{
					type: "title",
					content: "Estructura",
				},
				{
					type: "text",
					content:
						"Está estructurado en tres repositorios, uno para la app, otro para el backend, y otro para el firmware del microcontrolador.",
				},
				{
					type: "image",
					content: getImagePath("ads", "structure.png"),
					alt: "Estructura del proyecto",
				},
				{
					type: "title",
					content: "Producto",
				},
				{
					type: "text",
					content:
						"El producto consiste en un sistema de cultivos automatizados, con control de humedad, temperatura, luz, y riego. Con una app para controlar el sistema, y un backend para almacenar los datos y enviar notificaciones.",
				},
				{
					type: "image",
					content: getImagePath("ads", "product1.png"),
					alt: "Estructura del proyecto",
				},
			],
		},
	},
	{
		id: 1,
		img: getImagePath("recipes", "recipes.png"),
		title: "Recipes Team",
		description: "Web-app colaborativa de recetas",
		link: "/project/1",
		techs: ["TS", "REACT", "REDUX", "FIREBASE", "NODEJS", "EXPRESS", "MONGODB"],
		links: [
			{
				url: "https://recipes-frontend-ts.vercel.app",
				reference: "Web App (FullStack)",
			},
			{
				url: "https://github.com/2piradrian/recipes-frontend-ts",
				reference: "Repositorio FullStack Frontend",
			},
			{
				url: "https://github.com/2piradrian/recipes-backend-ts",
				reference: "Repositorio FullStack Backend",
			},

			{
				url: "https://recipes-web-ruddy.vercel.app",
				reference: "Web App (Firebase)",
			},
			{
				url: "https://github.com/2piradrian/recipes-web",
				reference: "Repositorio Firebase",
			},
		],
		structure: {
			longDescription:
				"Web-app colaborativa de recetas, con versiones de frontend y backend con Firebase, y con NodeJS, Express y MongoDB.",
			elements: [
				{
					type: "title",
					content: "El Proyecto",
				},
				{
					type: "text",
					content:
						"El proyecto fue presentado como trabajo final en el Bootcamp que realicé. Es uno de mis favoritos.",
				},
				{
					type: "title",
					content: "Aprendizaje",
				},
				{
					type: "text",
					content:
						"En un principio, el proyecto fue realizado con Firebase. Pero luego, decidí hacerlo con NodeJS, Express y MongoDB, para aprender a hacer un backend desde cero.",
				},
				{
					type: "title",
					content: "El futuro",
				},
				{
					type: "text",
					content:
						"Me gustaría seguir mejorando el proyecto, agregando funcionalidades. Cuando sea posible, me gustaría convertirla en una aplicación real, ya que aunque ahora mismo es funcional, aún le faltan detalles de diseño y usabilidad.",
				},
			],
		},
	},
	{
		id: 2,
		img: getImagePath("siete", "siete.png"),
		title: "Siete colores",
		description: "E-commerce proyecto familiar.",
		link: "/project/2",
		techs: ["TS", "REACT", "REDUX", "FIREBASE"],
		links: [
			{
				url: "https://github.com/2piradrian/siete-colores-web",
				reference: "Github",
			},
			{
				url: "https://sietecolores3d.com.ar",
				reference: "Web",
			},
			{
				url: "https://siete-colores.vercel.app/",
				reference: "Web Demo (Firebase | Vercel)",
			},
		],
		structure: {
			longDescription: "E-commerce proyecto familiar con cierre de compra en whatsapp.",
			elements: [
				{
					type: "title",
					content: "El Proyecto",
				},
				{
					type: "text",
					content:
						"El proyecto fue realizado para un familiar. Fue mi primer proyecto real. Aunque no es muy complejo, me sirvió para aprender a trabajar con un cliente.",
				},
				{
					type: "title",
					content: "Estructura",
				},
				{
					type: "text",
					content:
						"El proyecto fue ideado principalmente para funcionar con firebase. Esa es la versión de la rama master, sin embargo la que está en producción es una que simplemente lee los datos de un JSON, porque era mas sencillo para el cliente convertir su excel en este tipo de datos. Se puede encontrar en la rama `just-json`",
				},
				{
					type: "title",
					content: "Aprendizaje",
				},
				{
					type: "text",
					content:
						"El proyecto fue realizado en un principio con ReactJS, pero luego fue migrado a ReactTS, para aprender a trabajar con Typescript. Además fue la primera web que subí a producción en un hosting",
				},
			],
		},
	},
	{
		id: 3,
		img: getImagePath("sietesys", "siete-sys.png"),
		title: "Sistema de Información",
		description: "C.R.U.D. de presupuestos y stock",
		link: "/project/3",
		techs: ["TS", "REACT", "NODEJS", "EXPRESS", "MONGODB"],
		links: [
			{
				url: "https://github.com/2piradrian/sietecolores-sys",
				reference: "Github",
			},
		],
		structure: {
			longDescription:
				"Sistema para generar presupuestos y controlar stock para proyecto familiar de producción de objetos 3d.",
			elements: [
				{
					type: "title",
					content: "El Proyecto",
				},
				{
					type: "text",
					content:
						"Este proyecto fue realizado para un familiar. Quería aplicar lo que estaba viendo en Ingeniería en Sistemas de Información, y me pareció una buena oportunidad para hacerlo.",
				},
				{
					type: "title",
					content: "Aprendizaje",
				},
				{
					type: "text",
					content:
						"Este proyecto se ejecuta a través de un .exe, fue muy satisfactorio poder hacerlo. Además imprime los presupuestos en un formato personalizado, y genera un PDF con el presupuesto y el stock actualizado.",
				},
			],
		},
	},
];
