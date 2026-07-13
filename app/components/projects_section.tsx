import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { projects } from "@/lib/data";
import Image from "next/image";

function ProjectTags({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <Badge
          key={tag}
          variant="outline"
          className="text-[10px] font-semibold tracking-wider px-2.5 py-0.5 rounded-full text-muted-foreground border-border"
        >
          {tag}
        </Badge>
      ))}
    </div>
  );
}

function CaseStudyButton({ href }: { href?: string }) {
  const btn = (
    <Button size="sm" className="gap-2 rounded-full">
      View Case Study
      <ArrowRight className="h-3.5 w-3.5" />
    </Button>
  );
  return href ? <Link href={href}>{btn}</Link> : btn;
}

export default function ProjectsSection() {
  const featured = projects.find((p) => p.layout === "featured")!;
  const cards = projects.filter((p) => p.layout === "card");
  const wide = projects.find((p) => p.layout === "wide")!;

  return (
    <section id="projects" className="bg-muted border-t border-border">
      <div className="max-w-[90%] mx-auto px-6 py-24 space-y-4">
        <p className="text-center text-xs font-semibold tracking-widest text-muted-foreground uppercase">
          Projects
        </p>
        <h2 className="text-center text-4xl font-bold tracking-tight">
          Selected work.
        </h2>

        <div className="pt-8 space-y-5">
          {/* Wide card — text left, image right */}
          <div className="bg-card border border-border rounded-3xl overflow-hidden flex flex-col md:flex-row">
            <div className="flex-1 p-8 flex flex-col justify-between gap-6">
              <div className="space-y-4">
                <ProjectTags tags={wide.tags} />
                <h3 className="text-2xl font-bold">{wide.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {wide.description}
                </p>
              </div>
              <div>
                <CaseStudyButton href={wide.case_study_href} />
              </div>
            </div>
            {wide.image ? (
              <div className="relative w-full md:w-80 min-h-56 md:min-h-0 shrink-0">
                <Image
                  src={wide.image}
                  alt={wide.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 320px"
                  className="object-cover"
                />
              </div>
            ) : (
              <div
                className={`${wide.image_bg} w-full md:w-80 min-h-56 md:min-h-0 shrink-0`}
              />
            )}
          </div>

          {/* Two-col grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {cards.map((project) => (
              <div
                key={project.id}
                className="bg-card border border-border rounded-3xl overflow-hidden flex flex-col"
              >
                {project.image ? (
                  <div className="relative h-52 w-full">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className={`${project.image_bg} h-52 w-full`} />
                )}
                <div className="p-6 flex flex-col gap-4 flex-1">
                  <ProjectTags tags={project.tags} />
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold">{project.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <div className="mt-auto pt-1">
                    <CaseStudyButton href={project.case_study_href} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Featured — full width, text left, image right */}
          <div className="bg-card border border-border rounded-3xl overflow-hidden flex flex-col md:flex-row">
            <div className="flex-1 p-8 flex flex-col justify-between gap-6">
              <div className="space-y-4">
                <ProjectTags tags={featured.tags} />
                <h3 className="text-2xl font-bold">{featured.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {featured.description}
                </p>
              </div>
              <div>
                <CaseStudyButton href={featured.case_study_href} />
              </div>
            </div>
            {featured.image ? (
              <div className="relative w-full md:w-96 min-h-64 md:min-h-0 shrink-0">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 384px"
                  className="object-cover"
                />
              </div>
            ) : (
              <div
                className={`${featured.image_bg} w-full md:w-96 min-h-64 md:min-h-0 shrink-0`}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
