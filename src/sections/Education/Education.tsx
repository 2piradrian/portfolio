import Title from "@/components/title/Title";
import style from "./style.module.css";
import { education } from "@/data/education";
import EducationItem from "@/components/education-item/EducationItem";

export default function Education() {
	return (
		<section className="container" id="education">
			<Title text="Educación" />
			<div className={style.educationContainer}>
				{education.map((item) => (
					<EducationItem key={item.id} {...item} />
				))}
			</div>
		</section>
	);
}
