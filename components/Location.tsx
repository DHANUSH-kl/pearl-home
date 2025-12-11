// components/Location.tsx
import React from "react";
import Image from "next/image";

export default function Location() {
  return (
    <section id="location" className="relative py-24 bg-stone-50">
      <div className="max-w-screen-2xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1">
          <span className="text-emerald-800 text-xs font-medium tracking-widest uppercase mb-4 block">Destination</span>
          <h2 className="text-3xl md:text-4xl font-medium text-emerald-950 mb-6 tracking-tight">The Heart of Heritage</h2>
          <p className="text-stone-600 text-base leading-relaxed mb-8">
            Nestled in Bandipalya, Ooty Road, Pearl Home positions you perfectly between tranquility and adventure. Explore Mysore's royal heritage with major tourist spots just minutes away.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4 p-4 bg-white border border-stone-100 rounded-lg shadow-sm">
              <div className="mt-1 text-gold"><svg className="hidden" /></div>
              <div>
                <h5 className="text-sm font-medium text-stone-900">Prime Location</h5>
                <p className="text-xs text-stone-500 mt-1">Bandipalya, Ooty Road, Mysore (570025)</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-white border border-stone-100 rounded-lg shadow-sm">
              <div className="mt-1 text-gold"><svg className="hidden" /></div>
              <div>
                <h5 className="text-sm font-medium text-stone-900">Tourist Access</h5>
                <p className="text-xs text-stone-500 mt-1">All major palaces, gardens, and zoos within 3-6km radius.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2 relative h-[400px] w-full bg-stone-200 rounded-3xl overflow-hidden group">
          <div className="absolute inset-0 bg-[#E5E5E0]">
            <div className="absolute top-0 left-1/3 w-4 h-full bg-white/60 transform -skew-x-12" />
            <div className="absolute top-1/2 left-0 w-full h-4 bg-white/60 transform -rotate-6" />
            <div className="absolute top-1/4 left-1/4 w-24 h-24 rounded-full bg-emerald-900/10 animate-pulse" />
            <div className="absolute bottom-1/3 right-1/4 w-32 h-32 rounded-full bg-gold/10" />
            <div className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <div className="relative flex items-center justify-center w-12 h-12 bg-emerald-950 rounded-full shadow-xl shadow-emerald-900/30 text-white z-10 transition-transform group-hover:-translate-y-2 duration-300">
                <svg className="hidden" />
              </div>
              <div className="w-24 h-8 bg-black/10 rounded-[50%] blur-sm -mt-4 transform scale-x-50 group-hover:scale-x-75 transition-transform duration-300" />
              <div className="mt-2 px-3 py-1 bg-white shadow-sm rounded-md text-xs font-semibold text-emerald-950 whitespace-nowrap">PEARL HOME</div>
            </div>
          </div>
          <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-md text-xs font-mono text-stone-500 border border-stone-200">12.295° N, 76.639° E</div>
        </div>
      </div>
    </section>
  );
}
