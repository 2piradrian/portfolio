import { ProjectStructure } from "@/data/projects";
import Image from "next/image";
import React from "react";
import style from "./style.module.css";

type Props = {
	structure: ProjectStructure;
};

function ProjectElement({ structure }: Props) {
	return (
		<div className={style.container}>
			{structure.elements.map((element, index) => {
				switch (element.type) {
					case "image":
						return (
							<Image
								src={element.content}
								alt={element.alt!}
								key={index}
								className={style.image}
							/>
						);
					case "text":
						return (
							<p key={index} className={style.text}>
								{element.content}
							</p>
						);
					case "title":
						return (
							<h2 key={index} className={style.title}>
								{element.content}
							</h2>
						);
					default:
						return null;
				}
			})}
		</div>
	);
}

export default ProjectElement;
