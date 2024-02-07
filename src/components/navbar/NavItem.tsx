import Link from "next/link";
import style from "./style.module.css";

type Props = {
	href: string;
	arialabel: string;
	title: string;
};

export default function NavItem({ href, arialabel, title }: Props) {
	return (
		<li className={style.navRoutes}>
			<Link href={href} aria-label={arialabel}>
				{title}
			</Link>
		</li>
	);
}
