"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDownToLine, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { nav_links } from "@/lib/data";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-full md:max-w-[80%] mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="shrink-0" onClick={() => setMenuOpen(false)}>
          <Image
            src="/logo.svg"
            alt="Ogoh Francis logo"
            width={24}
            height={24}
          />
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          {nav_links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Button
          size="lg"
          className="hidden md:inline-flex gap-2"
          nativeButton={false}
          render={<a href="/Francis%20Ogoh%20CV1.pdf" download="Francis Ogoh CV.pdf" />}
        >
          <ArrowDownToLine className="h-3.5 w-3.5" />
          Download CV
        </Button>
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {menuOpen && (
        <nav
          id="mobile-menu"
          className="md:hidden border-t border-border bg-background px-4 py-4 flex flex-col gap-1"
        >
          {nav_links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="px-4 py-3 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Button
            size="lg"
            className="gap-2 mt-2 w-full"
            nativeButton={false}
            render={<a href="/Francis%20Ogoh%20CV1.pdf" download="Francis Ogoh CV.pdf" />}
            onClick={() => setMenuOpen(false)}
          >
            <ArrowDownToLine className="h-3.5 w-3.5" />
            Download CV
          </Button>
        </nav>
      )}
    </header>
  );
}
