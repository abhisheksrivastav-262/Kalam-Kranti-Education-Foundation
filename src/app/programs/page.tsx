import type { Metadata } from "next";
import { PROGRAMS } from "@/lib/site";
import { SectionTitle } from "@/components/ui";
import { ProgramCard, FAQ } from "@/components/sections";

export const metadata: Metadata = {
  title: "Programs",
  description: "8 flagship education programs: free education, scholarships, digital learning, girls education, libraries, skills, rural schools & career guidance.",
};

export default function ProgramsPage() {
  return (
    <>
      <section className="bg-[#041a3f] pt-32 pb-16 relative overflow-hidden">
        <div className="absolute -top-20 right-0 h-72 w-72 rounded-full bg-[#D4AF37]/20 blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-4 text-center">
          <span className="rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/15 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#f5d76e]">Programs</span>
          <h1 className="font-display mt-5 text-4xl sm:text-5xl font-bold text-white">8 missions, one goal — <span className="gold-gradient-text">every child in school</span></h1>
          <p className="font-hindi mt-3 text-xl text-[#f5d76e]">हर बच्चे तक, हर गाँव तक</p>
        </div>
      </section>
      <section className="bg-[#f7f9ff] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionTitle eyebrow="Flagship Programs" title="Choose a cause close to your heart" desc="Sponsor a library, a girl's scholarship, or a full smart classroom — 100% transparent." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROGRAMS.map((p, i) => (
              <ProgramCard key={p.slug} p={p} idx={i} />
            ))}
          </div>
          <div className="mt-12 mx-auto max-w-3xl">
            <FAQ
              items={[
                { q: "How is my donation used?", a: "85% goes directly to programs (books, teachers, labs), 10% operations, 5% admin. Audited reports shared yearly. PAN AAMCK2270K." },
                { q: "Can I sponsor a specific child or village?", a: "Yes! Sponsor a student's full year (₹12,000), a library (₹51,000) or a smart classroom (₹2,50,000). You get photos & progress reports on WhatsApp." },
                { q: "Do you issue 80G receipts?", a: "Yes, 80G tax receipts are issued for every donation. Share PAN + address on WhatsApp after donating." },
              ]}
            />
          </div>
        </div>
      </section>
    </>
  );
}
