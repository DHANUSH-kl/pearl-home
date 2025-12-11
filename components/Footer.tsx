// components/Footer.tsx
import React from "react";

export default function Footer() {
  return (
    <div className="max-w-screen-2xl mx-auto px-6 mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-stone-400">
      <p>© 2024 Pearl Home Mysore. All rights reserved.</p>
      <div className="flex gap-6 mt-4 md:mt-0">
        <a href="#" className="hover:text-white transition-colors">Privacy</a>
        <a href="#" className="hover:text-white transition-colors">Terms</a>
        <a href="#" className="hover:text-white transition-colors">Instagram</a>
      </div>
    </div>
  );
}
