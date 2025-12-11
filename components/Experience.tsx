// components/Experience.tsx
import Image from "next/image";
import React from "react";

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 bg-stone-50 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20 md:mb-32 items-end">
          <div className="md:col-span-7">
            <h2 className="text-3xl md:text-5xl font-medium text-emerald-950 tracking-tight leading-tight">
              Designed for the <br />
              <span className="italic text-gold font-serif">discerning traveler.</span>
            </h2>
          </div>
          <div className="md:col-span-5">
            <p className="text-stone-600 text-base leading-relaxed">
              Step away from the noise and into a sanctuary of calm. Pearl Home offers a fully furnished 3BHK retreat perfect for families, friends, and couples seeking privacy and premium comfort.
            </p>
          </div>
        </div>

        <div className="space-y-24 md:space-y-0">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center">
            <div className="md:col-span-7 relative group">
              <div className="absolute -inset-4 bg-emerald-100/50 rounded-tl-[4rem] rounded-br-[4rem] -z-10 transition-transform duration-500 group-hover:scale-105" />
              <Image src="/images/interior-1.jpg" alt="Luxury Living Room" width={1600} height={1200} className="w-full aspect-[4/3] object-cover rounded-tl-[4rem] rounded-br-[4rem] shadow-xl shadow-stone-200" />
            </div>
            <div className="md:col-span-4 md:col-start-9 flex flex-col justify-center">
              <span className="text-gold text-xs font-medium tracking-widest uppercase mb-4">Interiors</span>
              <h3 className="text-2xl font-medium text-emerald-950 mb-4 tracking-tight">Modern Comfort Meets Style</h3>
              <p className="text-stone-600 text-sm leading-relaxed mb-6">Expansive living spaces bathed in natural light. Every corner is thoughtfully curated with high-end furnishings to ensure your stay is as beautiful as it is comfortable.</p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-stone-800">
                  <svg className="hidden" />
                  Fully Furnished Spacious Hall
                </li>
                <li className="flex items-center gap-3 text-sm text-stone-800">
                  <svg className="hidden" />
                  Smart Entertainment Systems
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center pt-0 md:pt-32">
            <div className="md:col-span-4 md:col-start-2 order-2 md:order-1 flex flex-col justify-center">
              <span className="text-gold text-xs font-medium tracking-widest uppercase mb-4">The View</span>
              <h3 className="text-2xl font-medium text-emerald-950 mb-4 tracking-tight">Private Balcony Retreats</h3>
              <p className="text-stone-600 text-sm leading-relaxed mb-6">Wake up to the gentle breeze of Mysore. Each bedroom features its own private balcony, offering uninterrupted views of the garden and lake. A true breath of fresh air.</p>
              <div className="flex items-center gap-4 pt-2">
                <div className="h-px w-12 bg-emerald-900" />
                <span className="text-emerald-900 text-xs font-medium uppercase tracking-wider">In Every Bedroom</span>
              </div>
            </div>

            <div className="md:col-span-6 md:col-start-7 order-1 md:order-2 relative group">
              <div className="absolute -inset-4 bg-stone-200/50 rounded-tr-[4rem] rounded-bl-[4rem] -z-10 transition-transform duration-500 group-hover:scale-105" />
              <Image src="/images/bedroom-1.jpg" alt="Bedroom with Balcony" width={1974} height={1480} className="w-full aspect-[3/4] md:aspect-[4/3] object-cover rounded-tr-[4rem] rounded-bl-[4rem] shadow-xl shadow-stone-200" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
