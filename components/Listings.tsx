// components/Listings.tsx
import React from "react";

export default function Listings() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "7892433207";
    const message = "Hello, I'm interested in booking Pearl Home. Could you please provide more details?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const listingLinks = {
    airbnb: "https://www.airbnb.com/",
    booking: "https://www.booking.com/",
    agoda: "https://www.agoda.com/",
    makemytrip: "https://www.makemytrip.com/hotels/hotel-details/?hotelId=202509121116268040&_uCurrency=INR&checkin=01102026&checkout=01112026&city=CTXMY&country=IN&lat=12.25858&lng=76.65626&locusId=CTXMY&locusType=city&rank=1&regionNearByExp=3&roomStayQualifier=2e0e&rsc=1e2e0e&searchText=Pearl+Home+Service+Apartment%2C+Mysore%2C+Karnataka&topHtlId=202509121116268040&mtkeys=undefined&isPropSearch=T",
  };

  return (
    <section id="listings" className="py-20 bg-stone-50">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif text-stone-900 mb-3 font-normal tracking-tight">
            Book Your Way
          </h2>
          <p className="text-stone-600 font-light text-base max-w-md mx-auto">
            Choose your preferred platform or save by booking direct.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Left Side - Platforms */}
          <div className="lg:w-1/2 space-y-6">
            <div className="space-y-4">
              {/* Airbnb */}
              <a 
                href={listingLinks.airbnb}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center p-6 bg-white rounded-xl border border-stone-100 hover:border-stone-200 hover:shadow-sm transition-all duration-300"
              >
                <div className="flex items-center space-x-6">
                  <div className="w-12 h-12 flex items-center justify-center">
                    <svg className="w-7 h-7 text-stone-800 group-hover:text-black transition-colors" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="text-base font-medium text-stone-900 group-hover:text-black transition-colors">
                      Airbnb
                    </div>
                    <div className="text-sm text-stone-500 mt-1">
                      Verified listing
                    </div>
                  </div>
                </div>
                <div className="text-stone-300 group-hover:text-stone-500 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </a>

              {/* Booking.com */}
              <a 
                href={listingLinks.booking}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center p-6 bg-white rounded-xl border border-stone-100 hover:border-stone-200 hover:shadow-sm transition-all duration-300"
              >
                <div className="flex items-center space-x-6">
                  <div className="w-12 h-12 flex items-center justify-center bg-[#003580] rounded-lg">
                    <span className="text-white font-bold text-lg">B</span>
                  </div>
                  <div className="flex-1">
                    <div className="text-base font-medium text-stone-900 group-hover:text-black transition-colors">
                      Booking.com
                    </div>
                    <div className="text-sm text-stone-500 mt-1">
                      Secure booking
                    </div>
                  </div>
                </div>
                <div className="text-stone-300 group-hover:text-stone-500 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </a>

              {/* Agoda */}
              <a 
                href={listingLinks.agoda}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center p-6 bg-white rounded-xl border border-stone-100 hover:border-stone-200 hover:shadow-sm transition-all duration-300"
              >
                <div className="flex items-center space-x-6">
                  <div className="w-12 h-12 flex items-center justify-center">
                    <svg className="w-8 h-8" viewBox="0 0 1024 1024" fill="none">
                      <path 
                        d="M512 0C229.23 0 0 229.23 0 512s229.23 512 512 512 512-229.23 512-512S794.77 0 512 0z"
                        fill="#333"
                        className="group-hover:opacity-90 transition-opacity"
                      />
                      <path 
                        d="M512 245.76c-147.46 0-267.52 120.06-267.52 267.52S364.54 780.8 512 780.8s267.52-120.06 267.52-267.52S659.46 245.76 512 245.76z"
                        fill="#e43d4e"
                        className="group-hover:opacity-90 transition-opacity"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="text-base font-medium text-stone-900 group-hover:text-black transition-colors">
                      Agoda
                    </div>
                    <div className="text-sm text-stone-500 mt-1">
                      Best price guarantee
                    </div>
                  </div>
                </div>
                <div className="text-stone-300 group-hover:text-stone-500 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </a>

              {/* MakeMyTrip */}
              <a 
                href={listingLinks.makemytrip}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center p-6 bg-white rounded-xl border border-stone-100 hover:border-stone-200 hover:shadow-sm transition-all duration-300"
              >
                <div className="flex items-center space-x-6">
                  <div className="w-12 h-12 flex items-center justify-center bg-red-600 rounded-lg">
                    <span className="text-white font-bold text-sm">MMT</span>
                  </div>
                  <div className="flex-1">
                    <div className="text-base font-medium text-stone-900 group-hover:text-black transition-colors">
                      MakeMyTrip
                    </div>
                    <div className="text-sm text-stone-500 mt-1">
                      Instant confirmation
                    </div>
                  </div>
                </div>
                <div className="text-stone-300 group-hover:text-stone-500 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </a>
            </div>

            {/* Trust Note */}
            <div className="pt-6 border-t border-stone-100">
              <p className="text-sm text-stone-500 text-center">
                Verified Listings • Secure Payments • Instant Confirmation
              </p>
            </div>
          </div>

          {/* Right Side - WhatsApp Direct Booking */}
          <div className="lg:w-1/2">
            <div className="bg-white rounded-xl border border-stone-100 p-8 h-full flex flex-col">
              <div className="flex-1">
                <div className="inline-flex items-center px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-medium rounded-full mb-6 border border-emerald-100">
                  Best Price Guarantee
                </div>
                
                <h3 className="text-2xl font-serif text-stone-900 mb-4">
                  Book Directly
                </h3>
                
                <p className="text-stone-600 text-base leading-relaxed mb-8">
                  Avoid platform fees and get personalized assistance by booking directly through WhatsApp. Our team will provide you with the best available rates and flexible options.
                </p>

                {/* Benefits */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <div className="mt-1 text-emerald-600">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-stone-900">Lowest Price</div>
                      <div className="text-xs text-stone-500">No commission fees</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="mt-1 text-emerald-600">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-stone-900">Flexible Options</div>
                      <div className="text-xs text-stone-500">Custom dates & requests</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="mt-1 text-emerald-600">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-stone-900">Direct Support</div>
                      <div className="text-xs text-stone-500">24/7 assistance</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp Button */}
              <button
                onClick={handleWhatsAppClick}
                className="group w-full bg-emerald-600 text-white rounded-lg py-4 px-6 flex items-center justify-center space-x-3 hover:bg-emerald-700 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center space-x-3">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.52 3.49C18.18 1.13 15.19 0 12 0 5.48 0 0 5.48 0 12c0 2.04.5 4.02 1.45 5.77L0 24l6.33-1.59c1.62.89 3.41 1.36 5.23 1.36 6.52 0 12-5.48 12-12 0-3.19-1.13-6.18-3.04-8.27zM12 21.33c-1.76 0-3.48-.48-4.97-1.39l-.36-.21-3.76.99 1-3.65-.24-.37c-.91-1.49-1.39-3.21-1.39-4.97 0-5.16 4.2-9.36 9.36-9.36 2.5 0 4.85.97 6.62 2.73 1.77 1.76 2.74 4.12 2.74 6.62.01 5.16-4.19 9.36-9.35 9.36z" />
                    <path d="M17.47 14.43c-.32-.16-1.88-.93-2.17-1.03-.29-.11-.5-.16-.71.16-.21.32-.81 1.03-.99 1.24-.18.21-.37.24-.69.08-1.21-.61-2.02-1.56-2.5-2.43-.48-.87-.48-1.61-.02-2.2.23-.29.51-.52.83-.69.32-.16.5-.16.71.16.21.32.81 1.03.99 1.24.18.21.37.24.69.08.32-.16 1.88-.93 2.17-1.03.29-.11.5-.16.71.16.21.32.81 1.03.99 1.24.18.21.18.45 0 .71-.18.26-.69 1.35-1.01 1.67-.32.32-.64.48-.96.64z" fill="#25D366" />
                  </svg>
                  <span className="text-base font-medium">Message on WhatsApp</span>
                </div>
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-col sm:flex-row justify-center gap-8 md:gap-12 mt-16 pt-12 border-t border-stone-200">
          <div className="text-center">
            <div className="text-2xl font-serif text-stone-900 mb-2">Superhost</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">Verified Status</div>
          </div>
          
          {/* <div className="text-center">
            <div className="text-2xl font-serif text-stone-900 mb-2">4.9/5</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">Guest Rating</div>
          </div> */}
          
          <div className="text-center">
            <div className="text-2xl font-serif text-stone-900 mb-2">Guest Favorite</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">2024 Choice</div>
          </div>
        </div>
      </div>
    </section>
  );
}