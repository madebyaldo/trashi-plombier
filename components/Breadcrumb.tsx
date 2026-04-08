import Link from "next/link";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: `https://www.trashi-plombier.fr${item.href}` } : {}),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Fil d'Ariane" className="bg-sand-50 py-3 border-b border-sand-200">
        <div className="max-w-7xl mx-auto px-4">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-ink-400">
            {items.map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                {index > 0 && <span aria-hidden="true">/</span>}
                {item.href ? (
                  <Link
                    href={item.href}
                    className="hover:text-ink-900 transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-ink-900 font-medium">
                    {item.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  );
}
