// components/Amenities.tsx
import React from "react";
import { Wifi, Utensils, Tv, Droplet, ShieldCheck, Car } from "lucide-react";

export default function Amenities() {
  const items = [
    { Icon: Wifi, title: "High-Speed WiFi", desc: "Stay connected with premium fiber internet suitable for work or streaming." },
    { Icon: Utensils, title: "Fully Equipped Kitchen", desc: "Cook your favorites with modern appliances and essential cookware." },
    { Icon: Tv, title: "Smart Entertainment", desc: "Large screen Smart TV with access to major streaming platforms." },
    { Icon: Droplet, title: "Premium Toiletries", desc: "Attached modern bathrooms stocked with essential luxury toiletries." },
    { Icon: ShieldCheck, title: "Secure Premises", desc: "Located in a safe neighborhood with secure access for your peace of mind." },
    { Icon: Car, title: "Parking Available", desc: "Hassle-free parking space available for your vehicle." }
  ];

  return (
    <section id="amenities" className="py-24 bg-white border-y border-stone-100">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-medium text-emerald-950 mb-4 tracking-tight">Curated Amenities</h2>
          <p className="text-stone-500 max-w-lg mx-auto text-sm">Everything you need for a seamless, luxury stay.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-stone-100 border border-stone-100 rounded-2xl overflow-hidden">
          {items.map((a) => (
            <div key={a.title} className="bg-white p-10 hover:bg-stone-50 transition-colors duration-300 flex flex-col items-center text-center group">
              <div className="w-12 h-12 rounded-full bg-stone-50 border border-stone-100 flex items-center justify-center mb-6 text-emerald-900 group-hover:text-gold group-hover:scale-110 transition-all duration-300">
                <a.Icon size={20} />
              </div>
              <h4 className="text-base font-medium text-stone-900 mb-2">{a.title}</h4>
              <p className="text-xs text-stone-500 leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
