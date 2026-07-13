import { Button } from "@/components/ui/button";
import { ArrowDownToLine } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { nav_links } from "@/lib/data";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-[90%] mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="shrink-0">
          <Image
            src="/logo.svg"
            alt="Ogoh Francis logo"
            width={24}
            height={24}
          />
        </Link>
        <nav className="flex items-center gap-1">
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
        <Button size="sm" className="gap-2">
          <ArrowDownToLine className="h-3.5 w-3.5" />
          Download CV
        </Button>
      </div>
    </header>
  );
}
