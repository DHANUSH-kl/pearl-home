// components/Hero.tsx
import Image from "next/image";
import React from "react";
import { ArrowRight } from "lucide-react";

export default function Hero({ onViewGallery }: { onViewGallery: () => void }) {
  return (
    <header className="relative w-full h-screen flex items-end justify-start overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image src="/images/hero.jpg" alt="Mysore Luxury Interior View" fill className="object-cover object-center scale-105" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/80 via-emerald-950/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-transparent to-transparent opacity-90" />
      </div>

      <div className="relative z-10 max-w-screen-2xl mx-auto px-6 pb-24 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
        <div className="fade-in-up" style={{ animationDelay: "0.2s" }}>
          <span className="inline-block py-1 px-3 border border-white/30 rounded-full text-xs font-medium tracking-widest text-stone-200 uppercase mb-6 backdrop-blur-sm">Mysore, India</span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium text-stone-50 leading-[1.1] tracking-tight mb-6">
            A Glimpse of <br />
            <span className="italic text-gold font-serif">Serenity</span> &amp; Soul.
          </h1>
          <p className="text-lg text-stone-200 max-w-md font-light leading-relaxed mb-8">Exclusive 3BHK Apartment with private balcony views. Where modern minimalism meets the warm luxury of Mysore.</p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#book" className="group flex items-center justify-center gap-3 px-8 py-4 bg-stone-50 text-emerald-950 text-sm font-medium tracking-wide hover:bg-gold hover:text-black transition-all duration-300">
              Book Your Serene Escape
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <button onClick={onViewGallery} className="flex items-center justify-center gap-3 px-8 py-4 border border-stone-50/30 text-stone-50 text-sm font-medium tracking-wide backdrop-blur-sm hover:bg-stone-50/10 transition-all duration-300 cursor-pointer">
              View Gallery
            </button>
          </div>
        </div>

        {/* <div className="hidden md:flex justify-end items-end gap-8 pb-2 text-white/80 fade-in-up" style={{ animationDelay: "0.4s" }}>
          <div className="flex flex-col items-start gap-2"><svg className="hidden" /><span className="text-xs uppercase tracking-widest">Airy</span></div>
          <div className="flex flex-col items-start gap-2"><svg className="hidden" /><span className="text-xs uppercase tracking-widest">Luxury</span></div>
          <div className="flex flex-col items-start gap-2"><svg className="hidden" /><span className="text-xs uppercase tracking-widest">Views</span></div>
        </div> */}
      </div>
    </header>
  );
}
