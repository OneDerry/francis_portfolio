import type { KeyExperience } from "@/lib/case_study_types";

export default function KeyExperiencesSection({
  experiences,
}: {
  experiences: KeyExperience[];
}) {
  return (
    <section className="bg-background border-t border-border">
      <div className="max-w-full md:max-w-[80%] mx-auto px-4 md:px-6 py-12 md:py-20 space-y-10">
        <p className="text-center text-xs font-semibold tracking-widest text-muted-foreground uppercase">
          Key Experiences
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {experiences.map(({ number, title, description }) => (
            <div
              key={number}
              className="bg-primary text-primary-foreground rounded-2xl p-6 space-y-4"
            >
              <p className="text-sm font-semibold text-primary-foreground/70">
                {number}
              </p>
              <div className="space-y-2">
                <h3 className="font-semibold">{title}</h3>
                <p className="text-sm text-primary-foreground/80 leading-relaxed">
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
