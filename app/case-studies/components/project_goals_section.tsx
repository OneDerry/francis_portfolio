import type { ProjectGoal } from "@/lib/case_study_types";

export default function ProjectGoalsSection({ goals }: { goals: ProjectGoal[] }) {
  return (
    <section className="bg-background border-t border-border">
      <div className="max-w-[90%] mx-auto px-6 py-20 space-y-10">
        <p className="text-center text-xs font-semibold tracking-widest text-muted-foreground uppercase">
          Project Goals
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {goals.map(({ number, title, description }) => (
            <div
              key={number}
              className="bg-card border border-border rounded-2xl p-6 space-y-4"
            >
              <p className="text-xl font-bold text-muted-foreground">{number}</p>
              <div className="space-y-2">
                <h3 className="font-semibold">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
