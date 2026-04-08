import { BUSINESS } from "@/lib/seo-data";

export default function CTABanner() {
  return (
    <section className="bg-copper-500 py-12">
      <div className="max-w-4xl mx-auto px-4 text-center text-white">
        <h2 className="font-heading text-3xl font-bold mb-4">
          Besoin d&apos;un plombier en urgence ?
        </h2>
        <p className="text-lg mb-6 text-white/80">
          Intervention rapide 24h/24 et 7j/7 sur Metz et ses environs
        </p>
        <a
          href={`tel:${BUSINESS.phoneClean}`}
          className="inline-block bg-white text-copper-700 font-bold text-xl px-8 py-4 rounded-lg hover:bg-copper-50 transition-colors"
        >
          Appeler maintenant : {BUSINESS.phone}
        </a>
      </div>
    </section>
  );
}
