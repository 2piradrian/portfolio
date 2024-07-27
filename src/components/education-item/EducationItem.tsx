import { Education } from "@/types/types";
import style from "./style.module.css";

export default function EducationItem(education: Education) {
	return (
		<div className={style.container}>
			<h3>{education.name}</h3>
			<p>{education.institution}</p>
			<p>{education.date}</p>
		</div>
	);
}
