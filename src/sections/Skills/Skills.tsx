import Title from "@/components/title/Title";
import Chip from "@/components/chip/Chip";
import skills from "@/public/data/skills.json"
import style from "./style.module.css";

export default function Skills() {
	return (
		<section className="container">
			<Title text="Habilidades" />
			<div className={style.groupContainer}>
				{skills.list.map((array, index) => (
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
