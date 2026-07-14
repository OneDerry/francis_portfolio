import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

import francis from "@/public/Francis.png";

export default function Hero() {
  return (
    <section className="max-w-full md:max-w-[80%] mx-auto px-4 md:px-6 py-12 md:py-24 flex flex-col md:flex-row items-center gap-10 md:gap-16">
      <div className="flex-1 space-y-6">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-medium leading-tight tracking-tight">
          Ogoh Francis,
          <br />
          <span className="text-foreground">
            Designing clean, scalable Saas products that simplify complex
            workflows.
          </span>
        </h1>
        <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-xl">
          Product Designer focused on fintech, gov-tech, startups and enterprise
          systems.
        </p>
        <Button size='lg' className="gap-2 rounded-xl">
          Contact Me
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
      <div className="relative shrink-0 w-full md:w-[400px] h-80 md:h-[400px] overflow-hidden rounded-2xl">
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
