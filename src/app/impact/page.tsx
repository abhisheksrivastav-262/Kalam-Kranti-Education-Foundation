import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { REAL_PHOTOS } from "@/lib/site";
import { SectionTitle } from "@/components/ui";
import { Reveal } from "@/components/animated";
import { ImpactStats, TestimonialSlider } from "@/components/sections";

export const metadata: Metadata = {
  title: "Impact",
  description: "12,500+ students, 120 villages, 96% pass rate — success stories, before/after impact & testimonials of Kalam Kranti Education Foundation.",
};

const STORIES = [
  { img: REAL_PHOTOS[1], name: "Certificate Samman — Nuaon", tag: "Samman", d: "Har saal sekdon bachchon ko manch se certificate aur medal — padhai ki jeet ka jashn, poore gaon ke saamne." },
  { img: REAL_PHOTOS[8], name: "Gaon Chaupal — Night Meeting", tag: "Rural", d: "Raat me gaon-chaupal: parents aur bachchon ke saath shiksha par charcha — yahi hai asli grassroots kaam." },
  { img: REAL_PHOTOS[10], name: "NCC Cadets Samman", tag: "Youth", d: "Anushasan aur netritva: NCC cadets ka samman samaroh — hamare yuva hi kal ka Bihar banayenge." },
];

export default function ImpactPage() {
  return (
    <>
      <section className="bg-[#041a3f] pt-32 pb-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 animated-gradient opacity-20" />
        <div className="relative mx-auto max-w-3xl px-4">
          <span className="rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/15 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#f5d76e]">Impact Report 2025</span>
          <h1 className="font-display mt-5 text-4xl sm:text-5xl font-bold text-white">Proof, not <span className="gold-gradient-text">promises</span></h1>
          <p className="mt-4 text-blue-100/80">Audited numbers, real names, real villages. Transparency is our religion.</p>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <ImpactStats />
          <div className="mt-12 grid lg:grid-cols-2 gap-8 items-center rounded-3xl bg-[#041a3f] p-8 sm:p-12 overflow-hidden relative">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#D4AF37]/20 blur-3xl" />
            <Reveal>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">Before Kalam Kranti → After</h2>
              <div className="mt-6 space-y-4">
                {[
                  ["Dropout after Class 8", "41%", "6%"],
                  ["Girls in Class 11–12", "22%", "78%"],
                  ["Board pass rate", "54%", "96%"],
                  ["Digital literacy", "8%", "71%"],
                ].map(([l, b, a]) => (
                  <div key={l} className="glass-dark rounded-2xl p-4">
                    <p className="text-xs font-bold uppercase tracking-widest text-blue-200">{l}</p>
                    <div className="mt-2 flex items-center gap-3 text-sm font-bold">
                      <span className="rounded-full bg-red-500/20 px-3 py-1 text-red-200 line-through">{b}</span>
                      <span className="text-white">→</span>
                      <span className="rounded-full bg-green-500/25 px-3 py-1 text-green-200">{a} ✓</span>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="overflow-hidden rounded-3xl bg-white premium-shadow">
                <Image src={REAL_PHOTOS[3].src} alt="Children holding Kalam Kranti certificates and medals — real photo" width={REAL_PHOTOS[3].w} height={REAL_PHOTOS[3].h} className="h-auto w-full" sizes="(max-width:1024px) 100vw, 50vw" />
                <div className="flex flex-wrap gap-2.5 p-4">
                  <span className="rounded-full bg-[#041a3f] px-4 py-2 text-xs font-bold text-white">Before: 41% dropout</span>
                  <span className="rounded-full bg-[#D4AF37] px-4 py-2 text-xs font-bold text-[#041a3f]">After: 96% pass ✓</span>
                  <span className="rounded-full bg-green-100 px-4 py-2 text-xs font-bold text-green-800">📍 Real photo</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f9ff] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionTitle eyebrow="Success Stories" title="They dreamed, we walked with them" hindi="सपनों को पंख मिले" />
          <div className="grid md:grid-cols-3 gap-6">
            {STORIES.map((s, i) => (
              <Reveal key={s.name} delay={i * 0.08}>
                <div className="card-hover overflow-hidden rounded-3xl bg-white premium-shadow">
                  <Image src={s.img.src} alt={s.name} width={s.img.w} height={s.img.h} sizes="(max-width:768px) 100vw, 33vw" loading="lazy" className="h-auto w-full" />
                  <div className="p-6">
                    <span className="rounded-full bg-[#D4AF37]/15 px-3 py-1 text-[11px] font-bold text-[#a8841c] uppercase">{s.tag}</span>
                    <h3 className="font-display mt-2 font-bold text-[#041a3f]">{s.name}</h3>
                    <p className="mt-2 text-sm text-slate-600">{s.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionTitle eyebrow="Testimonials" title="In their own words" />
          <TestimonialSlider />
          <div className="mt-10 text-center flex justify-center gap-4 flex-wrap">
            <Link href="/donate" className="rounded-full bg-gradient-to-r from-[#D4AF37] to-[#f5d76e] px-8 py-3.5 font-bold text-[#041a3f]">Fuel More Stories ❤</Link>
            <Link href="/volunteer" className="rounded-full bg-[#041a3f] px-8 py-3.5 font-bold text-white">Join as Volunteer</Link>
          </div>
        </div>
      </section>
    </>
  );
}
