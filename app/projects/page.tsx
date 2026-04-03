"use client";

import { useState, useMemo } from "react";
import { projects } from "@/components/features/projects";
import { ProjectCard } from "@/components/common/ProjectCard";
import Link from "next/link";
import { Search, Filter, Calendar, Tag } from "lucide-react";

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedYear, setSelectedYear] = useState("all");

  const filteredProjects = useMemo(() => {
    return projects.filter((project, index) => {
      // Text search filter
      const matchesSearch =
        searchQuery === "" ||
        project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase());

      // Category filter
      let matchesCategory = true;
      if (selectedCategory !== "all") {
        if (selectedCategory === "frontend") {
          matchesCategory = ["E-Commerce", "CareSync"].includes(project.name);
        } else if (selectedCategory === "backend") {
          matchesCategory = ["E-Commerce"].includes(project.name);
        } else if (selectedCategory === "fullstack") {
          matchesCategory = true; // All projects are fullstack for demo
        }
      }

      // Year filter (simulated based on project names)
      let matchesYear = true;
      if (selectedYear !== "all") {
        if (selectedYear === "2024") {
          matchesYear = project.name === "E-Commerce";
        } else if (selectedYear === "2025") {
          matchesYear = project.name === "CareSync";
        } else if (selectedYear === "2026") {
          matchesYear = true; // All projects for 2026
        }
      }

      return matchesSearch && matchesCategory && matchesYear;
    });
  }, [searchQuery, selectedCategory, selectedYear]);

  const categories = [
    { value: "all", label: "All Categories" },
    { value: "frontend", label: "Frontend" },
    { value: "backend", label: "Backend" },
    { value: "fullstack", label: "Full Stack" },
  ];

  const years = [
    { value: "all", label: "All Years" },
    { value: "2024", label: "2024" },
    { value: "2025", label: "2025" },
    { value: "2026", label: "2026" },
  ];

  return (
    <section className="w-full max-w-6xl mx-auto space-y-12 py-20 px-6">
      {/* TITLE */}
      <div className="text-center space-y-3">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
          My <span className="text-black dark:text-white">Projects</span>
        </h1>
        <p className="text-gray-700 dark:text-gray-300 text-lg">
          A collection of my recent works and development practice.
        </p>
      </div>

      {/* SEARCH AND FILTERS */}
      <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
        {/* SEARCH BAR */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search projects by name or description..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          />
        </div>

        {/* FILTER BUTTONS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* CATEGORY FILTERS */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Tag className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              <span className="font-medium text-gray-900 dark:text-white">
                Category
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Link
                  key={category.value}
                  href={`/projects/category/${category.value}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedCategory(category.value);
                  }}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                    selectedCategory === category.value
                      ? "bg-blue-600 text-white shadow-md"
                      : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                  }`}
                >
                  {category.label}
                </Link>
              ))}
            </div>
          </div>

          {/* YEAR FILTERS */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Calendar className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              <span className="font-medium text-gray-900 dark:text-white">
                Year
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {years.map((year) => (
                <Link
                  key={year.value}
                  href={
                    year.value === "all"
                      ? "/projects/date"
                      : `/projects/date/${year.value}`
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedYear(year.value);
                  }}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                    selectedYear === year.value
                      ? "bg-green-600 text-white shadow-md"
                      : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                  }`}
                >
                  {year.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* ACTIVE FILTERS DISPLAY */}
        {(searchQuery ||
          selectedCategory !== "all" ||
          selectedYear !== "all") && (
          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <Filter className="w-4 h-4" />
              <span>Active filters:</span>
              {searchQuery && (
                <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-2 py-1 rounded">
                  Search: "{searchQuery}"
                </span>
              )}
              {selectedCategory !== "all" && (
                <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 px-2 py-1 rounded">
                  Category:{" "}
                  {categories.find((c) => c.value === selectedCategory)?.label}
                </span>
              )}
              {selectedYear !== "all" && (
                <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-2 py-1 rounded">
                  Year: {selectedYear}
                </span>
              )}
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                  setSelectedYear("all");
                }}
                className="text-red-600 dark:text-red-400 hover:underline ml-2"
              >
                Clear all
              </button>
            </div>
          </div>
        )}
      </div>

      {/* PROJECT GRID */}
      <div>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            {filteredProjects.length === projects.length
              ? "All Projects"
              : `${filteredProjects.length} Project${filteredProjects.length !== 1 ? "s" : ""} Found`}
          </h2>
          {filteredProjects.length !== projects.length && (
            <Link
              href="/projects"
              className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
                setSelectedYear("all");
              }}
            >
              View all projects →
            </Link>
          )}
        </div>

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
          <div className="text-center py-16 bg-gray-50 dark:bg-gray-800/50 rounded-2xl">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No projects found
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Try adjusting your search or filter criteria.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
                setSelectedYear("all");
              }}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
