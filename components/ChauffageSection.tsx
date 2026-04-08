import Link from "next/link";
import Image from "next/image";
import { CHAUFFAGE_PAGES, BUSINESS } from "@/lib/seo-data";

const SERVICE_IMAGES = [
  "/images/chauffage-installation.jpg",
  "/images/chauffage-entretien.jpg",
  "/images/chauffage-chauffe-eau.jpg",
  "/images/chauffage-ballon.jpg",
  "/images/chauffage-gaz.jpg",
  "/images/chauffage-fioul.jpg",
  "/images/chauffage-electrique.jpg",
];

function Card({
  page,
  image,
  className,
  tall,
}: {
  page: (typeof CHAUFFAGE_PAGES)[number];
  image: string;
  className?: string;
  tall?: boolean;
}) {
  return (
    <Link
      href={`/${page.slug}`}
      className={`group relative rounded-2xl overflow-hidden transition-all hover:shadow-2xl hover:-translate-y-0.5 duration-300 ${className ?? ""}`}
    >
      <Image
        src={image}
        alt={page.h1.split("–")[0].trim()}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes={tall ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 50vw, 25vw"}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
        {tall && (
          <p className="text-white/50 text-[13px] leading-relaxed mb-3 max-w-sm hidden md:block">
            {page.metaDescription}
          </p>
        )}
        <h3
          className={`font-heading font-bold text-white leading-snug ${
            tall ? "text-lg md:text-xl" : "text-[14px] md:text-[15px]"
          }`}
        >
          {page.h1.split("–")[0].trim()}
        </h3>
        <div className="flex items-center gap-1.5 text-white/50 text-[12px] font-semibold mt-2 group-hover:text-copper-300 group-hover:gap-2.5 transition-all">
          En savoir plus
          <svg
            className="w-3 h-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
}

export default function ChauffageSection() {
  return (
    <section id="chauffage" className="py-20 md:py-24 bg-sand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <span className="inline-block text-[12px] font-bold uppercase tracking-widest text-copper-500 mb-3">
              Chauffage
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-ink-900 leading-tight tracking-tight">
              Services de chauffage à Metz
            </h2>
          </div>
          <a
            href={`tel:${BUSINESS.phoneClean}`}
            className="group inline-flex items-center gap-3 border-2 border-ink-900 hover:border-copper-500 hover:bg-copper-500 pl-3 pr-6 py-2 rounded-full transition-all duration-200 self-start sm:self-auto"
          >
            <span className="w-9 h-9 rounded-full bg-ink-900 group-hover:bg-white/20 flex items-center justify-center shrink-0 transition-colors">
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </span>
            <span className="font-heading font-bold text-[15px] text-ink-900 group-hover:text-white transition-colors">
              {BUSINESS.phone}
            </span>
          </a>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[200px]">
          {/* Featured — tall left */}
          <Card
            page={CHAUFFAGE_PAGES[0]}
            image={SERVICE_IMAGES[0]}
            className="col-span-2 row-span-2"
            tall
          />
          {/* Right stack */}
          <Card
            page={CHAUFFAGE_PAGES[1]}
            image={SERVICE_IMAGES[1]}
            className="col-span-1"
          />
          <Card
            page={CHAUFFAGE_PAGES[2]}
            image={SERVICE_IMAGES[2]}
            className="col-span-1"
          />
          <Card
            page={CHAUFFAGE_PAGES[3]}
            image={SERVICE_IMAGES[3]}
            className="col-span-1"
          />
          <Card
            page={CHAUFFAGE_PAGES[4]}
            image={SERVICE_IMAGES[4]}
            className="col-span-1"
          />
          {/* Bottom row */}
          <Card
            page={CHAUFFAGE_PAGES[5]}
            image={SERVICE_IMAGES[5]}
            className="col-span-1 md:col-span-2"
          />
          <Card
            page={CHAUFFAGE_PAGES[6]}
            image={SERVICE_IMAGES[6]}
            className="col-span-1 md:col-span-2"
          />
        </div>
      </div>
    </section>
  );
}
