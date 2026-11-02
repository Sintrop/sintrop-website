interface Props {
  kicker?: string;
  title: string;
  lead?: string;
}

/** Shared forest-backdrop hero for interior pages. */
export function PageHero({ kicker, title, lead }: Props) {
  return (
    <section className="container mx-auto px-5 pb-16 pt-6 lg:px-20 lg:pb-24 lg:pt-14">
      <div className="max-w-3xl">
        {kicker && (
          <span className="font-anta text-xs uppercase tracking-[0.2em] text-white/60">
            {kicker}
          </span>
        )}
        <h1 className="mt-4 text-3xl font-semibold leading-tight text-white md:text-5xl">
          {title}
        </h1>
        {lead && <p className="mt-6 text-lg text-white/75">{lead}</p>}
      </div>
    </section>
  );
}
