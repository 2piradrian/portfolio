import style from "./style.module.css";

export default function Chip({ text }: { text: string }) {
	return <span className={style.container}>{text}</span>;
}
