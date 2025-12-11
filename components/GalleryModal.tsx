// components/GalleryModal.tsx
import Image from "next/image";
import React, { useEffect } from "react";
import useLockBodyScroll from "../hooks/useLockBodyScroll";
import { GALLERY_IMAGES } from "../lib/images";

type Props = {
  open: boolean;
  initialIndex?: number;
  mode?: "masonry" | "slider";
  onClose: () => void;
  onChangeIndex?: (index: number) => void;
};

export default function GalleryModal({ open, initialIndex = 0, mode = "masonry", onClose, onChangeIndex }: Props) {
  const [viewMode, setViewMode] = React.useState<"masonry" | "slider">(mode);
  const [currentIndex, setCurrentIndex] = React.useState<number>(initialIndex);

  useEffect(() => {
    setViewMode(mode);
    setCurrentIndex(initialIndex);
  }, [mode, initialIndex, open]);

  useEffect(() => {
    onChangeIndex?.(currentIndex);
  }, [currentIndex, onChangeIndex]);

  useLockBodyScroll(open);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (!open) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") setCurrentIndex(i => (i - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
      if (e.key === "ArrowRight") setCurrentIndex(i => (i + 1) % GALLERY_IMAGES.length);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  function prev() {
    setCurrentIndex(i => (i - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
    setViewMode("slider");
  }
  function next() {
    setCurrentIndex(i => (i + 1) % GALLERY_IMAGES.length);
    setViewMode("slider");
  }

  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/70 p-6" onClick={onClose}>
      <div className="relative w-full max-w-6xl h-[80vh] bg-transparent" onClick={(e) => e.stopPropagation()}>
        <div className="absolute top-4 right-4 z-50">
          <button onClick={onClose} className="bg-white/10 backdrop-blur rounded-full p-2">✕</button>
        </div>

        <div className="absolute top-4 left-4 z-50 flex gap-2">
          <button onClick={() => setViewMode("masonry")} className={`px-3 py-1 rounded-md text-sm ${viewMode === "masonry" ? "bg-white/90 text-emerald-900" : "bg-white/10 text-white"}`}>Masonry</button>
          <button onClick={() => setViewMode("slider")} className={`px-3 py-1 rounded-md text-sm ${viewMode === "slider" ? "bg-white/90 text-emerald-900" : "bg-white/10 text-white"}`}>Slider</button>
        </div>

        {viewMode === "masonry" && (
          <div className="absolute inset-0 overflow-auto p-4">
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
              {GALLERY_IMAGES.map((img, i) => (
                <div key={img.src} className="mb-4 break-inside-avoid cursor-pointer rounded-lg overflow-hidden shadow-lg" onClick={() => { setCurrentIndex(i); setViewMode("slider"); }}>
                  <Image src={img.src} alt={img.label ?? `g-${i}`} width={1200} height={900} className="w-full h-auto object-cover block" />
                </div>
              ))}
            </div>
          </div>
        )}

        {viewMode === "slider" && (
          <div className="absolute inset-0 flex items-center justify-center">
            <button onClick={prev} className="absolute left-4 md:left-8 bg-white/10 backdrop-blur p-3 rounded-full">‹</button>
            <div className="w-full h-full max-h-[85vh] flex items-center justify-center">
              <div className="relative w-full max-w-4xl h-[70vh] md:h-[75vh] rounded-lg overflow-hidden shadow-2xl">
                <Image src={GALLERY_IMAGES[currentIndex].src} alt={`current-${currentIndex}`} fill className="object-contain bg-black/80" />
              </div>
            </div>
            <button onClick={next} className="absolute right-4 md:right-8 bg-white/10 backdrop-blur p-3 rounded-full">›</button>

            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-50">
              {GALLERY_IMAGES.map((_, i) => (
                <button key={i} onClick={() => setCurrentIndex(i)} className={`w-2 h-2 rounded-full ${i === currentIndex ? "bg-white" : "bg-white/40"}`} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
