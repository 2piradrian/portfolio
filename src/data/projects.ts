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
					content: "Notas",
				},
				{
					type: "text",
					content:
						"Debido a que es un proyecto en desarrollo para ser comercializado, no se puede mostrar el código.",
				},
				{
					type: "text",
					content:
						"En el proyecto tengo un socio, con el cual abrimos una S.A.S., sin embargo el es contador, por lo que yo me encargue de absolutamente todo lo técnico, diseño y desarrollo, mientras que el se encarga de la parte legal y financiera.",
				},
				{
					type: "text",
					content:
						"Actualmente tengo hecho el backend y la app con patrón repositorio y clean architecture.",
				},
				{
					type: "title",
					content: "Aprendizaje",
				},
				{
					type: "text",
					content:
						"El proyecto me llevo de la mano, y me hizo enfrentarme a varios desafíos. Como por ejemplo programar la comunicación bluetooth, comunicaciones tcp, el manejo eficiente de websockets, o la odisea de subir la app a la Google Play Store.",
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
		img: [getImagePath("botanist", "botanist.png"), getImagePath("botanist", "botanist.jpg")],
		title: "Botanist",
		description: "Red social de plantas",
		link: "/project/1",
		techs: ["KOTLIN", "COMPOSE", "TS", "NODEJS", "EXPRESS", "MONGODB", "SQL"],
		links: [
			{
				url: "https://github.com/2piradrian/botanist-app",
				reference: "Repositorio App",
			},
			{
				url: "https://github.com/2piradrian/botanist-backend",
				reference: "Repositorio Backend",
			},
		],
		structure: {
			longDescription: "Red social con temática de plantas, con funcionalidades de CRUD.",
			elements: [
				{
					type: "title",
					content: "Notas",
				},
				{
					type: "text",
					content:
						"Es una especie de red social, apenas es un MVP pues me encantaría agregarle más funciones. Pero por ahora tiene un CRUD de plantas y de usuarios, y un sistema de likes y seguidos.",
				},
				{
					type: "text",
					content:
						"Tanto el backend como el frontend fueron diseñados usando clean architecture y patrón repositorio.",
				},
				{
					type: "title",
					content: "El backend",
				},
				{
					type: "text",
					content:
						"Del lado del servidor, tengo un backend hecho en Node.js (Express) que utiliza dos bases de datos.",
				},
				{
					type: "text",
					content:
						"Esto surge de tomar el desafío que alguna vez un profesor de Spring Boot me dió: usar dos bases de datos en un solo backend, para esto usé MongoDB para la información de los usuarios y PostgreSQL para los posteos.",
				},
				{
					type: "title",
					content: "El frontend",
				},
				{
					type: "text",
					content:
						"Del lado del usuario, cuento con una app en Android Nativo hecha con Kotlin (Jetpack Compose), aprovechando y siguiendo los lineamientos de Google para hacer un diseño adaptativo, es decir, esta app es compatible con dispositivos plegables y tablets.",
				},
				{
					type: "title",
					content: "Diseño mobile",
				},
				{
					type: "image",
					content: getImagePath("botanist", "app (3).png"),
				},
				{
					type: "title",
					content: "Diseño foldable",
				},
				{
					type: "image",
					content: getImagePath("botanist", "app (1).png"),
				},
				{
					type: "title",
					content: "Diseño tablets",
				},
				{
					type: "image",
					content: getImagePath("botanist", "app (2).png"),
				},
			],
		},
	},
	{
		id: 2,
		img: [getImagePath("recipes", "recipes.png"), getImagePath("recipes", "recipes.jpg")],
		title: "Recipes Team",
		description: "Web-app colaborativa de recetas",
		link: "/project/2",
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
					content: "Notas",
				},
				{
					type: "text",
					content:
						"El proyecto fue presentado como trabajo final en el Bootcamp que realicé. Es uno de mis favoritos.",
				},
				{
					type: "text",
					content:
						"El proyecto fue realizado en dos versiones, una con Firebase, y otra con NodeJS, Express y MongoDB.",
				},
				{
					type: "text",
					content:
						"Como importante, el backend de la versión FullStack tarda en cargar, ya que está en un hosting gratuito. Tenle paciencia.",
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
				{
					type: "text",
					content:
						"Además me gustaría cambiar la arquitectura del backend y del frontend, son proyectos que hice cuando comenzaba, por lo que no he usado adaptadores para las librerías. ",
				},
			],
		},
	},
	{
		id: 3,
		img: [getImagePath("sietesys", "siete-sys.png"), getImagePath("sietesys", "siete-sys.jpg")],
		title: "Sistema de Información",
		description: "C.R.U.D. de presupuestos y stock",
		link: "/project/4",
		techs: ["TS", "REACT", "NODEJS", "EXPRESS", "MONGODB"],
		links: [
			{
				url: "https://github.com/2piradrian/siete-colores-sys",
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
	{
		id: 4,
		img: [getImagePath("siete", "siete.png"), getImagePath("siete", "siete.jpg")],
		title: "Siete colores",
		description: "E-commerce proyecto familiar.",
		link: "/project/3",
		techs: ["TS", "REACT"],
		links: [
			{
				url: "https://github.com/2piradrian/siete-colores-web",
				reference: "Github",
			},
			{
				url: "https://sietecolores3d.com.ar",
				reference: "Web",
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
						"El proyecto fue ideado principalmente para funcionar con firebase, sin embargo la que está en producción es una que simplemente lee los datos de un JSON, porque era mas sencillo para el cliente convertir su excel en este tipo de datos.",
				},
				{
					type: "title",
					content: "Aprendizaje",
				},
				{
					type: "text",
					content: "Fue la primera web que subí a producción en un hosting",
				},
			],
		},
	},
];
