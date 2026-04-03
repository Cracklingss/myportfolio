export default function About() {
  return (
    <div className="space-y-16">

      {/* MAIN ABOUT */}
      <section className="w-full max-w-5xl mx-auto py-20 px-6 space-y-12">
        <div className="text-center space-y-3">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">
            About{" "}
            <span className="text-black dark:text-white">
              Me
            </span>
          </h1>
          <p className="text-gray-700 dark:text-gray-300 text-lg">
            A little background about who I am and what I do.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-5 text-gray-700 dark:text-gray-500 leading-relaxed">
            <p className="text-gray-700 dark:text-white">
              I'm <span className="font-semibold text-gray-900 dark:text-white">Jessie Francis Catubay</span>, a web developer passionate about clean, responsive apps.
            </p>
            <p className="text-gray-700 dark:text-white">
              I specialize in <span className="font-semibold text-gray-900 dark:text-white">Next.js, TypeScript, Tailwind CSS</span>.
            </p>
            <p className="text-gray-700 dark:text-white">My goal is to create apps that feel smooth, intuitive, and enjoyable to use.</p>
          </div>

          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-lg border border-gray-200 dark:border-gray-700 rounded-3xl p-6 space-y-4 hover:shadow-2xl transition-all">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">What I Love Doing</h2>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>• Building clean UI & UX</li>
              <li>• Developing fast & scalable apps</li>
              <li>• Learning modern frameworks</li>
              <li>• Improving user experience</li>
              <li>• Backend API development (Node.js & Express)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="w-full max-w-5xl mx-auto px-6">
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-lg border border-gray-200 dark:border-gray-700 rounded-3xl p-8 space-y-6 hover:shadow-2xl transition-all">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">My Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {["React","Next.js","Node.js","Express","Prisma","JavaScript","TypeScript"].map(skill => (
              <span
                key={skill}
                className="px-4 py-2 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-xl font-medium shadow-sm border border-gray-200 dark:border-gray-600 cursor-default transition-transform hover:scale-105"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* RESUME */}
      <section className="w-full max-w-5xl mx-auto px-6">
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-lg border border-gray-200 dark:border-gray-700 rounded-3xl p-6 text-center hover:shadow-2xl transition-all">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Download My Resume</h2>
          <a
            href="/resume.pdf"
            download
            className="inline-block bg-gray-80 dark:bg-gray-900 text-gray-800 dark:text-gray-200 px-6 py-3 rounded-xl font-semibold shadow hover:scale-105 transition"
          >
            Download PDF
          </a>
          <p className="mt-2 text-gray-500 dark:text-gray-300 text-sm">
            Click the button to download my resume in PDF format.
          </p>
        </div>
      </section>

    </div>
  );
}