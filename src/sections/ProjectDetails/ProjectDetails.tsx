import { Project } from "@/types/types";
import ProjectElement from "@/components/project-element/ProjectElement";
import Tech from "@/components/tech/Tech";
import Title from "@/components/title/Title";
import style from "./style.module.css";

type Props = {
	project: Project;
};

export default function ProjectDetails({ project }: Props) {
	const { structure } = project;
	return (
		<section className="container">
			<div className={style.container}>
				<div className={style.techBox}>
					<Title text={project.title} />
					<p className={style.longDescription}>{structure?.longDescription}</p>
					<h3 className={style.techsTitle}>Hecho con:</h3>
					<div className={style.technologiesContainer}>
						{project.technologies.map((technology) => (
							<Tech tech={technology} key={technology} />
						))}
					</div>
				</div>
				<img src={project.images[0]} alt={project.title} className={style.image} />
				<div className={style.content}>
					<ProjectElement structure={structure} />
				</div>
			</div>
		</section>
	);
}