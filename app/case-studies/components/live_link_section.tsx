type Props = {
  url?: string;
  note?: string;
  label?: string;
};

export default function LiveLinkSection({
  url,
  note,
  label = "Live Link to Website",
}: Props) {
  if (!url && !note) return null;

  return (
    <section className="bg-background border-t border-border">
      <div className="max-w-full md:max-w-[80%] mx-auto px-4 md:px-6 py-10 md:py-16 space-y-3">
        <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
          {label}
        </p>
        {url ? (
          <a
            href={url.startsWith("http") ? url : `https://${url}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-sm font-semibold break-all hover:text-primary transition-colors"
          >
            {url}
          </a>
        ) : (
          <p className="text-sm font-semibold text-muted-foreground">{note}</p>
        )}
      </div>
    </section>
  );
}
