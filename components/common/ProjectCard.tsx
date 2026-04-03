import Image from "next/image";
import Link from "next/link";

export function ProjectCard({ project, index }: any) {
  return (
    <div className="flex flex-col bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-3xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-2xl transition-all group">
      {/* IMAGE */}
      <div className="relative w-full h-48 overflow-hidden">
        <Image
          src={project.image}
          alt={project.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* CONTENT */}
      <div className="p-5 flex flex-col h-full">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">
          {project.name}
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-sm flex-grow mt-2">
          {project.description}
        </p>

        <div className="mt-4 flex gap-2">
          <Link
            href={`/projects/blog/${index}`}
            className="flex-1 inline-block px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-xl font-semibold shadow hover:bg-blue-700 dark:hover:bg-blue-600 hover:scale-105 transition text-center"
          >
            See More →
          </Link>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-xl font-semibold shadow hover:bg-gray-300 dark:hover:bg-gray-600 hover:scale-105 transition"
            title="Visit external project link"
          >
            🔗
          </a>
        </div>
      </div>
    </div>
  );
}
