import Navbar from "../navbar/Navbar";
import style from "./style.module.css";

export default function Header() {
	return (
		<header className={style.container}>
			<div className={style.subcontainer}>
				<Navbar />
			</div>
		</header>
	);
}
