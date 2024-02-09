import { Project } from "@/data/projects";
import style from "./style.module.css";
import React from "react";
import Image from "next/image";
import ProjectElement from "@/components/project-element/ProjectElement";
import Tech from "@/components/tech/Tech";
import Title from "@/components/title/Title";

type Props = {
	project: Project;
};

function ProjectSection({ project }: Props) {
	const { structure } = project;
	return (
		<section className="container">
			<div className={style.container}>
				<div className={style.techBox}>
					<Title text={project.title} />
					<p className={style.longDescription}>{structure?.longDescription}</p>
					<h3 className={style.techsTitle}>Hecho con:</h3>
					<div className={style.technologiesContainer}>
						{project.techs.map((technology) => (
							<Tech tech={technology} key={technology} />
						))}
					</div>
				</div>
				<Image src={project.img[1]} alt={project.title} className={style.image} />
				<div className={style.linkContainer}>
					<h3 className={style.linksTitle}>Links:</h3>
					{project.links.map((link) => (
						<a href={link.url} className={style.link} key={link.reference}>
							{link.reference}
						</a>
					))}
				</div>
				<div className={style.content}>
					<ProjectElement structure={structure!} />
				</div>
			</div>
		</section>
	);
}

export default ProjectSection;
