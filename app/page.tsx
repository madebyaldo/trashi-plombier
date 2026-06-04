import Link from "next/link";
import Image from "next/image";
import SchemaLocalBusiness from "@/components/SchemaLocalBusiness";
import PlomberieProcess from "@/components/PlomberieProcess";
import StaggerTestimonials from "@/components/ui/stagger-testimonials";
import { BUSINESS } from "@/lib/seo-data";
import { REALISATIONS } from "@/lib/realisations-data";
import AboutSection from "@/components/ui/about-section";
import QuoteReveal from "@/components/ui/quote-reveal";

export default function HomePage() {
  return (
    <>
      <SchemaLocalBusiness />

      {/* ════════════════════════════════════════════
          1. HERO — contained image with side margins
          ════════════════════════════════════════════ */}
      <section className="bg-white pt-3 pb-0">
        <div className="max-w-[1440px] mx-auto px-2 sm:px-6 lg:px-8">
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
            <div className="relative z-10 h-full flex flex-col justify-end pb-8 px-5 lg:pb-12 lg:px-14 max-w-[680px]">
              {/* Eyebrow */}
              <span
                className="inline-block text-[11px] font-bold uppercase tracking-[0.22em] mb-4"
                style={{ color: "#EA580C" }}
              >
                Disponible 24h/24 – Expert certifié
              </span>

              {/* Heading */}
              <h1
                className="font-heading font-black text-white uppercase leading-[0.95] tracking-tight mb-5"
                style={{ fontSize: "clamp(1.5rem, 3.8vw, 3.8rem)" }}
              >
                Votre Plombier<br />Rapide &amp; Fiable<br />24h/24
              </h1>

              <p className="text-white/75 text-[13px] lg:text-[15px] leading-relaxed mb-6 max-w-[480px]">
                Fuite d&apos;eau, panne de chauffe-eau ou urgence plomberie ? Trashi Plombier intervient rapidement avec des solutions durables, un service propre et des prix transparents.
              </p>

              {/* CTA */}
              <div className="mb-10">
                <Link
                  href="#services"
                  className="inline-flex items-center gap-2 text-[15px] font-semibold px-7 py-3.5 rounded-xl transition-opacity hover:opacity-90"
                  style={{ background: "#EA580C", color: "#ffffff" }}
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
      <AboutSection />

      {/* ════════════════════════════════════════════
          3. SERVICES PLOMBERIE — Process
      */}
      <section
        id="services"
        className="pb-20 md:pb-28 bg-[#0c1c35] relative"
        style={{ clipPath: "polygon(0 80px, 100% 0, 100% calc(100% - 80px), 0 100%)", paddingTop: "calc(2.5rem + 80px)", paddingBottom: "calc(5rem + 80px)", marginTop: "-60px", zIndex: 1 }}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-8">

          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0" style={{ background: "#EA580C" }}>
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
              <span className="text-[13px] font-semibold text-white/50 uppercase tracking-widest">Nos services plomberie</span>
            </div>
            <h2 className="font-heading font-black text-white leading-tight" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
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
      <section className="pt-14 pb-4 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-8">

          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0" style={{ background: "#EA580C" }}>
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
              <span className="text-[13px] font-semibold text-ink-500 uppercase tracking-widest">Nos services chauffagiste</span>
            </div>
            <h2 className="font-heading font-black text-ink-900 leading-tight" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
              Chaleur et confort garantis
            </h2>
          </div>

          {/* Service cards */}
          <div className="flex flex-col gap-3">
            {SERVICES_CHAUFFAGE.map((svc, i) => (
              <Link
                key={svc.title}
                href={svc.href}
                className="chauffage-card flex items-center gap-4 lg:grid lg:grid-cols-[80px_1fr_1fr_160px] lg:gap-6 px-5 lg:px-8 py-5 lg:py-8 rounded-2xl border border-sand-200 transition-all duration-300 hover:border-[#EA580C] hover:shadow-sm"
                style={{ background: "#f8f9fb" }}
              >
                <span className="card-num font-heading font-black text-[#EA580C] text-[1.3rem] lg:text-[3rem] leading-none shrink-0 w-10 lg:w-auto transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="card-title font-heading font-black text-ink-900 text-[1.1rem] lg:text-[1.4rem] leading-tight transition-colors">
                    {svc.title}
                  </h3>
                  <p className="card-desc text-ink-500 text-[13px] lg:text-[14px] font-medium leading-relaxed mt-1 line-clamp-1 lg:line-clamp-none transition-colors">
                    {svc.desc}
                  </p>
                </div>
                <div className="hidden lg:flex flex-wrap gap-2 justify-end">
                  {svc.tags.map(tag => (
                    <span key={tag} className="card-tag text-[11px] font-semibold px-3 py-1 rounded-full border border-sand-200 text-ink-400 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
                <svg className="w-4 h-4 text-ink-300 shrink-0 lg:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
                </svg>
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
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0" style={{ background: "#EA580C" }}>
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
              <span className="text-[13px] font-semibold text-ink-500 uppercase tracking-widest">Nos réalisations</span>
            </div>
            <div className="flex items-end justify-between gap-4">
              <h2 className="font-heading font-black text-ink-900 leading-tight" style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}>
                Réalisations soignées<br />pour chaque client.
              </h2>
              {/* Voir tout — desktop only */}
              <Link
                href="/realisations"
                className="hidden md:inline-flex items-center gap-2 text-[14px] font-semibold px-6 py-3 rounded-xl shrink-0 transition-opacity hover:opacity-90"
                style={{ background: "#EA580C", color: "#ffffff" }}
              >
                Voir tout
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* ── Mobile: 3 stacked cards + button ── */}
          <div className="md:hidden space-y-3">
            {REALISATIONS.slice(0, 3).map((proj) => (
              <Link key={proj.slug} href={`/realisations/${proj.slug}`} className="group relative block rounded-2xl overflow-hidden" style={{ height: 180 }}>
                <Image src={proj.image} alt={proj.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="100vw" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.72) 0%, transparent 55%)" }} />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full mb-2 inline-block" style={{ background: "#EA580C", color: "#fff" }}>{proj.category}</span>
                  <h3 className="font-heading font-bold text-white text-[1rem] leading-tight">{proj.title}</h3>
                </div>
              </Link>
            ))}
            <Link
              href="/realisations"
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-[14px] font-semibold transition-opacity hover:opacity-90 mt-1"
              style={{ background: "#EA580C", color: "#ffffff" }}
            >
              Voir tout
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>

          {/* ── Desktop: bento layout ── */}
          <div className="hidden md:block">
            {/* Row 1 — featured large + 2 small */}
            <div className="grid grid-cols-3 gap-3 mb-3" style={{ height: "55vh", minHeight: 360, maxHeight: 480 }}>
              <Link href={`/realisations/${REALISATIONS[0].slug}`} className="group relative col-span-2 rounded-2xl overflow-hidden">
                <Image src={REALISATIONS[0].image} alt={REALISATIONS[0].title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="66vw" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 55%)" }} />
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[11px] font-bold px-3 py-1 rounded-full" style={{ background: "#EA580C", color: "#ffffff" }}>{REALISATIONS[0].category}</span>
                    <span className="text-[11px] font-medium px-3 py-1 rounded-full bg-white/20 text-white">{REALISATIONS[0].location}</span>
                  </div>
                  <h3 className="font-heading font-black text-white text-[1.6rem] leading-tight">{REALISATIONS[0].title}</h3>
                </div>
              </Link>
              <div className="flex flex-col gap-3">
                {REALISATIONS.slice(1, 3).map((proj) => (
                  <Link key={proj.slug} href={`/realisations/${proj.slug}`} className="group relative flex-1 rounded-2xl overflow-hidden">
                    <Image src={proj.image} alt={proj.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="33vw" />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.72) 0%, transparent 55%)" }} />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full" style={{ background: "#EA580C", color: "#ffffff" }}>{proj.category}</span>
                        <span className="text-[10px] font-medium px-2.5 py-0.5 rounded-full bg-white/20 text-white">{proj.location}</span>
                      </div>
                      <h3 className="font-heading font-bold text-white text-[0.95rem] leading-tight">{proj.title}</h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            {/* Row 2 — 3 equal cards */}
            <div className="grid grid-cols-3 gap-3" style={{ height: "26vh", minHeight: 180, maxHeight: 220 }}>
              {REALISATIONS.slice(3, 6).map((proj) => (
                <Link key={proj.slug} href={`/realisations/${proj.slug}`} className="group relative rounded-2xl overflow-hidden">
                  <Image src={proj.image} alt={proj.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="33vw" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.72) 0%, transparent 55%)" }} />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full" style={{ background: "#EA580C", color: "#ffffff" }}>{proj.category}</span>
                      <span className="text-[10px] font-medium px-2.5 py-0.5 rounded-full bg-white/20 text-white">{proj.location}</span>
                    </div>
                    <h3 className="font-heading font-bold text-white text-[0.95rem] leading-tight">{proj.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ════════════════════════════════════════════
          6. QUOTE
      */}
      <QuoteReveal />

      {/* ════════════════════════════════════════════
          7. TESTIMONIALS
      */}
      <section
        className="pb-20 md:pb-28 bg-[#0c1c35] relative"
        style={{ paddingTop: "4rem", paddingBottom: "4rem" }}
      >
        <StaggerTestimonials />
      </section>

      {/* ════════════════════════════════════════════
          8. FAQ
      */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-8">

          {/* Header */}
          <div className="mb-12 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0" style={{ background: "#EA580C" }}>
                <svg className="w-4 h-4" fill="none" stroke="white" viewBox="0 0 24 24" strokeWidth={2.2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
              <span className="text-[13px] font-semibold text-ink-500 uppercase tracking-widest">FAQ</span>
            </div>
            <h2
              className="font-heading font-black text-ink-900 tracking-tight"
              style={{ fontSize: "clamp(2.2rem, 4vw, 3.8rem)" }}
            >
              Questions fréquentes
            </h2>
          </div>

          {/* Accordion */}
          <div className="max-w-[1000px] mx-auto">
            <div className="divide-y divide-sand-200 border-t border-sand-200">
              {FAQ_ITEMS.map((faq, i) => (
                <details key={i} className="group">
                  <summary className="flex items-center justify-between gap-4 py-6 cursor-pointer font-heading font-bold text-[17px] text-ink-900 transition-colors list-none">
                    {faq.question}
                    <span
                      className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-all"
                      style={{ background: "#f5f3ef" }}
                    >
                      <svg
                        className="w-4 h-4 transition-transform duration-300 group-open:rotate-180"
                        fill="none" stroke="#14200a" viewBox="0 0 24 24" strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
                      </svg>
                    </span>
                  </summary>
                  <div className="pb-6 pt-1 text-ink-500 text-[15px] leading-relaxed pr-12">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
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
