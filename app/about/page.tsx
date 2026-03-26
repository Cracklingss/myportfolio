"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <div>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="page-section w-full max-w-5xl mx-auto space-y-16"
      >
        {/* TITLE */}
        <div className="space-y-3 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight">
            About{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Me
            </span>
          </h1>
          <p className="text-gray-600 text-lg">
            A little background about who I am and what I do.
          </p>
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-5 text-gray-700 leading-relaxed"
          >
            <p>
              I'm{" "}
              <span className="font-semibold text-gray-900">
                Jessie Francis Catubay
              </span>
              , a web developer passionate about building clean, responsive, and
              user-friendly applications.
            </p>

            <p>
              I specialize in{" "}
              <span className="font-semibold text-gray-900">
                Next.js, TypeScript, and Tailwind CSS
              </span>
              . I enjoy crafting interfaces that are visually appealing,
              accessible, and highly performant.
            </p>

            <p>
              My goal is to create apps that not only work beautifully but feel
              smooth, intuitive, and enjoyable to use.
            </p>
          </motion.div>

          {/* RIGHT SIDE CARD */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.03 }}
            className="bg-white shadow-xl border border-gray-200 rounded-2xl p-6 space-y-4 hover:shadow-2xl transition-all"
          >
            <h2 className="text-xl font-bold text-gray-900">
              What I Love Doing
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li>• Building clean UI & UX</li>
              <li>• Developing fast & scalable apps</li>
              <li>• Learning modern frameworks</li>
              <li>• Improving user experience</li>
              <li>• Backend API development (Node.js & Express)</li>
            </ul>
          </motion.div>
        </div>

        {/* SKILLS SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-xl border border-gray-200 rounded-2xl p-8 space-y-6 hover:shadow-2xl transition-all"
        >
          <h2 className="text-xl font-bold text-gray-900">My Skills</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {[
              "React",
              "Next.js",
              "Node.js",
              "Express",
              "Prisma",
              "JavaScript",
              "TypeScript",
            ].map((skill) => (
              <motion.span
                key={skill}
                whileHover={{ scale: 1.07 }}
                className="px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 text-gray-800 rounded-xl font-medium shadow-sm border border-gray-200 cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* DOWNLOAD RESUME */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.02 }}
          className="bg-white shadow-xl border border-gray-200 rounded-2xl p-6 text-center hover:shadow-2xl transition-all"
        >
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Download My Resume
          </h2>
          <a
            href="/resume.pdf"
            download
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-indigo-700 transition"
          >
            Download PDF
          </a>
          <p className="mt-2 text-gray-500 text-sm">
            Click the button to download my resume in PDF format.
          </p>
        </motion.div>
      </motion.section>
    </div>
  );
}
