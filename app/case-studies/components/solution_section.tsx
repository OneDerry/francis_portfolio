import type { CaseStudyCard } from "@/lib/case_study_types";

type Props = {
  solutions: CaseStudyCard[];
  statement: string;
  context: string;
};

export default function SolutionSection({
  solutions,
  statement,
  context,
}: Props) {
  return (
    <section className="bg-background border-t border-border">
      <div className="max-w-full md:max-w-[80%] mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="flex flex-col md:flex-row gap-10 md:gap-16">
          <div className="w-full md:w-[380px] flex flex-col gap-4 shrink-0 order-2 md:order-1">
            {solutions.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="bg-card border border-border rounded-2xl p-5 space-y-3"
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

          <div className="flex-1 space-y-6 order-1 md:order-2">
            <p className="text-xs font-semibold tracking-widest uppercase">
              The Solution
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-7xl font-medium line-clamp-6 leading-tight tracking-tight">
              {statement}
            </h2>
            <p className="text-muted-foreground text-base md:text-xl leading-relaxed">{context}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
