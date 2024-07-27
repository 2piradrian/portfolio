import { Project } from "@/types/types";
import Link from "next/link";
import Tech from "../tech/Tech";
import style from "./style.module.css";

export default function ProjectCard({ id, title, description, images, technologies }: Project) {
	return (
		<Link href={`/project/${id}`} aria-label="go to the project" className={style.anchor}>
			<div className={style.container}>
				<img src={images[0]} alt={title} className={style.image} />
				<div className={style.info}>
					<div className={style.titleContainer}>
						<h3 className={style.title}>{title}</h3>
					</div>
					<div className={style.descriptionContainer}>
						<p className={style.description}>{description}</p>
					</div>
					<div className={style.technologiesContainer}>
						{technologies.map((technology) => (
							<Tech tech={technology} key={technology} />
						))}
					</div>
				</div>
			</div>
		</Link>
	);
}
