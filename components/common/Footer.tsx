import { FaFacebookF, FaInstagram } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="mt-10 border-t border-indigo-200/60 bg-gradient-to-r from-indigo-800/90 via-slate-900/80 to-blue-800/90 text-white">
      <div className="max-w-screen-lg mx-auto flex flex-col sm:flex-row justify-between items-center gap-6 px-4 sm:px-6 lg:px-0 py-6">

        {/* COPYRIGHT */}
        <div className="text-center sm:text-left">
          <p className="text-sm font-semibold">
            © {new Date().getFullYear()} Jessie Catubay
          </p>
          <p className="text-xs text-slate-200">
            Building responsive web experiences with Next.js, Node.js, and Tailwind.
          </p>
        </div>

        {/* SOCIAL LINKS */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <h3 className="text-white text-lg mb-2 sm:mb-0">Socials</h3>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/itsmecracklings"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-blue-400 transition-colors"
            >
              <FaFacebookF />
              <span className="text-sm">Jessie Catubay</span>
            </a>

            <a
              href="https://www.instagram.com/itsmecracklings"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-pink-400 transition-colors"
            >
              <FaInstagram />
              <span className="text-sm">Jessie Catubay</span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}