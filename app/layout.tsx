import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/provider/themes-provider";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jessie Francis Catubay",
  description: "Portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`
          ${geistSans.variable} 
          ${geistMono.variable} 
          antialiased
          bg-white text-gray-900
          dark:bg-black dark:text-gray-100
        `}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            
            {/* HEADER */}
            <Header />

            {/* MAIN CONTENT */}
            <main className="flex-1 w-full max-w-screen-lg mx-auto px-6 mt-24">
              {children}
            </main>

            {/* FOOTER */}
            <Footer />

          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}