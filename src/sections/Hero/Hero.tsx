import Image from "next/image";
import world from "../../assets/page/world.svg";
import style from "./style.module.css";

export default function Hero() {
	return (
		<div className={style.container}>
			<h1 className={style.name}>Adrián Rodriguez</h1>
			<p className={style.about}>Desarrollador Full Stack, y estudiante de ingeniería.</p>
			<div className={style.location}>
				<Image src={world} alt="World" />
				<p>Córdoba, Argentina.</p>
			</div>
		</div>
	);
}
