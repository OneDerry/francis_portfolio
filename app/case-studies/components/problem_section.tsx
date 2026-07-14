import type { CaseStudyCard } from "@/lib/case_study_types";

type Props = {
  statement: string;
  context: string;
  problems: CaseStudyCard[];
};

export default function ProblemSection({
  statement,
  context,
  problems,
}: Props) {
  return (
    <section className="bg-card border-t border-border">
      <div className="max-w-full md:max-w-[80%] mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="flex flex-col md:flex-row gap-10 md:gap-16">
          <div className="flex-1 space-y-6">
            <p className="text-xs font-semibold tracking-widest uppercase">
              The Problem
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-7xl font-medium line-clamp-6 leading-tight tracking-tight">
              {statement}
            </h2>
            <p className="text-muted-foreground text-base md:text-xl leading-relaxed">
              {context}
            </p>
          </div>

          <div className="w-full md:w-[420px] flex flex-col gap-4 shrink-0">
            {problems.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="bg-background border border-border rounded-2xl p-5 space-y-3"
              >
                <Icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
                <div className="space-y-1.5">
                  <h3 className="text-sm font-semibold">{title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
