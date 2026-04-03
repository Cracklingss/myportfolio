"use client";

import { projects } from "@/components/features/projects";
import { ProjectCard } from "@/components/common/ProjectCard";
import Link from "next/link";

interface DateFilterPageProps {
  params: Promise<{
    slug?: string[];
  }>;
}

export default async function DateFilterPage({ params }: DateFilterPageProps) {
  const { slug } = await params;

  // Optional catch-all segments
  // Can be empty [], one element ["2024"], or multiple ["2024", "march"]
  const year = slug?.[0] || null;
  const month = slug?.[1] || null;

  // Generate available years for filtering
  const availableYears = ["2024", "2025", "2026"];
  const availableMonths = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
  ];

  // Simulate date-based filtering
  let filteredProjects = [...projects];

  if (year === "2024") {
    // Only E-Commerce for 2024
    filteredProjects = projects.filter((p) => p.name === "E-Commerce");
  } else if (year === "2025") {
    // CareSync for 2025
    filteredProjects = projects.filter((p) => p.name === "CareSync");
  } else if (year === "2026") {
    // All projects for 2026
    filteredProjects = projects;
  }

  // Further filter by month if present (just a demo, doesn't actually filter)
  if (month && year) {
    // This is where you'd add actual month-based filtering logic
    // For now, it just shows the projects for that year
  }

  return (
    <section className="w-full max-w-6xl mx-auto space-y-12 py-20 px-6">
      {/* BREADCRUMB */}
      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
        <Link
          href="/projects"
          className="hover:text-blue-600 dark:hover:text-blue-400"
        >
          Projects
        </Link>
        <span>/</span>
        <span>date</span>
        {year && (
          <>
            <span>/</span>
            <span className="text-gray-900 dark:text-white font-medium">
              {year}
            </span>
          </>
        )}
        {month && (
          <>
            <span>/</span>
            <span className="text-gray-900 dark:text-white font-medium">
              {month.charAt(0).toUpperCase() + month.slice(1)}
            </span>
          </>
        )}
      </div>

      {/* TITLE */}
      <div className="text-center space-y-3">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
          Projects by Date
        </h1>
        <p className="text-gray-700 dark:text-gray-300 text-lg">
          {year && month
            ? `${month.charAt(0).toUpperCase() + month.slice(1)} ${year}`
            : year
              ? `Year ${year}`
              : "Browse all projects by year"}
        </p>
      </div>

      {/* YEAR SELECTOR */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          Select Year
        </h2>
        <div className="flex gap-3 flex-wrap">
          <Link
            href="/projects/date"
            className={`px-4 py-2 rounded-lg transition font-medium ${
              !year
                ? "bg-blue-600 text-white"
                : "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white"
            }`}
          >
            All Years
          </Link>
          {availableYears.map((y) => (
            <Link
              key={y}
              href={`/projects/date/${y}`}
              className={`px-4 py-2 rounded-lg transition font-medium ${
                year === y
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white"
              }`}
            >
              {y}
            </Link>
          ))}
        </div>
      </div>

      {/* MONTH SELECTOR - Only show if a year is selected */}
      {year && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Select Month (Optional)
          </h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-2">
            <Link
              href={`/projects/date/${year}`}
              className={`px-3 py-2 rounded-lg transition text-center text-sm font-medium ${
                !month
                  ? "bg-gray-800 text-white"
                  : "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white"
              }`}
            >
              All
            </Link>
            {availableMonths.map((m) => (
              <Link
                key={m}
                href={`/projects/date/${year}/${m}`}
                className={`px-3 py-2 rounded-lg transition text-center text-sm font-medium ${
                  month === m
                    ? "bg-gray-800 text-white"
                    : "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white"
                }`}
              >
                {m.substring(0, 3)}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* PROJECTS */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          {filteredProjects.length} Project
          {filteredProjects.length !== 1 ? "s" : ""} Found
        </h2>
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
          <div className="text-center py-12 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              No projects found for this date range.
            </p>
          </div>
        )}
      </div>

      {/* INFO BOX */}
      <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700 rounded-lg p-6">
        <h3 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">
          📅 About Optional Catch-All Segments
        </h3>
        <p className="text-blue-800 dark:text-blue-200 text-sm">
          This page uses the{" "}
          <code className="bg-blue-100 dark:bg-blue-900/50 px-2 py-1 rounded">
            [[...slug]]
          </code>{" "}
          pattern, which creates an optional catch-all route. This means you can
          visit:
          <br />•{" "}
          <code className="bg-blue-100 dark:bg-blue-900/50 px-2 py-1 rounded">
            /projects/date
          </code>{" "}
          (all projects)
          <br />•{" "}
          <code className="bg-blue-100 dark:bg-blue-900/50 px-2 py-1 rounded">
            /projects/date/2024
          </code>{" "}
          (projects by year)
          <br />•{" "}
          <code className="bg-blue-100 dark:bg-blue-900/50 px-2 py-1 rounded">
            /projects/date/2024/march
          </code>{" "}
          (projects by year and month)
        </p>
      </div>
    </section>
  );
}
