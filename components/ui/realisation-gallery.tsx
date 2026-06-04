"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface RealisationGalleryProps {
  images: string[];
  title: string;
}

export default function RealisationGallery({ images, title }: RealisationGalleryProps) {
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);

  if (images.length === 0) return null;

  const prev = (i: number) => (i - 1 + images.length) % images.length;
  const next = (i: number) => (i + 1) % images.length;

  return (
    <>
      {/* Main image */}
      <div
        className="relative w-full rounded-xl overflow-hidden bg-sand-100 cursor-zoom-in"
        style={{ aspectRatio: "16/9" }}
        onClick={() => setLightbox(active)}
      >
        <Image
          src={images[active]}
          alt={`${title} – photo ${active + 1}`}
          fill
          className="object-cover transition-opacity duration-300"
          sizes="(max-width:768px) 100vw, (max-width:1200px) 65vw, 800px"
          priority
        />
        {images.length > 1 && (
          <>
            <button
              onClick={(e) => { e.stopPropagation(); setActive(prev(active)); }}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 flex items-center justify-center text-white transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); setActive(next(active)); }}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 flex items-center justify-center text-white transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <span className="absolute bottom-3 right-3 bg-black/50 text-white text-[12px] font-semibold px-2.5 py-1 rounded-full">
              {active + 1} / {images.length}
            </span>
          </>
        )}
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-2 mt-3 overflow-x-auto pb-1">
          {images.map((src, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`relative shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-all duration-150 ${
                i === active ? "border-[#EA580C]" : "border-transparent opacity-60 hover:opacity-100"
              }`}
            >
              <Image
                src={src}
                alt={`${title} – miniature ${i + 1}`}
                fill
                className="object-cover"
                sizes="80px"
              />
            </button>
          ))}
        </div>
      )}

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            onClick={() => setLightbox(null)}
          >
            <X className="w-5 h-5" />
          </button>

          {images.length > 1 && (
            <>
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                onClick={(e) => { e.stopPropagation(); setLightbox(prev(lightbox)); }}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                onClick={(e) => { e.stopPropagation(); setLightbox(next(lightbox)); }}
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          <div
            className="relative w-full max-w-5xl mx-6"
            style={{ aspectRatio: "16/9" }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[lightbox]}
              alt={`${title} – photo ${lightbox + 1}`}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>

          <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50 text-[13px]">
            {lightbox + 1} / {images.length}
          </span>
        </div>
      )}
    </>
  );
}
