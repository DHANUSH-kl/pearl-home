// components/BookingPrompt.tsx
import React, { useEffect, useState, useRef } from "react";
import { X } from "lucide-react";
import useLockBodyScroll from "../hooks/useLockBodyScroll";

/**
 * BookingPrompt - shows after delayMs on every page load (no session/local storage)
 * Props:
 *  - delayMs (ms) default 10000
 */
type Props = {
  delayMs?: number;
};

export default function BookingPrompt({ delayMs = 10000 }: Props) {
  const [open, setOpen] = useState(false);
  const timerRef = useRef<number | null>(null);

  useLockBodyScroll(open);

  useEffect(() => {
    // schedule popup
    timerRef.current = window.setTimeout(() => {
      setOpen(true);
    }, delayMs);

    return () => {
      if (timerRef.current) {
        window.clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [delayMs]);

  function onBookNow() {
    const el = document.getElementById("book");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setOpen(false);
  }

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-60 flex items-center justify-center p-6"
      onClick={() => setOpen(false)}
    >
      {/* backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      {/* modal */}
      <div
        className="relative z-10 w-full max-w-md rounded-2xl shadow-2xl p-6 text-center"
        style={{
          background: "linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.92) 100%)",
          border: "1px solid rgba(0,0,0,0.06)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setOpen(false)}
          aria-label="Close"
          className="absolute top-3 right-3 p-1 rounded-md text-stone-600 hover:text-stone-800"
          title="Close"
        >
          <X size={18} />
        </button>

        <h3 className="text-2xl font-serif text-emerald-900 mb-2">Book your stay at Pearl Home</h3>
        <p className="text-sm text-stone-600 mb-6">Looking for a peaceful Mysore escape? Reserve your dates now — limited slots available.</p>

        <div className="flex gap-3 justify-center">
          <button
            onClick={onBookNow}
            className="px-6 py-3 bg-emerald-900 text-white rounded-md font-medium hover:bg-emerald-800 transition"
          >
            Book Now
          </button>

          <button
            onClick={() => setOpen(false)}
            className="px-4 py-3 bg-white border border-stone-200 rounded-md text-sm text-stone-700 hover:bg-stone-50 transition"
          >
            Maybe later
          </button>
        </div>
      </div>
    </div>
  );
}
