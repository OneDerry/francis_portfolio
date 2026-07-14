import { contacts } from "@/lib/data";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-linear-to-b from-primary to-[oklch(0.38_0.18_256)] text-primary-foreground"
    >
      <div className="max-w-full md:max-w-[80%] mx-auto px-4 md:px-6 py-16 md:py-24 flex flex-col items-center gap-6 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium leading-tight tracking-wide">
          Let&apos;s build something impactful
        </h2>
        <p className="text-base md:text-xl opacity-80 leading-relaxed">
          I&apos;m currently available for freelance projects and consultation.
          Let&apos;s discuss your next big idea.
        </p>
        <p className="text-lg">You can reach me at:</p>

        <div className="flex flex-wrap justify-center gap-4 pt-2">
          {contacts.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-primary-foreground/20 hover:bg-primary-foreground/10 transition-colors text-sm"
            >
              <Icon className="h-4 w-4 opacity-80" />
              {label}
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="max-w-full md:max-w-[80%] mx-auto px-4 md:px-6 py-5 text-center text-xs opacity-40">
          © 2026 Copyright design by Francis Ogoh
        </div>
      </div>
    </footer>
  );
}
