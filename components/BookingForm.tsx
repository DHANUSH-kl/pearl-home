// components/BookingForm.tsx
import React from "react";

export default function BookingForm() {
  return (
    <div className="bg-white p-8 md:p-10 rounded-3xl text-stone-900 shadow-2xl shadow-black/20">
      <h3 className="text-xl font-medium mb-6">Complete Your Details</h3>
      <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase text-stone-500 tracking-wider">Full Name</label>
            <input type="text" placeholder="John Doe" className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-900/20 focus:border-emerald-900 transition-all text-stone-800 placeholder:text-stone-400" />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase text-stone-500 tracking-wider">Coming From</label>
            <input type="text" placeholder="e.g. Bangalore" className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-900/20 focus:border-emerald-900 transition-all text-stone-800 placeholder:text-stone-400" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5">
          <div className="space-y-2"><label className="text-xs font-semibold uppercase text-stone-500 tracking-wider">Check In</label><input type="date" className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-900/20 focus:border-emerald-900 transition-all text-stone-600" /></div>
          <div className="space-y-2"><label className="text-xs font-semibold uppercase text-stone-500 tracking-wider">Check Out</label><input type="date" className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-900/20 focus:border-emerald-900 transition-all text-stone-600" /></div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase text-stone-500 tracking-wider">Number of Guests</label>
          <div className="flex items-center gap-4 bg-stone-50 border border-stone-200 rounded-lg p-3">
            <input type="range" min={1} max={10} defaultValue={2} className="w-full h-1 bg-stone-300 rounded-lg appearance-none cursor-pointer accent-emerald-900" onInput={(e) => { const el = e.currentTarget as HTMLInputElement; (el.nextElementSibling as HTMLElement).innerText = el.value + " Guests"; }} />
            <span className="text-sm font-bold text-emerald-900 whitespace-nowrap w-20 text-right">2 Guests</span>
          </div>
        </div>

        <button type="submit" className="w-full bg-emerald-900 text-white font-medium py-4 rounded-lg hover:bg-emerald-800 transition-all duration-300 shadow-lg shadow-emerald-900/20 flex justify-center items-center gap-2 group mt-2">Send Inquiry <svg className="hidden" /></button>

        <p className="text-center text-xs text-stone-400 mt-4">Prefer to talk? <a href="tel:7892433207" className="underline hover:text-emerald-900">Call us directly</a>.</p>
      </form>
    </div>
  );
}
