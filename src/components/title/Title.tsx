import style from "./style.module.css";

export default function Title({ text }: { text: string }) {
	return <h2 className={style.title}>{text}</h2>;
}
