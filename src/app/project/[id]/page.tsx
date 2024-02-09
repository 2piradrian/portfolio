"use client";

import { projects } from "@/data/projects";
import ProjectSection from "@/sections/Project/ProjectSection";

export default function Project({ params }: { params: { id: string } }) {
	// get the url id
	const projectId = parseInt(params.id as string);

	return (
		<main>
			<ProjectSection project={projects[projectId] || projects[0]} />
		</main>
	);
}
