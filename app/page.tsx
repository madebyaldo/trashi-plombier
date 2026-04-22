import Link from "next/link";
import Image from "next/image";
import SchemaLocalBusiness from "@/components/SchemaLocalBusiness";
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
              src="https://cdn.prod.website-files.com/68c289dbb142c4c56784b9c0/68e626815f30d3be0255ce1f_IMG_4224.avif"
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
                className="font-heading font-black text-white uppercase leading-[0.95] tracking-tight mb-7"
                style={{ fontSize: "clamp(2rem, 3.8vw, 3.8rem)" }}
              >
                Votre Plombier<br />Simple, Rapide<br />&amp; Fiable
              </h1>

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
                <div className="relative overflow-hidden rounded-2xl ml-20 mt-10" style={{ aspectRatio: "3/4" }}>
                  <Image
                    src="/images/chauffage-installation.jpg"
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
                Trashi Plombier, c&apos;est une équipe d&apos;artisans qualifiés basée à Metz. Nous intervenons rapidement pour tous vos travaux de plomberie et chauffage, avec sérieux, transparence et respect de votre domicile.
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
                  src="/images/chauffage-installation.jpg"
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
          3. SERVICES PLOMBERIE
      */}
      <section className="py-20 md:py-28 bg-white border-t border-sand-100">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="block text-[11px] font-bold uppercase tracking-[0.22em] text-ink-400 mb-3">Services</span>
            <h2 className="font-heading font-black text-ink-900 uppercase leading-[0.9] tracking-tight" style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}>
              Plomberie
            </h2>
          </div>
          <div className="grid lg:grid-cols-[1fr_360px] gap-10 lg:gap-16 items-start">
            <div className="border-t border-sand-200">
              {SERVICES_PLOMBERIE.map((svc, i) => (
                <details key={svc.title} className="group border-b border-sand-200" name="plomberie-home">
                  <summary className="flex items-center gap-5 py-5 cursor-pointer select-none list-none">
                    <span className="text-[11px] font-bold text-ink-300 w-6 shrink-0 tabular-nums">{String(i + 1).padStart(2, "0")}.</span>
                    <span className="font-heading text-[17px] md:text-[19px] font-bold text-ink-900 flex-1 leading-snug group-open:text-ink-700 transition-colors">{svc.title}</span>
                    <span className="text-ink-400 group-open:text-ink-900 text-[18px] font-light transition-colors shrink-0 w-5 text-right">
                      <span className="group-open:hidden">+</span>
                      <span className="hidden group-open:block">−</span>
                    </span>
                  </summary>
                  <div className="pb-6 pl-11 pr-2">
                    <p className="text-ink-500 text-[13.5px] leading-relaxed mb-4">{svc.desc}</p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {svc.tags.map((tag) => (
                        <span key={tag} className="border border-sand-200 text-ink-600 text-[11px] font-medium px-3 py-0.5 rounded-full">{tag}</span>
                      ))}
                    </div>
                    <Link href={svc.href} className="text-[13px] font-semibold text-ink-900 hover:text-copper-600 transition-colors underline underline-offset-2">En savoir plus →</Link>
                  </div>
                </details>
              ))}
            </div>
            <div className="hidden lg:block sticky top-24">
              <div className="relative rounded-3xl overflow-hidden bg-sand-100" style={{ aspectRatio: "3/4" }}>
                <Image src="/images/plomberie-salle-de-bain.jpg" alt="Plomberie Metz" fill className="object-cover" sizes="360px" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          4. SERVICES CHAUFFAGE
      */}
      <section className="py-20 md:py-28 bg-sand-50 border-t border-sand-100">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="block text-[11px] font-bold uppercase tracking-[0.22em] text-ink-400 mb-3">Services</span>
            <h2 className="font-heading font-black text-ink-900 uppercase leading-[0.9] tracking-tight" style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}>
              Chauffage
            </h2>
          </div>
          <div className="grid lg:grid-cols-[1fr_360px] gap-10 lg:gap-16 items-start">
            <div className="border-t border-sand-200">
              {SERVICES_CHAUFFAGE.map((svc, i) => (
                <details key={svc.title} className="group border-b border-sand-200" name="chauffage-home">
                  <summary className="flex items-center gap-5 py-5 cursor-pointer select-none list-none">
                    <span className="text-[11px] font-bold text-ink-300 w-6 shrink-0 tabular-nums">{String(i + 1).padStart(2, "0")}.</span>
                    <span className="font-heading text-[17px] md:text-[19px] font-bold text-ink-900 flex-1 leading-snug group-open:text-ink-700 transition-colors">{svc.title}</span>
                    <span className="text-ink-400 group-open:text-ink-900 text-[18px] font-light transition-colors shrink-0 w-5 text-right">
                      <span className="group-open:hidden">+</span>
                      <span className="hidden group-open:block">−</span>
                    </span>
                  </summary>
                  <div className="pb-6 pl-11 pr-2">
                    <p className="text-ink-500 text-[13.5px] leading-relaxed mb-4">{svc.desc}</p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {svc.tags.map((tag) => (
                        <span key={tag} className="border border-sand-200 text-ink-600 text-[11px] font-medium px-3 py-0.5 rounded-full">{tag}</span>
                      ))}
                    </div>
                    <Link href={svc.href} className="text-[13px] font-semibold text-ink-900 hover:text-copper-600 transition-colors underline underline-offset-2">En savoir plus →</Link>
                  </div>
                </details>
              ))}
            </div>
            <div className="hidden lg:block sticky top-24">
              <div className="relative rounded-3xl overflow-hidden bg-sand-100" style={{ aspectRatio: "3/4" }}>
                <Image src="/images/chauffage-installation.jpg" alt="Chauffage Metz" fill className="object-cover" sizes="360px" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          5. RÉALISATIONS
      */}
      <section className="py-20 md:py-28 bg-white border-t border-sand-100">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <h2
              className="font-heading font-black text-ink-900 leading-[1.05] tracking-tight max-w-sm"
              style={{ fontSize: "clamp(1.5rem, 2.8vw, 2.4rem)" }}
            >
              Réalisations soignées pour chaque client.
            </h2>
            <p className="text-ink-400 text-[13px] leading-relaxed max-w-[220px]">
              Chaque chantier est réalisé avec précision et méthode, pour une satisfaction totale.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {PROJECTS.map((proj) => (
              <Link key={proj.title} href="/realisations" className="group relative rounded-3xl overflow-hidden block" style={{ aspectRatio: "4/5" }}>
                <Image src={proj.image} alt={proj.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width:768px) 100vw, 33vw" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(12,19,28,0.78) 0%, transparent 50%)" }} />
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 flex items-center justify-center shadow opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <svg className="w-4 h-4 text-ink-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ transform: "rotate(-45deg)" }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-white/50 text-[11px] font-medium mb-1">{proj.location}</p>
                  <h3 className="font-heading font-bold text-white text-[15px] leading-snug">{proj.title}</h3>
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
      <section className="py-20 md:py-28 bg-ink-900">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-end mb-14">
            <div>
              <span className="block text-[11px] font-bold uppercase tracking-[0.2em] text-copper-400 mb-4">Témoignages</span>
              <h2
                className="font-heading font-black text-white leading-[1.05] tracking-tight"
                style={{ fontSize: "clamp(1.6rem, 3vw, 2.6rem)" }}
              >
                Ce que disent<br />nos clients
              </h2>
            </div>
            <div className="flex items-center gap-4 lg:justify-end">
              <div className="flex items-baseline gap-1">
                <span className="font-heading font-black text-white text-[3.5rem] leading-none">4.9</span>
                <span className="font-heading text-xl font-bold text-copper-400">/5</span>
              </div>
              <div>
                <div className="flex gap-0.5 mb-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-copper-400" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-white/30 text-[12px]">120+ avis vérifiés</p>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="bg-white/[0.05] border border-white/[0.07] rounded-2xl p-7 flex flex-col">
                <div className="flex gap-0.5 mb-5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} className="w-3.5 h-3.5 fill-copper-400" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-[14px] text-white/65 leading-relaxed flex-1 mb-6">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3 pt-5 border-t border-white/[0.07]">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-copper-400 to-copper-600 flex items-center justify-center shrink-0">
                    <span className="text-[11px] font-bold text-white">{t.initials}</span>
                  </div>
                  <div>
                    <span className="text-[13px] font-bold text-white block">{t.name}</span>
                    <span className="text-[11px] text-white/30">{t.city} · {t.service}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
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
];

const PROJECTS = [
  { title: "Rénovation salle de bain",   location: "Metz Centre",        image: "/images/real-sdb.jpg"       },
  { title: "Remplacement chaudière gaz", location: "Montigny-lès-Metz",  image: "/images/real-chaudiere.jpg" },
  { title: "Dépannage fuite urgence",    location: "Woippy — 25 min",    image: "/images/real-fuite.jpg"     },
];

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
