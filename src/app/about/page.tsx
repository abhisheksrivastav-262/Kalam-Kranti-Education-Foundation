import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE, IMAGES } from "@/lib/site";
import { SectionTitle } from "@/components/ui";
import { Reveal } from "@/components/animated";

export const metadata: Metadata = {
  title: "About Us",
  description: `Story, mission, vision and director ${SITE.director} — ${SITE.name}, Kaimur Bihar. शिक्षा के लिए एक साझा प्रयास.`,
};

const TIMELINE = [
  { y: "2023", t: "The Spark", d: "Er. Akshay Lal Yadav starts free weekend tuitions for 30 children in Nuaon with 2 volunteers." },
  { y: "2024", t: "First Pathshala", d: "Evening pathshala crosses 300 students. First library of 1000 books opens." },
  { y: "2025", t: "Foundation Registered", d: `Registered as Section 8 company — ${SITE.corporateNo}. 14 smart centres launched.` },
  { y: "2026", t: "120 Villages", d: "12,500 students, 850 volunteers, 22 libraries, 320 scholarships. Mission continues." },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#041a3f] pt-32 pb-20">
        <div className="absolute inset-0">
          <Image src={IMAGES.aboutClass} alt="About" fill className="object-cover opacity-30" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#041a3f]/70 to-[#041a3f]" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 text-center">
          <span className="rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/15 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#f5d76e]">About Us</span>
          <h1 className="font-display mt-5 text-4xl sm:text-5xl font-bold text-white">Who We Are</h1>
          <p className="font-hindi mt-3 text-2xl text-[#f5d76e]">“{SITE.tagline}”</p>
          <p className="mt-4 text-blue-100/80 max-w-2xl mx-auto">A registered non-profit education foundation from Kaimur, Bihar — building classrooms, libraries and futures.</p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-10 items-center">
          <Reveal>
            <SectionTitle align="left" eyebrow="Our Story" title={<>Born in a village, built for <span className="royal-gradient-text">every village</span></>} />
            <div className="space-y-4 text-slate-600 leading-relaxed -mt-6">
              <p><b className="text-[#041a3f]">{SITE.name}</b> began when {SITE.director}, an engineer from Mahartha Nuaon, saw bright children dropping out for ₹200 exam fees and missing books.</p>
              <p>What started as weekend tuition is today a movement: free pathshalas, smart classrooms, girls’ hostels support, scholarships, libraries and skill centres — powered by 850+ volunteers.</p>
              <p>Named after Dr. A.P.J. Abdul Kalam, <i>Kranti</i> means revolution — a quiet revolution of books, not guns.</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-64 overflow-hidden rounded-3xl premium-shadow"><Image src={IMAGES.classroomKids} alt="Kids" fill className="object-cover" sizes="40vw" /></div>
              <div className="relative h-64 overflow-hidden rounded-3xl premium-shadow mt-8"><Image src={IMAGES.girlStudy} alt="Girl study" fill className="object-cover" sizes="40vw" /></div>
              <div className="relative h-56 overflow-hidden rounded-3xl premium-shadow -mt-4"><Image src={IMAGES.library} alt="Library" fill className="object-cover" sizes="40vw" /></div>
              <div className="relative h-56 overflow-hidden rounded-3xl premium-shadow mt-4"><Image src={IMAGES.digitalLearn} alt="Digital" fill className="object-cover" sizes="40vw" /></div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#f7f9ff] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionTitle eyebrow="Purpose" title="Mission • Vision • Values" />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { e: "🎯", t: "Mission", d: "Free, quality, digital-ready education to every rural child in Bihar by 2030 — zero dropouts in our blocks." },
              { e: "🔭", t: "Vision", d: "A Bihar where a farmer’s daughter becomes a doctor, engineer or teacher — talent decides, not income." },
              { e: "💛", t: "Values", d: "Seva • Imandari • Barabari. Transparent funds, girl-first policies, and community ownership of every centre." },
            ].map((c, i) => (
              <Reveal key={c.t} delay={i * 0.1}>
                <div className="rounded-3xl bg-white p-8 premium-shadow card-hover text-center">
                  <span className="text-5xl">{c.e}</span>
                  <h3 className="font-display mt-3 text-xl font-bold text-[#041a3f]">{c.t}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{c.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <SectionTitle eyebrow="Why it matters" title="Why education matters in Kaimur" desc="Kaimur has talent but lacks access — distant schools, teacher shortages, migration. We fill the gap." />
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              ["📉 Dropout crisis", "1 in 3 rural children drops out after Class 8. Our bridge courses bring them back."],
              ["👧 Girls left behind", "Early marriage & distance stop girls. Safe centres + scholarships keep them in school."],
              ["💻 Digital divide", "Less than 12% rural homes have a computer. Our labs give first digital touch."],
              ["💼 No guidance", "First-generation learners lack mentors. Engineers & teachers guide careers free."],
            ].map(([t, d]) => (
              <div key={t} className="rounded-2xl bg-[#eef4ff] p-5"><p className="font-bold text-[#041a3f]">{t}</p><p className="mt-1 text-sm text-slate-600">{d}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#041a3f] py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <SectionTitle dark eyebrow="Journey" title="Foundation timeline" hindi="सफ़र जारी है..." />
          <div className="relative mt-4 space-y-6 before:absolute before:left-[19px] before:top-2 before:bottom-2 before:w-0.5 before:bg-[#D4AF37]/40">
            {TIMELINE.map((t, i) => (
              <Reveal key={t.y} delay={i * 0.05}>
                <div className="relative flex gap-5">
                  <span className="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#D4AF37] text-xs font-bold text-[#041a3f]">{t.y.slice(2)}</span>
                  <div className="glass-dark rounded-2xl p-5 flex-1">
                    <p className="text-xs font-bold text-[#f5d76e] tracking-widest">{t.y} • {t.t}</p>
                    <p className="mt-1 text-sm text-blue-100/90">{t.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 rounded-3xl glass-dark p-8 text-center">
            <p className="font-display text-xl text-white font-bold">{SITE.director} — Founder & Director</p>
            <p className="mt-2 text-sm text-blue-100/80 max-w-2xl mx-auto">“My degree is meaningful only if a village child can dream bigger because of it. Join us — teach an hour, donate a book, sponsor a year.”</p>
            <div className="mt-5 flex justify-center gap-3 flex-wrap">
              <Link href="/volunteer" className="rounded-full bg-[#D4AF37] px-6 py-3 text-sm font-bold text-[#041a3f]">Volunteer</Link>
              <Link href="/donate" className="rounded-full border border-white/30 px-6 py-3 text-sm font-bold text-white">Donate</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
