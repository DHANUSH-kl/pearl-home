// lib/images.ts
export type GalleryImage = {
  src: string;
  label?: string;
};

export const GALLERY_IMAGES: GalleryImage[] = [
  { src: "/images/interior-1.jpg", label: "Interior" },
  { src: "/images/bedroom-1.jpg", label: "Bedroom" },
  { src: "/images/kitchen-1.jpg", label: "Kitchen" },
  { src: "/images/balcony-1.jpg", label: "Balcony" },
  { src: "/images/details-1.jpg", label: "Details" },
  { src: "/images/gallery-1.jpg", label: "Corner" },
  { src: "/images/gallery-2.jpg", label: "Living" },
  { src: "/images/gallery-3.jpg", label: "Dining" }
];
