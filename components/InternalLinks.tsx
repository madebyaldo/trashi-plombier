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
    <section className="bg-sand-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="font-heading text-2xl font-bold text-ink-900 mb-6">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block bg-white p-4 rounded-lg border border-sand-200 hover:border-brand-700 hover:shadow-sm transition-all text-ink-900 font-medium"
            >
              {link.label} &rarr;
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
