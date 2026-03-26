"use client";

import Image from "next/image";

export function Header() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/20 bg-gradient-to-r from-indigo-700/80 via-blue-600/80 to-cyan-600/80 backdrop-blur-md shadow-2xl">
      <nav className="max-w-screen-lg mx-auto flex items-center justify-between py-3 px-4 sm:px-6 lg:px-0">
        <div className="flex items-center gap-3">
          <Image
            className="rounded-full border-2 border-white/90 shadow-lg"
            width={44}
            height={44}
            src={"/my-profile.jpg"}
            alt="Profile"
          />
          <div>
            <p className="font-bold text-white tracking-tight">
              Jessie Francis Catubay
            </p>
            <p className="text-xs font-medium text-white/80">Web Developer</p>
          </div>
        </div>

        <div className="flex gap-2 text-sm font-semibold">
          {["/home", "/about", "/projects", "/contact"].map((path) => {
            const label = path.replace("/", "") || "Home";
            return (
              <a
                key={path}
                href={path}
                className="px-3 py-2 rounded-lg text-white/90 hover:text-white hover:bg-white/15 transition duration-200"
              >
                {label.charAt(0).toUpperCase() + label.slice(1)}
              </a>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
