import { BUSINESS } from "@/lib/seo-data";

export default function CTABanner() {
  return (
    <section style={{ background: "#0c1c35" }} className="py-12">
      <div className="max-w-4xl mx-auto px-4 text-center text-white">
        <h2 className="font-heading text-3xl font-bold mb-4">
          Besoin d&apos;un plombier en urgence ?
        </h2>
        <p className="text-lg mb-6 text-white/80">
          Intervention rapide 24h/24 et 7j/7 sur Metz et ses environs
        </p>
        <a
          href={`tel:${BUSINESS.phoneClean}`}
          className="inline-block font-bold text-[16px] sm:text-xl px-6 sm:px-8 py-4 rounded-xl hover:opacity-90 transition-opacity w-full sm:w-auto"
          style={{ background: "#EA580C", color: "#ffffff" }}
        >
          Appeler maintenant : {BUSINESS.phone}
        </a>
      </div>
    </section>
  );
}
