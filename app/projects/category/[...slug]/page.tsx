"use client";

import { projects } from "@/components/features/projects";
import { ProjectCard } from "@/components/common/ProjectCard";
import Link from "next/link";

interface CategoryPageProps {
  params: Promise<{
    slug: string[];
  }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;

  // The slug is an array of segments, e.g., ["featured", "tech"]
  const category = slug?.[0] || "all";
  const subcategory = slug?.[1] || null;

  // Simulate category filtering logic
  let filteredProjects = [...projects];

  if (category !== "all") {
    // Filter based on category
    if (category === "frontend") {
      filteredProjects = projects.filter((p) =>
        ["E-Commerce", "CareSync"].includes(p.name),
      );
    } else if (category === "backend") {
      filteredProjects = projects.filter((p) =>
        ["E-Commerce"].includes(p.name),
      );
    } else if (category === "fullstack") {
      filteredProjects = projects;
    }
  }

  // Further filter by subcategory if present
  if (subcategory === "recent") {
    filteredProjects = filteredProjects.slice(0, 1);
  }

  return (
    <section className="w-full max-w-6xl mx-auto space-y-12 py-20 px-6">
      {/* BREADCRUMB NAVIGATION */}
      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
        <Link
          href="/projects"
          className="hover:text-blue-600 dark:hover:text-blue-400"
        >
          Projects
        </Link>
        <span>/</span>
        <Link
          href="/projects/category/all"
          className="hover:text-blue-600 dark:hover:text-blue-400"
        >
          category
        </Link>
        {slug.map((segment, index) => (
          <div key={index} className="flex items-center gap-2">
            <span>/</span>
            <span className="text-gray-900 dark:text-white font-medium">
              {segment}
            </span>
          </div>
        ))}
      </div>

      {/* TITLE & FILTERS */}
      <div className="text-center space-y-3">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
          {category.charAt(0).toUpperCase() + category.slice(1)} Projects
        </h1>
        <p className="text-gray-700 dark:text-gray-300 text-lg">
          Viewing {filteredProjects.length} project
          {filteredProjects.length !== 1 ? "s" : ""}{" "}
          {subcategory && `(${subcategory})`}
        </p>
      </div>

      {/* CATEGORY FILTER LINKS */}
      <div className="flex gap-4 justify-center flex-wrap">
        <Link
          href="/projects/category/all"
          className={`px-4 py-2 rounded-lg transition ${
            category === "all"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
          }`}
        >
          All
        </Link>
        <Link
          href="/projects/category/frontend"
          className={`px-4 py-2 rounded-lg transition ${
            category === "frontend"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
          }`}
        >
          Frontend
        </Link>
        <Link
          href="/projects/category/backend"
          className={`px-4 py-2 rounded-lg transition ${
            category === "backend"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
          }`}
        >
          Backend
        </Link>
        <Link
          href="/projects/category/fullstack"
          className={`px-4 py-2 rounded-lg transition ${
            category === "fullstack"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
          }`}
        >
          Full Stack
        </Link>
      </div>

      {/* SUBCATEGORY FILTER */}
      <div className="flex gap-2 justify-center">
        <Link
          href={`/projects/category/${category}`}
          className={`px-3 py-1 text-sm rounded transition ${
            !subcategory
              ? "bg-gray-800 text-white"
              : "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
          }`}
        >
          All
        </Link>
        <Link
          href={`/projects/category/${category}/recent`}
          className={`px-3 py-1 text-sm rounded transition ${
            subcategory === "recent"
              ? "bg-gray-800 text-white"
              : "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
          }`}
        >
          Recent Only
        </Link>
      </div>

      {/* PROJECT GRID */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const actualIndex = projects.findIndex(
              (p) => p.name === project.name,
            );
            return (
              <ProjectCard
                key={actualIndex}
                project={project}
                index={actualIndex}
              />
            );
          })}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            No projects found for this category.
          </p>
        </div>
      )}
    </section>
  );
}
