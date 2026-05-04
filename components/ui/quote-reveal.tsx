"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const WORDS =
  "Chez Trashi Plombier, chaque intervention est bien plus qu'un dépannage — c'est une promesse de qualité, de rapidité et de transparence envers nos clients.".split(
    " "
  );

function Word({
  word,
  index,
  total,
  scrollYProgress,
}: {
  word: string;
  index: number;
  total: number;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const start = index / total;
  const end = Math.min((index + 2) / total, 1);

  const color = useTransform(scrollYProgress, [start, end], ["#d4d4d8", "#18181b"]);

  return (
    <motion.span style={{ color }} className="inline-block mr-[0.28em]">
      {word}
    </motion.span>
  );
}

export default function QuoteReveal() {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.35"],
  });

  return (
    <section ref={ref} className="pt-0 pb-36 md:pb-48 bg-white">
      <div className="max-w-[1100px] mx-auto px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "#EA580C" }}>
              <svg className="w-4 h-4" fill="none" stroke="white" viewBox="0 0 24 24" strokeWidth={2.2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
            <span className="text-[13px] font-semibold text-ink-500 uppercase tracking-widest">Notre engagement</span>
          </div>
        <p
          className="font-heading font-black leading-[1.12] tracking-tight"
          style={{ fontSize: "clamp(1.8rem, 3.2vw, 3rem)" }}
        >
          {WORDS.map((word, i) => (
            <Word
              key={i}
              word={word}
              index={i}
              total={WORDS.length}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </p>
      </div>
    </section>
  );
}
