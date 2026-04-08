import Link from "next/link";
import Image from "next/image";
import SchemaLocalBusiness from "@/components/SchemaLocalBusiness";
import PlomberieSection from "@/components/PlomberieSection";
import ChauffageSection from "@/components/ChauffageSection";
import HeroCarousel from "@/components/HeroCarousel";
import {
  BUSINESS,
  URGENCE_PAGES,
} from "@/lib/seo-data";

export default function HomePage() {
  return (
    <>
      <SchemaLocalBusiness />

      {/* ═══════════════ HERO ═══════════════ */}
      <HeroCarousel />

      {/* ═══════════════ SERVICES URGENCE ═══════════════ */}
      <section id="urgence" className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-copper-500 animate-pulse" />
                <span className="text-copper-600 text-[13px] font-bold tracking-wide uppercase">
                  Urgence 24h/24
                </span>
              </div>
              <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-ink-900 tracking-tight">
                Intervention immédiate à Metz
              </h2>
            </div>
            <a
              href={`tel:${BUSINESS.phoneClean}`}
              className="group inline-flex items-center gap-4 bg-copper-500 hover:bg-copper-600 pl-5 pr-7 py-3 rounded-2xl transition-all duration-200 shadow-lg shadow-copper-500/20 hover:shadow-xl hover:shadow-copper-500/30 self-start sm:self-auto"
            >
              <span className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                <PhoneIcon />
              </span>
              <span>
                <span className="block text-[11px] text-white/70 font-medium uppercase tracking-wider leading-none">
                  Appel urgence
                </span>
                <span className="block font-heading font-extrabold text-lg text-white tracking-tight mt-0.5">
                  {BUSINESS.phone}
                </span>
              </span>
            </a>
          </div>

          {/* Image grid: 4 main + 3 bottom */}
          {(() => {
            const images = [
              "/images/urgence-plombier.jpg",
              "/images/urgence-depannage.jpg",
              "/images/urgence-fuite.jpg",
              "/images/urgence-chauffagiste.jpg",
            ];
            const bottomImages = [
              "/images/urgence-chaudiere.jpg",
              "/images/urgence-chauffe-eau.jpg",
              "/images/urgence-debouchage.jpg",
            ];
            return (
              <>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
                  {URGENCE_PAGES.slice(0, 4).map((page, i) => (
                    <Link
                      key={page.slug}
                      href={`/${page.slug}`}
                      className="group relative rounded-2xl overflow-hidden aspect-[4/5] md:aspect-[3/4] transition-all hover:shadow-2xl hover:-translate-y-1 duration-300"
                    >
                      <Image
                        src={images[i]}
                        alt={page.h1.split("–")[0].trim()}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                        <h3 className="font-heading text-[15px] md:text-[17px] font-bold text-white leading-snug drop-shadow-sm">
                          {page.h1.split("–")[0].split("à")[0].trim()}
                        </h3>
                        <div className="flex items-center gap-1.5 text-white/60 text-[12px] font-semibold mt-2 group-hover:text-copper-300 group-hover:gap-2.5 transition-all">
                          En savoir plus
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                <div className="grid md:grid-cols-3 gap-3 md:gap-4 mt-3 md:mt-4">
                  {URGENCE_PAGES.slice(4).map((page, i) => (
                    <Link
                      key={page.slug}
                      href={`/${page.slug}`}
                      className="group relative rounded-2xl overflow-hidden h-[140px] md:h-[160px] transition-all hover:shadow-2xl hover:-translate-y-1 duration-300"
                    >
                      <Image
                        src={bottomImages[i]}
                        alt={page.h1.split("–")[0].trim()}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                        <h3 className="font-heading text-[14px] md:text-[15px] font-bold text-white leading-snug drop-shadow-sm">
                          {page.h1.split("–")[0].split("à")[0].trim()}
                        </h3>
                        <p className="text-[12px] text-white/50 mt-1 line-clamp-1">
                          {page.metaDescription.slice(0, 60)}…
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </>
            );
          })()}
        </div>
      </section>

      {/* ═══════════════ SERVICES PLOMBERIE ═══════════════ */}
      <PlomberieSection />

      {/* ═══════════════ SERVICES CHAUFFAGE ═══════════════ */}
      <ChauffageSection />

      {/* ═══════════════ WHY CHOOSE US ═══════════════ */}
      <section className="py-20 md:py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Top: heading left + stats right */}
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-end mb-16 md:mb-20">
            <div>
              <span className="inline-block text-[12px] font-bold uppercase tracking-widest text-copper-500 mb-3">
                Pourquoi nous
              </span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold text-ink-900 leading-[1.1] tracking-tight">
                Pourquoi choisir<br />Trashi Plombier ?
              </h2>
            </div>
            <p className="text-ink-400 text-[16px] md:text-lg leading-relaxed max-w-lg lg:ml-auto">
              Depuis plus de 15 ans, nous offrons un service de plomberie et chauffage d&apos;excellence à Metz et dans toute la Moselle. Chaque intervention est une promesse de qualité.
            </p>
          </div>

          {/* Stats banner */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-sand-200 rounded-2xl overflow-hidden mb-16 md:mb-20">
            {[
              { number: "<30", unit: "min", label: "Temps d'intervention" },
              { number: "15+", unit: "ans", label: "D'expérience à Metz" },
              { number: "4.9", unit: "/5", label: "Avis clients vérifiés" },
              { number: "100", unit: "%", label: "Travaux garantis" },
            ].map((stat) => (
              <div key={stat.label} className="bg-sand-50 p-6 md:p-8 text-center">
                <div className="flex items-baseline justify-center gap-0.5">
                  <span className="font-heading text-3xl md:text-4xl font-black text-ink-900 tracking-tight">
                    {stat.number}
                  </span>
                  <span className="font-heading text-lg md:text-xl font-bold text-copper-500">
                    {stat.unit}
                  </span>
                </div>
                <p className="text-ink-400 text-[13px] font-medium mt-1.5">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Features grid */}
          <div className="grid md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-10 md:gap-y-14">
            {[
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: "Intervention Rapide",
                desc: "Nous intervenons en moins de 30 minutes à Metz et alentours, 24h/24 et 7j/7. Urgences, dépannages, réparations — nous sommes toujours disponibles.",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: "Artisans Certifiés",
                desc: "Nos plombiers et chauffagistes sont qualifiés RGE et disposent de toutes les certifications requises. Votre installation est entre les mains d'experts.",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Devis Gratuit & Transparent",
                desc: "Prix clairs, sans surprises. Nous vous remettons un devis détaillé et gratuit avant chaque intervention, pour une totale transparence.",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                ),
                title: "Garantie sur Tous les Travaux",
                desc: "Chaque intervention est couverte par notre garantie. Nous nous engageons sur la qualité de nos travaux et votre entière satisfaction.",
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-5">
                <div className="w-12 h-12 rounded-xl bg-copper-50 flex items-center justify-center shrink-0 text-copper-600">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-heading text-lg font-extrabold text-ink-900 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-ink-400 text-[14px] leading-relaxed mt-1.5">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ RÉALISATIONS ═══════════════ */}
      <section className="py-20 md:py-28 bg-sand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <div>
              <span className="inline-block text-[12px] font-bold uppercase tracking-widest text-copper-500 mb-3">
                Réalisations
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-ink-900 leading-tight tracking-tight">
                Nos derniers chantiers
              </h2>
            </div>
            <Link
              href="/realisations"
              className="group inline-flex items-center gap-2 text-ink-900 hover:text-copper-600 font-bold text-[14px] transition-colors self-start sm:self-auto"
            >
              <span className="border-b border-ink-900/20 group-hover:border-copper-500 pb-0.5 transition-colors">
                Tout voir
              </span>
              <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Bento grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[200px] md:auto-rows-[220px]">
            {/* Featured — large */}
            <Link
              href="/realisations"
              className="group relative rounded-2xl overflow-hidden md:col-span-2 lg:col-span-2 lg:row-span-2 transition-all hover:shadow-2xl hover:-translate-y-0.5 duration-300"
            >
              <Image
                src="/images/real-sdb.jpg"
                alt="Rénovation salle de bain Metz"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 66vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-widest bg-white/90 text-brand-800 px-3 py-1 rounded-full">
                    Plomberie
                  </span>
                  <span className="text-white/70 text-[12px] font-medium">Metz Centre</span>
                </div>
                <h3 className="font-heading text-xl md:text-2xl font-extrabold text-white tracking-tight">
                  Rénovation complète salle de bain
                </h3>
                <p className="text-white/70 text-[14px] mt-2 max-w-lg leading-relaxed hidden md:block">
                  Rénovation intégrale d&apos;une salle de bain de 8m² avec douche à l&apos;italienne, double vasque et robinetterie haut de gamme.
                </p>
              </div>
            </Link>

            {/* Top right */}
            <Link
              href="/realisations"
              className="group relative rounded-2xl overflow-hidden transition-all hover:shadow-2xl hover:-translate-y-0.5 duration-300"
            >
              <Image
                src="/images/real-chaudiere.jpg"
                alt="Remplacement chaudière gaz"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <span className="inline-block text-[10px] font-bold uppercase tracking-widest bg-white/90 text-copper-700 px-3 py-1 rounded-full mb-2">
                  Chauffage
                </span>
                <h3 className="font-heading text-[15px] font-bold text-white leading-snug">
                  Remplacement chaudière gaz
                </h3>
                <p className="text-white/70 text-[12px] font-medium mt-1">Montigny-lès-Metz</p>
              </div>
            </Link>

            {/* Bottom right */}
            <Link
              href="/realisations"
              className="group relative rounded-2xl overflow-hidden transition-all hover:shadow-2xl hover:-translate-y-0.5 duration-300"
            >
              <Image
                src="/images/real-fuite.jpg"
                alt="Dépannage fuite en urgence"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <span className="inline-block text-[10px] font-bold uppercase tracking-widest bg-white/90 text-copper-700 px-3 py-1 rounded-full mb-2">
                  Urgence
                </span>
                <h3 className="font-heading text-[15px] font-bold text-white leading-snug">
                  Dépannage fuite en urgence
                </h3>
                <p className="text-white/70 text-[12px] font-medium mt-1">Woippy — 25 min</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════ TESTIMONIALS ═══════════════ */}
      <section className="py-20 md:py-28 bg-brand-950 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-end mb-14">
            <div>
              <span className="inline-block text-[12px] font-bold uppercase tracking-widest text-copper-400 mb-3">
                Témoignages
              </span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-[1.1] tracking-tight">
                Ce que disent nos clients
              </h2>
            </div>
            <div className="flex items-center gap-4 lg:justify-end">
              <div className="flex items-baseline gap-1.5">
                <span className="font-heading text-4xl md:text-5xl font-black text-white">4.9</span>
                <span className="font-heading text-xl font-bold text-copper-400">/5</span>
              </div>
              <div>
                <div className="flex gap-0.5 mb-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-copper-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-white/30 text-[12px] font-medium">120+ avis vérifiés</p>
              </div>
            </div>
          </div>

          {/* Reviews */}
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                name: "Marie D.",
                city: "Metz",
                service: "Urgence",
                text: "Intervention très rapide pour une fuite d'eau en pleine nuit. Plombier professionnel et tarif honnête. Je recommande vivement !",
                initials: "MD",
              },
              {
                name: "Pierre L.",
                city: "Montigny-lès-Metz",
                service: "Chauffage",
                text: "Excellent service pour l'entretien de ma chaudière. Technicien ponctuel et compétent. Contrat annuel au top. Rien à redire.",
                initials: "PL",
              },
              {
                name: "Sophie M.",
                city: "Woippy",
                service: "Plomberie",
                text: "Rénovation complète de notre salle de bain. Travail soigné, dans les délais et le budget. Merci à toute l'équipe !",
                initials: "SM",
              },
            ].map((review) => (
              <div
                key={review.name}
                className="bg-white/[0.04] border border-white/[0.06] rounded-2xl p-7 md:p-8 flex flex-col"
              >
                {/* Stars */}
                <div className="flex gap-0.5 mb-5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-copper-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-[15px] text-white/70 leading-relaxed flex-1 mb-6">
                  &ldquo;{review.text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-5 border-t border-white/[0.06]">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-copper-500 to-copper-600 flex items-center justify-center shrink-0">
                    <span className="text-[12px] font-bold text-white">{review.initials}</span>
                  </div>
                  <div>
                    <span className="text-[14px] font-bold text-white block">{review.name}</span>
                    <span className="text-[12px] text-white/30">{review.city} · {review.service}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ CTA ═══════════════ */}
      <section className="py-20 md:py-24 bg-copper-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.08),transparent_60%)]" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative text-center">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-[1.1] tracking-tight mb-4">
            Besoin d&apos;un plombier à Metz ?
          </h2>
          <p className="text-white/70 text-[16px] md:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Intervention rapide, devis gratuit, artisans certifiés. Appelez-nous maintenant ou demandez un devis en ligne.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${BUSINESS.phoneClean}`}
              className="inline-flex items-center justify-center gap-3 bg-white text-copper-700 hover:text-copper-800 font-heading font-extrabold text-lg px-8 py-4 rounded-xl transition-colors shadow-lg shadow-black/10"
            >
              <PhoneIcon />
              {BUSINESS.phone}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white/15 hover:bg-white/25 text-white font-bold text-lg px-8 py-4 rounded-xl transition-colors border border-white/20"
            >
              Devis en ligne gratuit
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════ FAQ ═══════════════ */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="mb-12">
            <span className="inline-block text-[12px] font-bold uppercase tracking-widest text-copper-500 mb-3">
              FAQ
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-ink-900 tracking-tight">
              Questions fréquentes
            </h2>
          </div>
          <div className="space-y-3">
            {FAQ_ITEMS.map((faq, index) => (
              <details
                key={index}
                className="group rounded-xl border border-sand-200 overflow-hidden"
              >
                <summary className="flex items-center justify-between gap-4 p-5 md:p-6 cursor-pointer font-heading font-bold text-[15px] md:text-[16px] text-ink-900 hover:text-copper-600 transition-colors">
                  {faq.question}
                  <span className="w-8 h-8 rounded-full bg-sand-100 group-open:bg-copper-500 flex items-center justify-center shrink-0 transition-colors">
                    <svg className="w-4 h-4 text-ink-400 group-open:text-white group-open:rotate-180 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="px-5 md:px-6 pb-5 md:pb-6 text-ink-500 text-[15px] leading-relaxed">
                  <p>{faq.answer}</p>
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

const MARQUEE_IMAGES = [
  { src: "/images/urgence-plombier.jpg",      label: "Plombier urgence",          tag: "Urgence"    },
  { src: "/images/plomberie-salle-de-bain.jpg", label: "Rénovation salle de bain", tag: "Plomberie"  },
  { src: "/images/chauffage-installation.jpg", label: "Installation chaudière",    tag: "Chauffage"  },
  { src: "/images/urgence-fuite.jpg",          label: "Fuite d'eau urgente",       tag: "Urgence"    },
  { src: "/images/plomberie-douche.jpg",       label: "Pose de douche",            tag: "Plomberie"  },
  { src: "/images/chauffage-entretien.jpg",    label: "Entretien chaudière",       tag: "Chauffage"  },
  { src: "/images/urgence-debouchage.jpg",     label: "Débouchage canalisation",   tag: "Urgence"    },
  { src: "/images/plomberie-robinetterie.jpg", label: "Remplacement robinetterie", tag: "Plomberie"  },
  { src: "/images/chauffage-chauffe-eau.jpg",  label: "Pose chauffe-eau",          tag: "Chauffage"  },
  { src: "/images/urgence-chaudiere.jpg",      label: "Dépannage chaudière",       tag: "Urgence"    },
];

const FAQ_ITEMS = [
  {
    question: "Quel est le délai d'intervention pour une urgence plomberie à Metz ?",
    answer: "Nous intervenons en moins de 30 minutes pour toute urgence plomberie à Metz et dans les communes limitrophes. Notre service est disponible 24h/24 et 7j/7.",
  },
  {
    question: "Proposez-vous des devis gratuits ?",
    answer: "Oui, tous nos devis sont gratuits et sans engagement. Nous vous fournissons une estimation détaillée avant toute intervention.",
  },
  {
    question: "Intervenez-vous en dehors de Metz ?",
    answer: "Oui, nous intervenons à Metz et dans toutes les communes environnantes : Montigny-lès-Metz, Woippy, Augny, Marly, Longeville-lès-Metz, Maizières-lès-Metz, Talange, Hagondange, Amnéville et Thionville.",
  },
  {
    question: "L'entretien annuel de chaudière est-il obligatoire ?",
    answer: "Oui, l'entretien annuel de votre chaudière est obligatoire selon la réglementation française. Nous proposons des contrats d'entretien annuel avec certificat de conformité.",
  },
  {
    question: "Quels types de chaudières réparez-vous ?",
    answer: "Nous réparons et entretenons tous les types de chaudières : gaz, fioul et électrique, toutes marques confondues.",
  },
  {
    question: "Comment demander un dépannage en urgence ?",
    answer: "Appelez-nous directement au " + BUSINESS.phone + ". Un technicien est disponible immédiatement pour prendre en charge votre urgence.",
  },
];


function FAQSchema({ items }: { items: { question: string; answer: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

function PhoneIcon() {
  return (
    <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}
