import { services } from "@/lib/data";

export default function ServicesSection() {
  return (
    <section id="services" className="bg-background border-t border-border">
      <div className="max-w-full md:max-w-[80%] mx-auto px-4 md:px-6 py-16 md:py-24 space-y-4">
        <p className="text-center text-sm font-semibold tracking-widest text-muted-foreground uppercase">
          Core Expertise &amp; Services
        </p>
        <h2 className="text-center text-3xl md:text-4xl font-medium tracking-tight">
          Specialized Solutions
        </h2>

        <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {services.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="bg-card border border-border rounded-2xl p-6 flex flex-col gap-4"
            >
              <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center">
                <Icon className="h-8 w-8 text-foreground" strokeWidth={1.5} />
              </div>
              <div className="space-y-2 max-w-sm">
                <h3 className="font-semibold text-lg">{title}</h3>
                <p className="text-sm max-w-sm text-muted-foreground leading-relaxed">
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
