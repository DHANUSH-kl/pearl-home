// components/BookingForm.tsx
import React from "react";

export default function BookingForm() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "7892433207";
    const message = "Hello, I'm interested in booking Pearl Home. Could you please provide more details about availability and pricing?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="bg-white p-8 md:p-10 rounded-3xl text-stone-900 shadow-2xl shadow-black/20 border border-stone-100">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-50 text-emerald-700 text-xs font-semibold uppercase tracking-wider rounded-full mb-6 border border-emerald-100">
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          Best Price Guarantee
        </div>
        
        <h3 className="text-2xl font-serif text-stone-900 mb-3">
          Book Directly & Save
        </h3>
        
        <p className="text-stone-600 text-base leading-relaxed">
          Avoid platform fees and get personalized assistance by booking directly.
        </p>
      </div>

      {/* Benefits */}
      <div className="space-y-5 mb-8">
        <div className="flex items-start gap-4 p-4 bg-stone-50 rounded-xl border border-stone-100">
          <div className="flex-shrink-0 mt-0.5">
            <div className="w-8 h-8 flex items-center justify-center bg-emerald-100 text-emerald-600 rounded-lg">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-medium text-stone-900 mb-1">Lowest Price</h4>
            <p className="text-xs text-stone-500">No commission or platform fees applied</p>
          </div>
        </div>

        <div className="flex items-start gap-4 p-4 bg-stone-50 rounded-xl border border-stone-100">
          <div className="flex-shrink-0 mt-0.5">
            <div className="w-8 h-8 flex items-center justify-center bg-emerald-100 text-emerald-600 rounded-lg">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-medium text-stone-900 mb-1">Flexible Dates</h4>
            <p className="text-xs text-stone-500">Custom check-in/out times available</p>
          </div>
        </div>

        <div className="flex items-start gap-4 p-4 bg-stone-50 rounded-xl border border-stone-100">
          <div className="flex-shrink-0 mt-0.5">
            <div className="w-8 h-8 flex items-center justify-center bg-emerald-100 text-emerald-600 rounded-lg">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-medium text-stone-900 mb-1">Direct Support</h4>
            <p className="text-xs text-stone-500">24/7 assistance from our team</p>
          </div>
        </div>
      </div>

      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        className="group w-full bg-emerald-900 text-white font-medium py-4 px-6 rounded-xl hover:bg-emerald-800 transition-all duration-300 shadow-lg shadow-emerald-900/20 flex items-center justify-center gap-3 cursor-pointer mb-4"
      >
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 flex items-center justify-center bg-white/20 rounded-lg">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.52 3.49C18.18 1.13 15.19 0 12 0 5.48 0 0 5.48 0 12c0 2.04.5 4.02 1.45 5.77L0 24l6.33-1.59c1.62.89 3.41 1.36 5.23 1.36 6.52 0 12-5.48 12-12 0-3.19-1.13-6.18-3.04-8.27zM12 21.33c-1.76 0-3.48-.48-4.97-1.39l-.36-.21-3.76.99 1-3.65-.24-.37c-.91-1.49-1.39-3.21-1.39-4.97 0-5.16 4.2-9.36 9.36-9.36 2.5 0 4.85.97 6.62 2.73 1.77 1.76 2.74 4.12 2.74 6.62.01 5.16-4.19 9.36-9.35 9.36z" />
              <path d="M17.47 14.43c-.32-.16-1.88-.93-2.17-1.03-.29-.11-.5-.16-.71.16-.21.32-.81 1.03-.99 1.24-.18.21-.37.24-.69.08-1.21-.61-2.02-1.56-2.5-2.43-.48-.87-.48-1.61-.02-2.2.23-.29.51-.52.83-.69.32-.16.5-.16.71.16.21.32.81 1.03.99 1.24.18.21.37.24.69.08.32-.16 1.88-.93 2.17-1.03.29-.11.5-.16.71.16.21.32.81 1.03.99 1.24.18.21.18.45 0 .71-.18.26-.69 1.35-1.01 1.67-.32.32-.64.48-.96.64z" fill="#25D366" />
            </svg>
          </div>
          <span className="text-base font-medium">Message on WhatsApp</span>
        </div>
        <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </button>

      <p className="text-center text-xs text-stone-400 mt-4">
        Response within minutes • Secure communication
      </p>
      
      <div className="mt-6 pt-6 border-t border-stone-100">
        <p className="text-xs text-stone-500 text-center">
          Prefer to talk? <a href="tel:7892433207" className="text-emerald-700 hover:text-emerald-800 font-medium">Call us directly</a>
        </p>
      </div>
    </div>
  );
}