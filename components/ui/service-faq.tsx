"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function ServiceFAQ({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="divide-y divide-sand-200 border border-sand-200 rounded-2xl overflow-hidden">
      {items.map((item, i) => (
        <div key={i}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white hover:bg-sand-50 transition-colors"
          >
            <span className="font-semibold text-ink-900 text-[15px]">{item.q}</span>
            <ChevronDown
              className={`w-5 h-5 text-ink-400 shrink-0 transition-transform duration-200 ${
                open === i ? "rotate-180" : ""
              }`}
            />
          </button>
          {open === i && (
            <div className="px-6 pb-5 bg-white">
              <p className="text-ink-600 text-[15px] leading-relaxed">{item.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
