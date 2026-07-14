import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import type { CaseStudyMeta } from "@/lib/case_study_types";

export default function CaseStudyHeader({ meta }: { meta: CaseStudyMeta }) {
  const cols = [
    { label: "Role", value: meta.role },
    { label: "Duration", value: meta.duration },
    { label: "Tools", value: meta.tools },
    { label: "Responsibility", value: meta.responsibility },
  ];

  return (
    <div className="max-w-full md:max-w-[80%] mx-auto px-4 md:px-6 pt-6 md:pt-10 pb-10 md:pb-16 space-y-8 md:space-y-10">
      <Link
        href="/#projects"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Back
      </Link>

      <div className="space-y-6">
        <div className="max-w-6xl space-y-6">
          <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
            Case Study
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-medium tracking-tight leading-tight">
            {meta.title}
          </h1>
          <p className="text-lg md:text-2xl text-muted-foreground max-w-5xl leading-tight">
            {meta.description}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6">
          {cols.map(({ label, value }) => (
            <div key={label} className="space-y-1.5">
              <p className="text-[10px] font-semibold tracking-widest text-muted-foreground uppercase">
                {label}
              </p>
              <p className="text-sm font-medium leading-snug">{value}</p>
            </div>
          ))}
        </div>
      </div>

      {meta.hero_image ? (
        <div className="relative w-full h-56 sm:h-80 md:h-[480px] rounded-3xl overflow-hidden">
          <Image
            src={meta.hero_image}
            alt={meta.title}
            fill
            sizes="90vw"
            className="object-cover"
            preload
          />
        </div>
      ) : (
        <div
          className={`w-full h-56 sm:h-80 md:h-[480px] rounded-3xl ${meta.hero_bg ?? "bg-muted"}`}
        />
      )}
    </div>
  );
}
