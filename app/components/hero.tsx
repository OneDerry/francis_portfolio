import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

import francis from "@/public/Francis.png";

export default function Hero() {
  return (
    <section className="max-w-[90%] mx-auto px-6 py-24 flex flex-col md:flex-row items-center gap-16">
      <div className="flex-1 space-y-6">
        <h1 className="text-5xl font-bold leading-tight tracking-tight">
          Ogoh Francis,{" "}
          <span className="text-foreground">
            Designing clean, scalable Saas products that simplify complex
            workflows.
          </span>
        </h1>
        <p className="text-muted-foreground text-base leading-relaxed max-w-md">
          Product Designer focused on fintech, gov-tech, startups and enterprise
          systems.
        </p>
        <Button className="gap-2 rounded-full">
          Contact Me
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
      <div className="relative shrink-0 w-full md:w-72 h-80 overflow-hidden rounded-2xl">
        <Image
          src={francis}
          alt="Portrait of Ogoh Francis"
          fill
          sizes="(max-width: 768px) 100vw, 288px"
          className="object-cover"
          preload
        />
      </div>
    </section>
  );
}
