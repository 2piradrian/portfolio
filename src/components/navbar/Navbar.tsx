import NavItem from "./NavItem";
import style from "./style.module.css";

export default function Navbar() {
	return (
		<div>
			<ul className={style.navList}>
				<NavItem href="/#projects" arialabel="Proyectos" title="Proyectos" />
				<NavItem href="/#education" arialabel="Educación" title="Educación" />
				<NavItem href="/#contact" arialabel="Contacto" title="Contacto" />
			</ul>
		</div>
	);
}
