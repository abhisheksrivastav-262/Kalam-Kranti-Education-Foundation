import type { Metadata } from "next";
import { SectionTitle } from "@/components/ui";
import { GalleryGrid, RealGallery } from "@/components/sections";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Real photos: certificate ceremonies, book distribution, village meetings & team of Kalam Kranti Education Foundation, Kaimur Bihar.",
};

export default function GalleryPage() {
  return (
    <>
      <section className="bg-[#041a3f] pt-32 pb-16 text-center">
        <div className="mx-auto max-w-3xl px-4">
          <span className="rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/15 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#f5d76e]">Gallery</span>
          <h1 className="font-display mt-5 text-4xl sm:text-5xl font-bold text-white">Moments of <span className="gold-gradient-text">change</span></h1>
          <p className="font-hindi mt-3 text-xl text-[#f5d76e]">बदलाव की झलकियाँ — kisi photo ko tap karke poori dekho, koi photo kati nahi</p>
        </div>
      </section>
      <section className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionTitle eyebrow="📍 100% Real Photos" title="Hamare Gaon, Hamare Bachche" hindi="ये स्टॉक फोटो नहीं — फाउंडेशन के असली कार्यक्रमों की तस्वीरें" />
          <RealGallery />
        </div>
      </section>
      <section className="bg-[#f7f9ff] py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionTitle eyebrow="Theme Gallery" title="Classrooms • Libraries • Smiles" desc="Illustrative photos of our work themes." />
          <GalleryGrid />
        </div>
      </section>
    </>
  );
}
