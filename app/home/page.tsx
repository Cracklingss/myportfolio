"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "@/lib/projects";
import { ProjectCard } from "@/components/common/ProjectCard";

export default function Home() {
  return (
    <div>
      <section className="page-section w-full max-w-6xl mx-auto px-6 py-28 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
              Jessie Francis Catubay
            </span>
          </h1>

          <p className="text-lg text-gray-600 leading-relaxed">
            I'm a passionate web developer focused on building beautiful and
            functional websites. My expertise is primarily in Backend
            Development using{" "}
            <span className="font-semibold text-gray-800">
              Node.js, Express.js, JavaScript, and TypeScript
            </span>
            .
          </p>

          <p className="text-lg text-gray-600 leading-relaxed">
            I&apos;m continuously improving my skills and exploring modern
            technologies to deliver efficient, scalable, and high-quality
            applications.
          </p>

          <a
            href="/projects"
            className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-xl shadow-md hover:bg-indigo-700 transition-all font-semibold"
          >
            View My Projects
          </a>
        </motion.div>

        {/* PROFILE IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center relative"
        >
          <Image
            src="/my-profile.jpg"
            alt="Jessie Francis Catubay"
            width={350} // smaller size
            height={350}
            priority
            className="rounded-2xl shadow-2xl object-cover border-4 border-white hover:scale-105 transition-transform"
          />
        </motion.div>

        {/* OPTIONAL: Background decorative circle */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-200/20 rounded-full -z-10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-200/20 rounded-full -z-10 blur-3xl"></div>
      </section>

      <section className="w-full max-w-6xl mx-auto px-6 py-20 space-y-10">

  {/* HEADER */}
  <div className="text-center space-y-3">
    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
      Recent{" "}
      <span className="bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
        Projects
      </span>
    </h2>
    <p className="text-gray-600 text-lg">
      Browse some of the projects I’ve recently worked on.
    </p>
  </div>

  {/* PROJECT GRID */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
    {projects.slice(0, 4).map((project, index) => (
      <ProjectCard key={index} project={project} />
    ))}
  </div>

  {/* VIEW ALL BUTTON */}
  <div className="text-center">
    <a
      href="/projects"
      className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-xl shadow-md hover:bg-indigo-700 transition-all font-semibold"
    >
      View All Projects
    </a>
  </div>

</section>
    </div>
  );
}
