import Image from "next/image";

const STEPS = [
  { num: "01", title: "Rénovation salle de bain",   desc: "Pose de douche à l'italienne, baignoire, robinetterie haut de gamme. Travail soigné, livré dans les délais.", highlight: false, side: "left"  },
  { num: "02", title: "Débouchage canalisation",     desc: "Débouchage par haute pression ou furet électrique. WC bouchés, éviers, douches, colonnes d'immeubles.",      highlight: false, side: "left"  },
  { num: "03", title: "Dépannage urgence 24h/24",    desc: "Fuite d'eau, canalisation bouchée, panne — un technicien intervient en moins de 30 min à Metz, jours et nuits.", highlight: true,  side: "right" },
  { num: "04", title: "Installation & robinetterie", desc: "Remplacement de tuyauterie, pose de robinets, mitigeurs et accessoires sanitaires toutes marques.",            highlight: false, side: "right" },
];

export default function PlomberieProcess() {
  const left  = STEPS.filter(s => s.side === "left");
  const right = STEPS.filter(s => s.side === "right");

  return (
    <div className="grid lg:grid-cols-[1fr_340px_1fr] gap-8 items-center">

      {/* Left cards */}
      <div className="flex flex-col gap-6">
        {left.map(step => (
          <div key={step.num} className="relative rounded-2xl border border-sand-200 bg-white p-6 shadow-sm">
            <div className="absolute -right-4 -top-4 w-10 h-10 rounded-full flex items-center justify-center text-[13px] font-bold text-white" style={{ background: "#EA580C" }}>
              {step.num}
            </div>
            <h3 className="font-heading font-black text-ink-900 uppercase text-[16px] mb-2">{step.title}</h3>
            <p className="text-ink-500 text-[15px] font-medium leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>

      {/* Center circular image */}
      <div className="relative mx-auto rounded-full overflow-hidden border-4 border-sand-100" style={{ width: "320px", height: "320px" }}>
        <Image src="/images/service-3.avif" alt="Trashi Plombier" fill className="object-cover" sizes="320px" />
      </div>

      {/* Right cards */}
      <div className="flex flex-col gap-6">
        {right.map(step => (
          <div
            key={step.num}
            className="relative rounded-2xl p-6"
            style={step.highlight ? { background: "#EA580C" } : { background: "white", border: "1px solid #ebe7e0" }}
          >
            <div
              className="absolute -left-4 -top-4 w-10 h-10 rounded-full flex items-center justify-center text-[13px] font-bold"
              style={step.highlight ? { background: "white", color: "#14200a" } : { background: "#EA580C", color: "#ffffff" }}
            >
              {step.num}
            </div>
            <h3 className={`font-heading font-black uppercase text-[16px] mb-2 ${step.highlight ? "text-white" : "text-ink-900"}`}>{step.title}</h3>
            <p className={`text-[13px] leading-relaxed ${step.highlight ? "text-white/80" : "text-ink-500"}`}>{step.desc}</p>
          </div>
        ))}
      </div>

    </div>
  );
}
