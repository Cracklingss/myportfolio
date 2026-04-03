"use client";

import Image from "next/image";
import { projects } from "@/components/features/projects";
import { ProjectCard } from "@/components/common/ProjectCard";
import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-24">
      {/* HERO SECTION */}
      <section className="w-full max-w-6xl mx-auto px-6 py-24 md:py-28 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-foreground">
              Hi, I'm{" "}
              <span className="underline underline-offset-4 decoration-muted-foreground">
                Jessie Francis Catubay
              </span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate web developer focused on building clean and
              functional websites. My expertise is primarily in backend
              development using{" "}
              <span className="font-semibold text-foreground">
                Node.js, Express.js, JavaScript, and TypeScript
              </span>
              .
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I continuously improve my skills and explore modern technologies
              to deliver efficient and scalable applications.
            </p>

            <Link
              href="/projects"
              className="inline-flex items-center px-6 py-3 rounded-xl font-semibold border border-border text-black dark:text-white hover:bg-accent hover:text-accent-foreground transition-all shadow-sm"
            >
              View My Projects →
            </Link>
          </div>

          {/* PROFILE IMAGE (CARD STYLE) */}
          <div className="flex justify-center">
            <div className="p-3 rounded-3xl bg-card border border-border shadow-xl hover:shadow-2xl transition">
              <Image
                src="/my-profile.jpg"
                alt="Jessie Francis Catubay"
                width={320}
                height={320}
                priority
                className="rounded-2xl object-cover hover:scale-105 transition-transform"
              />
            </div>
          </div>
        </div>

        {/* BACKGROUND GLOW */}
        <div className="absolute top-10 right-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl -z-10"></div>
      </section>

      {/* PROJECTS SECTION */}
      <section className="w-full max-w-6xl mx-auto px-6 space-y-12">
        {/* HEADER */}
        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
            Recent Projects
          </h2>
          <p className="text-muted-foreground text-lg">
            A selection of my recent work.
          </p>
        </div>

        {/* PROJECT CONTAINER */}
        <div className="bg-card border border-border rounded-3xl p-6 md:p-8 shadow-lg">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {projects.slice(0, 4).map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>

          {/* VIEW ALL */}
          <div className="text-center mt-10">
            <Link
              href="/projects"
              className="inline-flex items-center px-6 py-3 rounded-xl font-semibold border border-border text-black dark:text-white hover:bg-accent hover:text-accent-foreground transition-all shadow-sm"
            >
              View All Projects →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
