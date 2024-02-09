import Title from "@/components/title/Title";

export default function About() {
	return (
		<section id="about" className="container">
			<Title text="Sobre mí" />
			<p>
				Mi nombre completo es Cristian Adrián Rodriguez. Nacido en Córdoba Capital, Córdoba,
				Argentina.
			</p>
			<p>
				De todas las tecnologías que he aprendido, lo que más me gusta es el backend.
				Actualmente, estoy aprendiendo sobre el desarrollo de aplicaciones móviles nativas
				con Kotlin y Jetpack Compose.
			</p>
			<p>
				En general, me gusta aprender cosas nuevas. Pero no para acumular conocimientos,
				sino para aplicarlos y crear cosas.
			</p>
			<p>
				Aunque soy un poco duro para el inglés, me esfuerzo por mejorarlo. Leo las
				documentaciones, veo videos y trato de escribir en inglés.
			</p>
			<p>
				Me apasiona la idea de compartir y transmitir conocimientos. Admiro a quienes saben
				hacerlo y sueño profundamente con ser una de esas personas.
			</p>
			<p>
				En mis tiempos libres, me gusta jugar videojuegos, aunque a lo que más tiempo le
				dedico es a la música. Toco la guitarra y estoy aprendiendo a tocar el piano (soy
				malísimo cantando, pero me divierto).
			</p>
			<p>
				Fun fact: Mi nombre de github viene por mi gusto por las matemáticas. Una unidad
				para medir ángulos es el radian, y el parecido con mi nombre Adrián, termino
				formando 2piradrian. Que casualmente, la R que le falta a radian para formar Adrián
				es la inicial de mi apellido.
			</p>
		</section>
	);
}
