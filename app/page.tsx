import Link from "next/link";
import Image from "next/image";
import SchemaLocalBusiness from "@/components/SchemaLocalBusiness";
import PlomberieProcess from "@/components/PlomberieProcess";
import TestimonialsSlider from "@/components/TestimonialsSlider";
import { BUSINESS } from "@/lib/seo-data";

export default function HomePage() {
  return (
    <>
      <SchemaLocalBusiness />

      {/* ════════════════════════════════════════════
          1. HERO — contained image with side margins
          ════════════════════════════════════════════ */}
      <section className="bg-white py-3">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
          {/* Hero image wrapper */}
          <div className="relative overflow-hidden rounded-lg" style={{ height: "82vh", minHeight: 520 }}>
            {/* Background image */}
            <Image
              src="/images/hero-real.avif"
              alt="Trashi Plombier Metz"
              fill priority
              className="object-cover object-center"
              sizes="(max-width:1200px) 100vw, 1200px"
              quality={90}
            />

            {/* Dark overlay */}
            <div className="absolute inset-0" style={{ background: "rgba(8,14,24,0.55)" }} />
            {/* Extra left-side gradient for text legibility */}
            <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(8,14,24,0.5) 0%, transparent 65%)" }} />

            {/* ── Content — pinned to bottom-left ── */}
            <div className="relative z-10 h-full flex flex-col justify-end pb-12 px-8 lg:px-14 max-w-[680px]">
              {/* Eyebrow */}
              <span
                className="inline-block text-[11px] font-bold uppercase tracking-[0.22em] mb-4"
                style={{ color: "#d4ea00" }}
              >
                Disponible 24h/24 – Expert certifié
              </span>

              {/* Heading */}
              <h1
                className="font-heading font-black text-white uppercase leading-[0.95] tracking-tight mb-5"
                style={{ fontSize: "clamp(2rem, 3.8vw, 3.8rem)" }}
              >
                Votre Plombier<br />Rapide &amp; Fiable<br />24h/24
              </h1>

              <p className="text-white/75 text-[15px] leading-relaxed mb-7 max-w-[480px]">
                Fuite d&apos;eau, panne de chauffe-eau ou urgence plomberie ? Trashi Plombier intervient rapidement avec des solutions durables, un service propre et des prix transparents.
              </p>

              {/* CTA */}
              <div className="mb-10">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-[15px] font-semibold px-7 py-3.5 rounded-sm transition-opacity hover:opacity-90"
                  style={{ background: "#d4ea00", color: "#14200a" }}
                >
                  Découvrir nos services
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Link>
              </div>

              {/* Slider arrows */}
              <div className="flex items-center gap-3">
                <button
                  aria-label="Précédent"
                  className="w-11 h-11 rounded-full border border-white/40 bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5M12 19l-7-7 7-7"/>
                  </svg>
                </button>
                <button
                  aria-label="Suivant"
                  className="w-11 h-11 rounded-full border border-white/40 bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          2. QUI SOMMES-NOUS
      */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* ── Left: image + stats ── */}
            <div>
              <div className="relative">
                <div
                  className="absolute top-0 left-0 z-10 flex items-center gap-3 px-7 py-6 rounded-2xl"
                  style={{ background: "#d4ea00" }}
                >
                  <span className="font-heading font-black text-ink-900 leading-none" style={{ fontSize: "3rem" }}>10+</span>
                  <span className="font-semibold text-ink-800 text-[14px] leading-snug">Ans<br />d&apos;expérience</span>
                </div>
                <div className="relative overflow-hidden rounded-2xl mt-10" style={{ height: "680px" }}>
                  <Image
                    src="/images/about-1.avif"
                    alt="Artisan Trashi Plombier"
                    fill className="object-cover"
                    sizes="(max-width:1024px) 100vw, 50vw"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-8">
                {[
                  { value: "120+",   label: "Clients satisfaits" },
                  { value: "98%",    label: "Taux de satisfaction" },
                  { value: "30 min", label: "Délai intervention" },
                ].map((s) => (
                  <div key={s.label} className="bg-sand-50 rounded-xl px-4 py-5 text-center">
                    <p className="font-heading font-black text-ink-900 text-[2rem] leading-none mb-1">{s.value}</p>
                    <p className="text-ink-400 text-[12px] leading-snug">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Right: text ── */}
            <div className="lg:pt-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0" style={{ background: "#d4ea00" }}>
                  <svg className="w-4 h-4 text-ink-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
                <span className="text-[13px] font-semibold text-ink-500 uppercase tracking-widest">Qui sommes-nous</span>
              </div>

              <h2
                className="font-heading font-black text-ink-900 leading-[1.05] tracking-tight mb-5"
                style={{ fontSize: "clamp(1.8rem, 3.2vw, 3rem)" }}
              >
                L&apos;équipe derrière<br />Trashi Plombier
              </h2>

              <p className="text-ink-500 text-[15px] leading-relaxed mb-8">
                Nous proposons des solutions complètes de plomberie, chauffage et climatisation, avec un service rapide, fiable et de qualité, pour répondre à toutes vos urgences et installations.
              </p>

              <div className="grid grid-cols-2 gap-x-6 gap-y-3 mb-10">
                {[
                  "Entreprise locale & certifiée",
                  "Professionnels qualifiés",
                  "Disponible 24h/24 – 7j/7",
                  "Devis gratuit & sans engagement",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ background: "#d4ea00" }}>
                      <svg className="w-3 h-3 text-ink-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.8}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <span className="text-[14px] text-ink-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-[15px] font-semibold px-7 py-3.5 rounded-full transition-opacity hover:opacity-90"
                style={{ background: "#d4ea00", color: "#14200a" }}
              >
                Obtenir de l&apos;aide
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>

              <div className="relative mt-8 rounded-2xl overflow-hidden w-full" style={{ aspectRatio: "16/9" }}>
                <Image
                  src="/images/portfolio-2.webp"
                  alt="Trashi Plombier en intervention"
                  fill className="object-cover"
                  sizes="(max-width:1024px) 100vw, 40vw"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          3. SERVICES PLOMBERIE — Process
      */}
      <section className="py-20 md:py-28 bg-white border-t border-sand-100">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-8">

          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0" style={{ background: "#d4ea00" }}>
                <svg className="w-4 h-4 text-ink-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
              <span className="text-[13px] font-semibold text-ink-500 uppercase tracking-widest">Nos services plomberie</span>
            </div>
            <h2 className="font-heading font-black text-ink-900 leading-tight" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
              Tout ce dont vous avez besoin
            </h2>
          </div>

          {/* Process: left cards | circle image | right cards */}
          <PlomberieProcess />
        </div>
      </section>

      {/* ════════════════════════════════════════════
          4. SERVICES CHAUFFAGE
      */}
      <section className="py-20 md:py-28 bg-ink-900">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-8">

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0" style={{ background: "#d4ea00" }}>
                  <svg className="w-4 h-4 text-ink-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
                <span className="text-[13px] font-semibold text-white/50 uppercase tracking-widest">Nos services</span>
              </div>
              <h2 className="font-heading font-black text-white leading-tight" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
                Chauffage
              </h2>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-[14px] font-semibold px-6 py-3 rounded-sm shrink-0 transition-opacity hover:opacity-90"
              style={{ background: "#d4ea00", color: "#14200a" }}
            >
              Demander un devis
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>

          {/* Service cards */}
          <div className="flex flex-col gap-3">
            {SERVICES_CHAUFFAGE.map((svc, i) => (
              <Link
                key={svc.title}
                href={svc.href}
                className="chauffage-card grid lg:grid-cols-[80px_1fr_1fr_160px] gap-6 items-center px-8 py-8 rounded-2xl border border-white/10 transition-all duration-300"
                style={{ background: "rgba(255,255,255,0.04)" }}
              >
                <span className="card-num font-heading font-black text-white/20 text-[3rem] leading-none transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="card-title font-heading font-black text-white text-[1.4rem] leading-tight transition-colors">
                  {svc.title}
                </h3>
                <p className="card-desc text-white/50 text-[14px] font-medium leading-relaxed transition-colors">
                  {svc.desc}
                </p>
                <div className="flex flex-wrap gap-2 justify-end">
                  {svc.tags.map(tag => (
                    <span key={tag} className="card-tag text-[11px] font-semibold px-3 py-1 rounded-full border border-white/20 text-white/60 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* ════════════════════════════════════════════
          5. RÉALISATIONS
      */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-8">

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <span className="text-[12px] font-semibold uppercase tracking-widest mb-3 block text-ink-400">Nos réalisations</span>
              <h2 className="font-heading font-black text-ink-900 leading-tight" style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}>
                Réalisations soignées<br />pour chaque client.
              </h2>
            </div>
            <Link
              href="/realisations"
              className="inline-flex items-center gap-2 text-[14px] font-semibold px-6 py-3 rounded-sm shrink-0 transition-opacity hover:opacity-90"
              style={{ background: "#d4ea00", color: "#14200a" }}
            >
              Voir tout
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>

          {/* Bento grid */}
          <div className="grid grid-cols-3 grid-rows-2 gap-3" style={{ height: "680px" }}>

            {/* Featured — large left */}
            <Link href="/realisations" className="group relative col-span-2 row-span-2 rounded-2xl overflow-hidden">
              <Image src={PROJECTS[0].image} alt={PROJECTS[0].title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="66vw" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 55%)" }} />
              <div className="absolute bottom-0 left-0 right-0 p-7">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[11px] font-bold px-3 py-1 rounded-full text-ink-900" style={{ background: "#d4ea00" }}>{PROJECTS[0].category}</span>
                  <span className="text-[11px] font-medium px-3 py-1 rounded-full bg-white/20 text-white">{PROJECTS[0].location}</span>
                </div>
                <h3 className="font-heading font-black text-white text-[1.6rem] leading-tight">{PROJECTS[0].title}</h3>
              </div>
            </Link>

            {/* Small top-right */}
            <Link href="/realisations" className="group relative rounded-2xl overflow-hidden">
              <Image src={PROJECTS[1].image} alt={PROJECTS[1].title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="33vw" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.72) 0%, transparent 55%)" }} />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full text-ink-900" style={{ background: "#d4ea00" }}>{PROJECTS[1].category}</span>
                  <span className="text-[10px] font-medium px-2.5 py-0.5 rounded-full bg-white/20 text-white">{PROJECTS[1].location}</span>
                </div>
                <h3 className="font-heading font-bold text-white text-[1rem] leading-tight">{PROJECTS[1].title}</h3>
              </div>
            </Link>

            {/* Small bottom-right */}
            <Link href="/realisations" className="group relative rounded-2xl overflow-hidden">
              <Image src={PROJECTS[2].image} alt={PROJECTS[2].title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="33vw" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.72) 0%, transparent 55%)" }} />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full text-ink-900" style={{ background: "#d4ea00" }}>{PROJECTS[2].category}</span>
                  <span className="text-[10px] font-medium px-2.5 py-0.5 rounded-full bg-white/20 text-white">{PROJECTS[2].location}</span>
                </div>
                <h3 className="font-heading font-bold text-white text-[1rem] leading-tight">{PROJECTS[2].title}</h3>
              </div>
            </Link>

          </div>

          {/* Bottom row — 3 equal cards */}
          <div className="grid grid-cols-3 gap-3 mt-3">
            {PROJECTS.slice(3).map((proj) => (
              <Link key={proj.title} href="/realisations" className="group relative rounded-2xl overflow-hidden" style={{ height: "260px" }}>
                <Image src={proj.image} alt={proj.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="33vw" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.72) 0%, transparent 55%)" }} />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full text-ink-900" style={{ background: "#d4ea00" }}>{proj.category}</span>
                    <span className="text-[10px] font-medium px-2.5 py-0.5 rounded-full bg-white/20 text-white">{proj.location}</span>
                  </div>
                  <h3 className="font-heading font-bold text-white text-[1rem] leading-tight">{proj.title}</h3>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* ════════════════════════════════════════════
          6. QUOTE
      */}
      <section className="py-24 md:py-32 bg-white border-t border-sand-100">
        <div className="max-w-[860px] mx-auto px-6 lg:px-8 text-center">
          <p className="font-heading font-black text-ink-900 leading-[1.1] tracking-tight" style={{ fontSize: "clamp(1.35rem, 2.8vw, 2.5rem)" }}>
            Chez Trashi Plombier, chaque intervention est bien plus qu&apos;un dépannage —{" "}
            <span className="text-ink-300">c&apos;est une promesse de qualité, de rapidité et de transparence envers nos clients.</span>
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          7. TESTIMONIALS
      */}
      <section className="py-16 bg-white">
        <TestimonialsSlider />
      </section>

      {/* ════════════════════════════════════════════
          8. FAQ
      */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-[760px] mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="block text-[11px] font-bold uppercase tracking-[0.2em] text-ink-400 mb-4">FAQ</span>
            <h2
              className="font-heading font-black text-ink-900 tracking-tight"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}
            >
              Questions fréquentes
            </h2>
          </div>
          <div className="divide-y divide-sand-200 border-t border-sand-200">
            {FAQ_ITEMS.map((faq, i) => (
              <details key={i} className="group">
                <summary className="flex items-center justify-between gap-4 py-5 cursor-pointer font-heading font-bold text-[15px] text-ink-900 hover:text-copper-600 transition-colors list-none">
                  {faq.question}
                  <span className="w-7 h-7 rounded-full border border-sand-200 group-open:border-ink-900 group-open:bg-ink-900 flex items-center justify-center shrink-0 transition-all">
                    <svg className="w-3.5 h-3.5 text-ink-400 group-open:text-white group-open:rotate-180 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7"/>
                    </svg>
                  </span>
                </summary>
                <div className="pb-5 text-ink-500 text-[14px] leading-relaxed pr-10">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
        <FAQSchema items={FAQ_ITEMS} />
      </section>
    </>
  );
}

/* ─── DATA ─── */

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SERVICES_PLOMBERIE = [
  {
    title: "Dépannage Urgence 24h/24",
    desc: "Fuite d'eau, canalisation bouchée, panne de chauffage — un technicien qualifié intervient en moins de 30 minutes à Metz et en Moselle, jours, nuits et week-ends.",
    tags: ["Fuite d'eau", "Canalisation", "Panne chaudière"],
    href: "/plombier-urgence-metz",
  },
  {
    title: "Installation & Rénovation",
    desc: "Rénovation complète de salle de bain, pose de douche à l'italienne, robinetterie haut de gamme. Travail soigné, livré dans les délais.",
    tags: ["Salle de bain", "Douche italienne", "Robinetterie"],
    href: "/renovation-salle-de-bain-metz",
  },
  {
    title: "Débouchage Canalisation",
    desc: "Débouchage professionnel par haute pression ou furet électrique. WC bouchés, éviers, douches, colonnes d'immeubles.",
    tags: ["Haute pression", "WC bouché", "Évier"],
    href: "/debouchage-canalisation-metz",
  },
];

const SERVICES_CHAUFFAGE = [
  {
    title: "Chaudière & Chauffage",
    desc: "Installation, entretien et dépannage de chaudières gaz, fioul et électriques toutes marques. Contrat annuel avec certificat de conformité.",
    tags: ["Chaudière gaz", "Fioul", "Entretien annuel"],
    href: "/entretien-chaudiere-metz",
  },
  {
    title: "Chauffe-eau & Ballon",
    desc: "Remplacement et installation de chauffe-eau électrique, thermodynamique ou solaire. Aide MaPrimeRénov' disponible.",
    tags: ["Électrique", "Thermodynamique", "MaPrimeRénov'"],
    href: "/remplacement-chauffe-eau-metz",
  },
  {
    title: "Radiateurs & Plancher chauffant",
    desc: "Pose et remplacement de radiateurs à eau, électriques ou à inertie. Installation de plancher chauffant hydraulique neuf ou rénovation.",
    tags: ["Radiateurs", "Plancher chauffant", "Hydraulique"],
    href: "/entretien-chaudiere-metz",
  },
  {
    title: "Dépannage & Urgence chauffage",
    desc: "Panne de chaudière, chauffage en panne en hiver — intervention rapide 24h/24 à Metz et en Moselle pour rétablir votre confort.",
    tags: ["Urgence 24h/24", "Panne chaudière", "Metz"],
    href: "/entretien-chaudiere-metz",
  },
];

const PROJECTS = [
  { title: "Rénovation salle de bain",    category: "Salle de bain", location: "Metz Centre",       image: "/images/portfolio-1.webp" },
  { title: "Remplacement chaudière gaz",  category: "Chauffage",     location: "Montigny-lès-Metz", image: "/images/portfolio-2.webp" },
  { title: "Dépannage fuite urgence",     category: "Urgence",       location: "Woippy",            image: "/images/portfolio-3.webp" },
  { title: "Pose douche à l'italienne",   category: "Salle de bain", location: "Marly",             image: "/images/portfolio-4.webp" },
  { title: "Installation chauffe-eau",    category: "Chauffage",     location: "Thionville",        image: "/images/portfolio-5.webp" },
  { title: "Débouchage canalisation",     category: "Plomberie",     location: "Augny",             image: "/images/portfolio-6.webp" },
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const TESTIMONIALS = [
  { name: "Marie D.",   city: "Metz",             service: "Urgence",   initials: "MD", text: "Intervention très rapide pour une fuite d'eau en pleine nuit. Plombier professionnel et tarif honnête. Je recommande vivement !" },
  { name: "Pierre L.", city: "Montigny-lès-Metz", service: "Chauffage", initials: "PL", text: "Excellent service pour l'entretien de ma chaudière. Technicien ponctuel et compétent. Contrat annuel au top." },
  { name: "Sophie M.", city: "Woippy",             service: "Plomberie", initials: "SM", text: "Rénovation complète de notre salle de bain. Travail soigné, dans les délais et le budget. Merci à toute l'équipe !" },
];

const FAQ_ITEMS = [
  { question: "Quel est le délai d'intervention pour une urgence à Metz ?",  answer: "Nous intervenons en moins de 30 minutes pour toute urgence plomberie à Metz et dans les communes limitrophes. Disponible 24h/24 et 7j/7." },
  { question: "Proposez-vous des devis gratuits ?",                           answer: "Oui, tous nos devis sont gratuits et sans engagement. Estimation détaillée avant toute intervention." },
  { question: "Intervenez-vous en dehors de Metz ?",                          answer: "Oui : Montigny-lès-Metz, Woippy, Augny, Marly, Longeville-lès-Metz, Maizières-lès-Metz, Talange et Thionville." },
  { question: "L'entretien annuel de chaudière est-il obligatoire ?",         answer: "Oui, obligatoire selon la réglementation française. Nous proposons des contrats avec certificat de conformité." },
  { question: "Quels types de chaudières réparez-vous ?",                     answer: "Toutes les chaudières : gaz, fioul et électrique, toutes marques confondues." },
  { question: "Comment demander un dépannage en urgence ?",                   answer: `Appelez-nous au ${BUSINESS.phone}. Un technicien est disponible immédiatement.` },
];

/* ─── SCHEMA ─── */
function FAQSchema({ items }: { items: { question: string; answer: string }[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: items.map((i) => ({
            "@type": "Question",
            name: i.question,
            acceptedAnswer: { "@type": "Answer", text: i.answer },
          })),
        }),
      }}
    />
  );
}
