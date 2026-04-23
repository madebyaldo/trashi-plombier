import Link from "next/link";
import Image from "next/image";
import { BUSINESS, NAVIGATION } from "@/lib/seo-data";

export default function Footer() {
  return (
    <footer className="bg-white">

      {/* ── CTA Banner ── */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-8 pt-10">
        <div
          className="relative rounded-3xl overflow-hidden"
          style={{ background: "#d4ea00", minHeight: 280 }}
        >
          {/* Left content */}
          <div className="relative z-10 px-10 py-12 max-w-[620px]">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 rounded-full bg-white/30 flex items-center justify-center">
                <svg className="w-4 h-4" fill="none" stroke="#14200a" viewBox="0 0 24 24" strokeWidth={2.2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
              <span className="text-[13px] font-bold text-ink-900/60 uppercase tracking-widest">
                Appel d&apos;urgence
              </span>
            </div>

            <h2
              className="font-heading font-black text-ink-900 leading-[1.0] tracking-tight mb-8"
              style={{ fontSize: "clamp(2rem, 4vw, 3.4rem)" }}
            >
              Urgence plomberie ?<br />Disponibles 24h/24.
            </h2>

            <a
              href={`tel:${BUSINESS.phoneClean}`}
              className="inline-flex items-center gap-3 px-7 py-4 rounded-full font-bold text-[15px] transition-opacity hover:opacity-90"
              style={{ background: "#14200a", color: "#d4ea00" }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {BUSINESS.phone}
            </a>
          </div>

          {/* Plumber image — circle, pinned right */}
          <div
            className="absolute right-10 top-1/2 -translate-y-1/2 w-[240px] h-[240px] rounded-full overflow-hidden hidden lg:block"
            style={{ background: "#c8de00" }}
          >
            <Image
              src="/images/about-2.avif"
              alt="Trashi Plombier"
              fill
              className="object-cover object-center"
              sizes="260px"
            />
          </div>

        </div>
      </div>

      {/* ── Main footer ── */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1.4fr_1.4fr] gap-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center font-heading font-black text-[18px]"
                style={{ background: "#d4ea00", color: "#14200a" }}
              >
                T
              </div>
              <span className="font-heading font-black text-ink-900 text-[18px] uppercase tracking-tight">
                Trashi Plombier
              </span>
            </div>
            <p className="text-[14px] font-medium text-ink-600 leading-relaxed mb-6 max-w-[240px]">
              Plombier et chauffagiste professionnel à Metz. Intervention d&apos;urgence 24h/24 et 7j/7 sur toute la Moselle.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3">
              {[
                { label: "Facebook", path: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
                { label: "LinkedIn", path: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z" },
              ].map(({ label, path }) => (
                <div
                  key={label}
                  className="w-9 h-9 rounded-full flex items-center justify-center"
                  style={{ background: "#f5f3ef" }}
                >
                  <svg className="w-4 h-4" fill="none" stroke="#14200a" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={path} />
                  </svg>
                </div>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-heading font-black text-ink-900 text-[13px] uppercase tracking-widest mb-6">
              Liens rapides
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Accueil",   href: "/" },
                { label: "Plomberie", href: NAVIGATION.plomberie[0].href },
                { label: "Urgence",   href: NAVIGATION.urgence[0].href },
                { label: "Chauffage", href: NAVIGATION.chauffage[0].href },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-[14px] font-medium text-ink-600 hover:text-ink-900 transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="font-heading font-black text-ink-900 text-[13px] uppercase tracking-widest mb-6">
              Coordonnées
            </h3>
            <ul className="space-y-4">
              {[
                {
                  icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
                  text: BUSINESS.phone,
                  href: `tel:${BUSINESS.phoneClean}`,
                },
                {
                  icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: `${BUSINESS.address.street}, ${BUSINESS.address.postalCode} ${BUSINESS.address.city}`,
                  href: undefined,
                },
                {
                  icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                  text: "contact@trashiplombier.fr",
                  href: "mailto:contact@trashiplombier.fr",
                },
              ].map(({ icon, text, href }) => (
                <li key={text} className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: "#f5f3ef" }}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="#14200a" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
                    </svg>
                  </div>
                  {href ? (
                    <a href={href} className="text-[14px] font-medium text-ink-600 hover:text-ink-900 transition-colors leading-snug">
                      {text}
                    </a>
                  ) : (
                    <span className="text-[14px] font-medium text-ink-600 leading-snug">{text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Working hours */}
          <div>
            <h3 className="font-heading font-black text-ink-900 text-[13px] uppercase tracking-widest mb-6">
              Horaires
            </h3>
            <ul className="space-y-3">
              {[
                { day: "Lun — Ven", hours: "8h00 – 19h00" },
                { day: "Samedi",    hours: "9h00 – 17h00" },
                { day: "Dimanche",  hours: "Urgences uniquement" },
                { day: "Urgences",  hours: "24h/24 – 7j/7" },
              ].map(({ day, hours }) => (
                <li key={day} className="flex items-center justify-between gap-4 text-[14px]">
                  <span className="font-medium text-ink-600">{day}</span>
                  <span className={`font-semibold ${hours.includes("24h") ? "text-ink-900" : "text-ink-700"}`}>
                    {hours}
                  </span>
                </li>
              ))}
            </ul>

            {/* Emergency badge */}
            <div
              className="mt-6 px-4 py-3 rounded-xl flex items-center gap-3"
              style={{ background: "#14200a" }}
            >
              <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#d4ea00" }} />
              <span className="text-white text-[13px] font-semibold">Appelez-nous</span>
            </div>
          </div>

        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-sand-100">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-8 py-5 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-[13px] font-medium text-ink-500">
            &copy; {new Date().getFullYear()} {BUSINESS.name}. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-[13px] font-medium text-ink-500">
            <Link href="/mentions-legales" className="hover:text-ink-900 transition-colors">Mentions légales</Link>
            <Link href="/politique-confidentialite" className="hover:text-ink-900 transition-colors">Confidentialité</Link>
          </div>
        </div>
      </div>

    </footer>
  );
}
