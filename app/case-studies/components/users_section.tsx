type Props = {
  statement: string;
  needs: string[];
};

export default function UsersSection({ statement, needs }: Props) {
  return (
    <section className="bg-muted border-t border-border">
      <div className="max-w-[90%] mx-auto px-6 py-24 space-y-12">
        <div className="space-y-6 text-center max-w-3xl mx-auto">
          <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
            Understanding the Users
          </p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
            {statement}
          </h2>
        </div>

        <div className="space-y-4">
          <p className="font-semibold text-sm">User Needs</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {needs.map((need) => (
              <div
                key={need}
                className="bg-card border border-border border-l-4 border-l-[var(--primary)] rounded-xl px-5 py-4 text-sm font-medium"
              >
                {need}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
