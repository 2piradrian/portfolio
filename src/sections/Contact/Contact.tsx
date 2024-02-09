import ContactCard from "@/components/contact-card/ContactCard";
import Title from "@/components/title/Title";
import email from "../../assets/page/mail.svg";
import github from "../../assets/page/github.svg";
import linkedin from "../../assets/page/linkedin.svg";
import whatsapp from "../../assets/page/whatsapp.svg";
import style from "./style.module.css";

export default function Contact() {
	return (
		<section className="container">
			<Title text="Contáctame" />
			<div className={style.subcontainer}>
				<ContactCard
					href="https://www.linkedin.com/in/rodriguezcadr/"
					alt="Linkedin"
					img={linkedin}
				/>
				<ContactCard href="mailto:rodriguezcadr@gmail.com" alt="Email" img={email} />
				<ContactCard
					href="https://api.whatsapp.com/send?phone=543516135462"
					alt="Whatsapp"
					img={whatsapp}
				/>
				<ContactCard href="https://github.com/2piradrian" alt="Github" img={github} />
			</div>
		</section>
	);
}
