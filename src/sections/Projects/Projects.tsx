import { Project } from "@/types/types";
import Title from "@/components/title/Title";
import ProjectCard from "@/components/project-card/ProjectCard";
import projects from "@/public/data/projects.json"
import style from "./style.module.css";

export default function Projects() {
	return (
		<section className="container" id="projects">
			<Title text="Proyectos" />
			<div className={style.projectContainer}>
				{projects?.map((project: Project) => (
					<ProjectCard key={project.id} {...project} />
				))}
			</div>
		</section>
	);
}
