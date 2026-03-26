import Image from "next/image";

export function ProjectCard({ project }: any) {
  return (
    <div
      className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden hover:shadow-xl transition group animate-zoom-in flex flex-col"
    >
      {/* IMAGE */}
      <div className="relative w-full h-48 overflow-hidden">
        <Image
          src={project.image}
          alt={project.name}
          fill
          className="object-cover group-hover:scale-105 transition duration-300"
        />
      </div>

      {/* CONTENT */}
      <div className="p-5 flex flex-col h-full">
        <h2 className="text-xl font-bold text-gray-900">{project.name}</h2>
        <p className="text-gray-600 text-sm flex-grow">{project.description}</p>

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition mt-auto"
        >
          See More →
        </a>
      </div>
    </div>
  );
}
