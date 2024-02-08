import Title from "@/components/title/Title";
import Chip from "@/components/chip/Chip";
import style from "./style.module.css";
import { skills } from "@/data/skills";

export default function Skills() {
	return (
		<section className="container">
			<Title text="Habilidades" />
			<div className={style.groupContainer}>
				{skills.map((array, index) => (
					<div key={index} className={style.group}>
						{array.map((skill, index) => (
							<Chip key={index} text={skill} />
						))}
					</div>
				))}
			</div>
		</section>
	);
}
