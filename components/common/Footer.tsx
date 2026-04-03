import { FaFacebookF, FaInstagram } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-background">
      <div className="max-w-screen-lg mx-auto px-6 py-10">
        
        <div className="bg-card border border-border rounded-3xl p-6 md:p-8 shadow-lg flex flex-col sm:flex-row justify-between items-center gap-8">
          
          {/* LEFT */}
          <div className="text-center sm:text-left space-y-2">
            <p className="text-sm font-semibold text-foreground">
              © {new Date().getFullYear()} Jessie Catubay
            </p>
            <p className="text-sm text-muted-foreground">
              Building modern web applications with Next.js and Node.js.
            </p>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col items-center sm:items-end gap-3">
            <p className="text-sm font-medium text-muted-foreground">
              Socials
            </p>

            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/itsmecracklings"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition"
              >
                <FaFacebookF />
                <span className="text-sm">Facebook</span>
              </a>

              <a
                href="https://www.instagram.com/itsmecracklings"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition"
              >
                <FaInstagram />
                <span className="text-sm">Instagram</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}