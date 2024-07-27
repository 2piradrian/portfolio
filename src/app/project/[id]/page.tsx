"use client";
import ProjectDetails from "@/sections/ProjectDetails/ProjectDetails";
import projects from "@/public/data/projects.json";

export default function Project({ params }: { params: { id: string } }) {
	// get the url id
	const projectId = parseInt(params.id as string);

	return (
		<main>
			<ProjectDetails project={projects[projectId] || projects[0]} />
		</main>
	);
}
