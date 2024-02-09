import About from "@/sections/About/About";
import Education from "@/sections/Education/Education";
import Hero from "@/sections/Hero/Hero";
import Projects from "@/sections/Projects/Projects";
import Skills from "@/sections/Skills/Skills";

export default function Home() {
	return (
		<main>
			<Hero />
			<Skills />
			<Projects />
			<Education />
			<About />
		</main>
	);
}
