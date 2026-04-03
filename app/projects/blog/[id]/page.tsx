import { projects } from "@/components/features/projects";
import Link from "next/link";
import { notFound } from "next/navigation";

interface BlogPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { id } = await params;
  const projectIndex = parseInt(id, 10);

  // Validate that the ID exists in the projects array
  if (
    isNaN(projectIndex) ||
    projectIndex < 0 ||
    projectIndex >= projects.length
  ) {
    notFound();
  }

  const project = projects[projectIndex];

  return (
    <section className="w-full max-w-4xl mx-auto py-20 px-6">
      {/* HEADER */}
      <div className="mb-8">
        <Link
          href="/projects"
          className="inline-block mb-6 text-blue-600 dark:text-blue-400 hover:underline"
        >
          ← Back to Projects
        </Link>
      </div>

      {/* PROJECT DETAILS */}
      <article className="space-y-8">
        <div>
          <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            {project.name}
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            {project.description}
          </p>
        </div>

        {/* IMAGE */}
        {project.image && (
          <div className="w-full h-96 bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden flex items-center justify-center">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* PROJECT LINK */}
        {project.link && (
          <div className="pt-4">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition"
            >
              View Project →
            </a>
          </div>
        )}
      </article>

      {/* NAVIGATION */}
      <nav className="mt-16 pt-8 border-t border-gray-300 dark:border-gray-600 flex justify-between">
        {projectIndex > 0 && (
          <Link
            href={`/projects/blog/${projectIndex - 1}`}
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            ← Previous Project
          </Link>
        )}
        {projectIndex < projects.length - 1 && (
          <Link
            href={`/projects/blog/${projectIndex + 1}`}
            className="ml-auto text-blue-600 dark:text-blue-400 hover:underline"
          >
            Next Project →
          </Link>
        )}
      </nav>
    </section>
  );
}
