"use client";

import { projects } from "@/lib/projects";
import { ProjectCard } from "@/components/common/ProjectCard";

export default function Projects() {
  return (
    <section className="page-section w-full max-w-5xl mx-auto space-y-10 animate-fade-up mb-[150px]">
      {/* TITLE */}
      <div className="space-y-2">
        <h1 className="text-4xl font-extrabold tracking-tight">
          My{" "}
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Projects
          </span>
        </h1>
        <p className="text-gray-600 text-lg">
          A collection of my recent works and development practice.
        </p>
      </div>

      {/* PROJECT GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}
