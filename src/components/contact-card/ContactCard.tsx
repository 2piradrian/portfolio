import Image from "next/image";
import React from "react";
import style from "./style.module.css";

type Props = {
	img: string;
	alt: string;
	href: string;
};

function ContactCard({ img, alt, href }: Props) {
	return (
		<div className={style.container}>
			<a href={href} aria-label={alt} target="_blank" rel="noreferrer">
				<Image src={img} alt={alt} />
			</a>
			<p className={style.text}>{alt}</p>
		</div>
	);
}

export default ContactCard;
