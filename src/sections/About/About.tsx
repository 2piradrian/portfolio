import Title from "@/components/title/Title";
import style from "./style.module.css";

export default function About() {
	return (
		<section id="about" className="container">
			<Title text="Sobre mí" />
			<div className={style.textContainer}>
				<p>
					En general, me gusta aprender cosas nuevas. Pero no para acumular conocimientos,
					sino para aplicarlos y crear cosas.
				</p>
				<p>
					Aunque soy un poco duro para el inglés, me esfuerzo por mejorarlo. Leo las
					documentaciones, veo videos y trato de escribir en inglés.
				</p>
				<p>
					Me apasiona la idea de compartir y transmitir conocimientos. Admiro a quienes
					saben hacerlo y sueño profundamente con ser una de esas personas.
				</p>
				<p>
					En mis tiempos libres, me gusta jugar videojuegos, aunque a lo que más tiempo le
					dedico es a la música. Toco la guitarra y estoy aprendiendo a tocar el piano.
				</p>
				<p>
					<span>Fun fact: </span> 
					Mi nombre de github viene por mi gusto por las matemáticas. Una unidad
					para medir ángulos es el radian, y el parecido con mi nombre Adrián, termino
					formando 2piradrian. Que casualmente, la R que le falta a radian para formar
					Adrián es la inicial de mi apellido.
				</p>
			</div>
		</section>
	);
}
