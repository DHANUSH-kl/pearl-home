// pages/index.tsx
import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Experience from "../components/Experience";
import GallerySection from "../components/GallerySection";
import GalleryModal from "../components/GalleryModal";
import Amenities from "../components/Amenities";
import Location from "../components/Location";
import BookingForm from "../components/BookingForm";
import BookingPrompt from "../components/BookingPrompt";

// import Footer from "../components/Footer";
import { GALLERY_IMAGES } from "../lib/images";

const Home: NextPage = () => {
  const [galleryOpen, setGalleryOpen] = React.useState(false);
  const [galleryMode, setGalleryMode] = React.useState<"masonry" | "slider">("masonry");
  const [galleryIndex, setGalleryIndex] = React.useState(0);

  function openGallery(index = 0, mode: "masonry" | "slider" = "masonry") {
    setGalleryIndex(index);
    setGalleryMode(mode);
    setGalleryOpen(true);
  }

  return (
    <>
      <Head>
        <meta name="description" content="Pearl Home — Luxury Homestay Mysore" />
      </Head>

      <Nav />

      <main>
        <Hero onViewGallery={() => openGallery(0, "masonry")} />
        <Experience />
        <GallerySection onOpenGallery={(i, m) => openGallery(i, m)} />
        <Amenities />
        <Location />

        <section id="book" className="relative py-24 bg-emerald-950 text-stone-100 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-gold rounded-full blur-[100px]" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-700 rounded-full blur-[100px]" />
          </div>

          <div className="relative max-w-screen-xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="flex flex-col justify-center">
              <h2 className="text-4xl md:text-5xl font-serif text-white mb-6 tracking-tight">
                Ready for your <br />
                <span className="text-gold italic">staycation?</span>
              </h2>
              <p className="text-stone-300 mb-10 text-lg font-light max-w-md">Experience the finest hospitality in Mysore. Book your dates at Pearl Home today.</p>

              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/5 rounded-lg border border-white/10 text-gold">
                    {/* Phone icon rendered inside component */}
                    <svg className="hidden" />
                  </div>
                  <div>
                    <p className="text-xs text-stone-400 uppercase tracking-widest mb-1">Call for Booking</p>
                    <a href="tel:7892433207" className="text-xl md:text-2xl text-white hover:text-gold transition-colors font-medium">+91 99001 95100</a>
                    <p className="text-sm text-stone-400 mt-1">Host: Chethak</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/5 rounded-lg border border-white/10 text-gold">
                    {/* Mail icon placeholder */}
                    <svg className="hidden" />
                  </div>
                  <div>
                    <p className="text-xs text-stone-400 uppercase tracking-widest mb-1">Email Inquiries</p>
                    <a href="mailto:chethakbkbilva@gmail.com" className="text-lg md:text-xl text-white hover:text-gold transition-colors font-medium">pearlhomee22@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>

            <BookingForm />
          </div>

          {/* <div className="max-w-screen-2xl mx-auto px-6 mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-stone-400">
            <p>© 2024 Pearl Home Mysore. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
            </div>
          </div> */}
        </section>

        
      </main>

      <GalleryModal
        open={galleryOpen}
        initialIndex={galleryIndex}
        mode={galleryMode}
        onClose={() => setGalleryOpen(false)}
        onChangeIndex={(i) => setGalleryIndex(i)}
      />
      <BookingPrompt delayMs={10000} />
    </>
  );
};

export default Home;
