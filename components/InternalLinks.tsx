import Link from "next/link";

interface InternalLinksProps {
  links: { href: string; label: string }[];
  title?: string;
}

export default function InternalLinks({
  links,
  title = "Services associés",
}: InternalLinksProps) {
  return (
    <section className="bg-sand-50 py-16">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="flex items-center gap-3 mb-10">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
            style={{ background: "#EA580C" }}
          >
            <svg className="w-4 h-4" fill="none" stroke="white" viewBox="0 0 24 24" strokeWidth={2.2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
          <h2 className="font-heading font-black text-ink-900 text-[22px] uppercase tracking-tight">
            {title}
          </h2>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {links.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative bg-white rounded-2xl border border-sand-200 p-6 flex flex-col justify-between gap-6 hover:border-[#EA580C] hover:shadow-md transition-all duration-200 overflow-hidden"
            >
              {/* Faded number */}
              <span
                className="absolute top-3 right-5 font-heading font-black leading-none select-none pointer-events-none"
                style={{ fontSize: "5rem", color: "#f5f3ef" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Label */}
              <span className="font-heading font-black text-ink-900 text-[17px] leading-tight relative z-10 pr-10">
                {link.label}
              </span>

              {/* Arrow */}
              <span
                className="inline-flex items-center gap-1.5 text-[13px] font-semibold transition-colors relative z-10"
                style={{ color: "#EA580C" }}
              >
                {link.href === "/contact" ? "Nous contacter" : link.href === "/" ? "Voir l'accueil" : "Voir le service"}
                <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
