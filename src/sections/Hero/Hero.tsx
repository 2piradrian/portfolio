import Image from "next/image";
import Link from "next/link";

import me from "../../assets/page/me.jpg";
import world from "../../assets/page/world.svg";
import style from "./style.module.css";

export default function Hero() {
	return (
		<section className="container">
			<Image src={me} alt="Me" className={style.me} />
			<h1 className={style.name}>Adrián Rodriguez</h1>
			<p className={style.about}>Desarrollador Full Stack, y estudiante de ingeniería.</p>
			<div className={style.location}>
				<Image src={world} alt="World" />
				<p>Córdoba, Argentina.</p>
			</div>
			<div className={style.contact}>
				<Link href="mailto:rodriguezcadr@gmail.com">Contáctame</Link>
				<Link href="https://www.linkedin.com/in/rodriguezcadr/">Linkedin</Link>
			</div>
		</section>
	);
}
