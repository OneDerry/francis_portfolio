import { toolkit } from "@/lib/data";

export default function AboutSection() {
  return (
    <section id="about" className="bg-card">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24 flex flex-col items-center text-center space-y-8">
        <p className="text-sm md:text-lg font-semibold tracking-widest text-muted-foreground uppercase">
          About Me
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium max-w-5xl leading-tight tracking-tight">
          Crafting experiences that bridge the gap between complexity and
          clarity.
        </h2>
        <p className="text-base md:text-xl text-muted-foreground max-w-4xl leading-relaxed line-clamp-4">
          I am a product designer currently working with 4Core Integrated
          Services with a passion for transforming complicated data into
          intuitive interfaces. Over the past 6 years, I&apos;ve worked across
          fintech, logistics, and government sectors, help startups and
          established enterprises ship products that users love.
        </p>
        <div className="space-y-4 pt-2">
          <p className="text-[10px] font-semibold tracking-widest text-muted-foreground uppercase">
            The Toolkit
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {toolkit.map((tool) => (
              <span
                key={tool}
                className="text-xs px-3.5 py-1.5 rounded-full bg-[#E2E9EC] text-foreground/80"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
