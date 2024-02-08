import Title from "@/components/title/Title";
import style from "./style.module.css";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/project-card/ProjectCard";

export default function Projects() {
	return (
		<section className="container">
			<Title text="Proyectos" />
			<div className={style.projectContainer}>
				{projects.map((project) => (
					<ProjectCard key={project.id} {...project} />
				))}
			</div>
		</section>
	);
}
