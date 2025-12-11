// components/GallerySection.tsx
import Image from "next/image";
import React from "react";
import { GALLERY_IMAGES } from "../lib/images";

type Props = {
  onOpenGallery: (index?: number, mode?: "masonry" | "slider") => void;
};

export default function GallerySection({ onOpenGallery }: Props) {
  return (
    <section id="gallery" className="py-24 bg-[#FAFAF9] border-t border-stone-200/50">
      <div className="max-w-screen-2xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-gold text-xs font-medium tracking-widest uppercase mb-4">Visual Tour</span>
          <h2 className="text-3xl md:text-5xl font-medium text-emerald-950 mb-4 tracking-tight">A Glimpse Into <span className="font-serif italic">Pearl Home</span></h2>
          <p className="text-stone-500 text-sm md:text-base font-light tracking-wide">Scroll through memories waiting to be made.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_IMAGES.slice(0, 6).map((img, idx) => (
            <div key={img.src} className="group relative overflow-hidden rounded-2xl cursor-pointer shadow-lg shadow-stone-200 aspect-[4/3]" onClick={() => onOpenGallery(idx, "slider")}>
              <Image src={img.src} alt={img.label || `gallery-${idx}`} fill className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <h4 className="text-white text-xl font-serif font-medium tracking-wide">{img.label ?? "Image"}</h4>
              </div>
            </div>
          ))}

          <div className="mt-12 flex justify-center lg:col-span-3">
            <button onClick={() => onOpenGallery(0, "masonry")} className="group inline-flex items-center gap-2.5 px-8 py-3.5 bg-white border border-stone-200 rounded-full hover:border-emerald-900/30 hover:shadow-lg hover:shadow-stone-200/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-900/10">
              <svg className="hidden" />
              <span className="text-sm font-medium text-emerald-950 tracking-wide">View Complete Gallery</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
