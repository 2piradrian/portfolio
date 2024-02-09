import { Project } from "@/data/projects";
import style from "./style.module.css";
import Image from "next/image";
import Link from "next/link";
import Tech from "../tech/Tech";

export default function ProjectCard({ title, description, img, techs, link }: Project) {
	return (
		<Link href={link} aria-label="go to the project" className={style.anchor}>
			<div className={style.container}>
				<Image src={img[0]} alt={title} className={style.image} />
				<div className={style.info}>
					<div className={style.titleContainer}>
						<h3 className={style.title}>{title}</h3>
					</div>
					<div className={style.descriptionContainer}>
						<p className={style.description}>{description}</p>
					</div>
					<div className={style.technologiesContainer}>
						{techs.map((technology) => (
							<Tech tech={technology} key={technology} />
						))}
					</div>
				</div>
			</div>
		</Link>
	);
}
