// components/Nav.tsx
import React, { useState, useRef, useEffect } from "react";
import { Menu, X } from "lucide-react";
import useLockBodyScroll from "../hooks/useLockBodyScroll";

const Nav: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const btnRef = useRef<HTMLButtonElement | null>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // lock scroll when menu open
  useLockBodyScroll(open);

  // close when clicking outside mobile menu
  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (!open) return;
      if (!menuRef.current) return;
      if (menuRef.current.contains(e.target as Node)) return;
      if (btnRef.current?.contains(e.target as Node)) return;
      setOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open]);

  // close on escape
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const navItems = [
    { label: "The Experience", href: "#experience" },
    { label: "Gallery", href: "#gallery" },
    { label: "Amenities", href: "#amenities" },
    { label: "Location", href: "#location" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg py-3 border-b border-gray-100"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-screen-2xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <a
            href="#"
            className={`text-lg tracking-[0.2em] font-bold uppercase transition-colors duration-300 relative z-10 ${
              scrolled ? "text-emerald-900" : "text-white"
            }`}
          >
            Pearl Home
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium tracking-wide transition-colors duration-300 hover:text-emerald-700 ${
                    scrolled ? "text-gray-700" : "text-white/90"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
            <div className="h-6 w-px bg-gray-300" />
            <a
              href="#book"
              className="px-6 py-2.5 bg-emerald-800 text-white font-medium hover:bg-emerald-700 transition-all duration-300 rounded-full shadow-lg hover:shadow-xl"
            >
              Book Stay
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            ref={btnRef}
            onClick={() => setOpen((s) => !s)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className={`md:hidden p-3 rounded-full transition-all duration-300 relative z-50 ${
              scrolled
                ? "bg-gray-100 text-gray-700 hover:bg-gray-200"
                : "bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm"
            }`}
            type="button"
          >
            <div className="relative w-6 h-6 flex items-center justify-center">
              <span
                className={`absolute w-5 h-0.5 transition-all duration-300 ${
                  open
                    ? "rotate-45 bg-emerald-700"
                    : scrolled
                    ? "bg-gray-700 -translate-y-1.5"
                    : "bg-white -translate-y-1.5"
                }`}
              />
              <span
                className={`absolute w-5 h-0.5 transition-all duration-300 ${
                  open ? "opacity-0" : scrolled ? "bg-gray-700" : "bg-white"
                }`}
              />
              <span
                className={`absolute w-5 h-0.5 transition-all duration-300 ${
                  open
                    ? "-rotate-45 bg-emerald-700"
                    : scrolled
                    ? "bg-gray-700 translate-y-1.5"
                    : "bg-white translate-y-1.5"
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        id="mobile-menu"
        ref={menuRef}
        aria-hidden={!open}
        className={`fixed inset-0 z-[60] transition-all duration-500 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 transition-all duration-500 ${open ? "bg-black/50 backdrop-blur-sm" : "bg-transparent"}`}
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />

        {/* Menu Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-full max-w-sm bg-white transform transition-transform duration-500 ease-out shadow-2xl ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="h-full flex flex-col overflow-y-auto">
            {/* Header */}
            <div className="px-6 py-8 flex items-center justify-end border-b border-gray-100">
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors group"
              >
                <X size={22} className="text-gray-600 group-hover:text-gray-800 transition-colors" />
              </button>
            </div>

            {/* Mobile Content */}
            <div className="flex-1 px-6 py-10">
              <div className="mb-12 px-4">
                <div className="text-2xl tracking-[0.2em] font-bold text-emerald-900 uppercase mb-2">Pearl Home</div>
              </div>

              <nav className="mb-12">
                <div className="space-y-2">
                  {navItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block py-5 px-6 text-lg font-medium text-gray-800 hover:text-emerald-700 hover:bg-emerald-50 rounded-2xl transition-all duration-300 group"
                    >
                      <div className="flex items-center justify-between">
                        <span>{item.label}</span>
                        <span className="text-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                      </div>
                    </a>
                  ))}
                </div>
              </nav>

              <div className="px-4">
                <a
                  href="#book"
                  onClick={() => setOpen(false)}
                  className="block w-full text-center px-6 py-5 bg-gradient-to-r from-emerald-700 to-emerald-600 text-white font-medium rounded-2xl shadow-xl hover:shadow-2xl hover:from-emerald-600 hover:to-emerald-500 transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <div className="text-lg font-semibold">Book Your Stay</div>
                  <div className="text-sm font-normal opacity-90 mt-1">Available Now</div>
                </a>

                <div className="flex items-center justify-center mt-6 space-x-6">
                  <a href="#contact" className="text-gray-600 hover:text-emerald-700 text-sm font-medium transition-colors" onClick={() => setOpen(false)}>Contact Us</a>
                  <div className="h-4 w-px bg-gray-300" />
                  <a href="#faq" className="text-gray-600 hover:text-emerald-700 text-sm font-medium transition-colors" onClick={() => setOpen(false)}>FAQ</a>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-6 border-t border-gray-100 bg-gray-50/50">
              <div className="text-center text-gray-500 text-sm">
                <p className="font-medium text-gray-700 mb-1">Need Assistance?</p>
                <a
                  href="tel:+11234567890"
                  className="text-emerald-700 hover:text-emerald-600 transition-colors font-medium"
                  onClick={() => setOpen(false)}
                >
                  +1 (123) 456-7890
                </a>
                <p className="mt-2 text-xs">© {new Date().getFullYear()} Pearl Home</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
