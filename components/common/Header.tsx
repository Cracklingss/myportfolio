"use client";

import Image from "next/image";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Header() {
  const { setTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <nav className="max-w-screen-lg mx-auto flex items-center justify-between py-3 px-4 sm:px-6 lg:px-0">
        
        {/* PROFILE */}
        <div className="flex items-center gap-3">
          <Image
            className="rounded-full border border-border shadow-sm"
            width={40}
            height={40}
            src={"/my-profile.jpg"}
            alt="Profile"
          />
          <div>
            <p className="font-semibold text-foreground">
              Jessie Catubay
            </p>
            <p className="text-xs text-muted-foreground">
              Web Developer
            </p>
          </div>
        </div>

        {/* NAV + THEME */}
        <div className="flex items-center gap-2">
          {["/", "/about", "/projects", "/contact"].map((path) => {
            const label = path === "/" ? "Home" : path.replace("/", "");

            return (
              <Link
                key={path}
                href={path}
                className="px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition"
              >
                {label.charAt(0).toUpperCase() + label.slice(1)}
              </Link>
            );
          })}

          {/* THEME TOGGLE */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="ml-2">
                <Sun className="h-[1.2rem] w-[1.2rem] scale-100 dark:scale-0 transition-all" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 dark:scale-100 transition-all" />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </header>
  );
}