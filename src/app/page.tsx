"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { SITE, STATS, IMAGES, PROGRAMS, REAL_PHOTOS } from "@/lib/site";
import { SectionTitle } from "@/components/ui";
import { AnimatedCounter, Reveal } from "@/components/animated";
import { Particles } from "@/components/chrome";
import { TestimonialSlider, GalleryGrid, ProgramCard, ImpactStats, Newsletter, RealStrip } from "@/components/sections";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-[#041a3f]">
        <div className="absolute inset-0">
          <Image src={IMAGES.heroMain} alt="Children learning" fill priority className="object-cover opacity-50" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#041a3f]/80 via-[#0A3D91]/60 to-[#041a3f]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#041a3f]/80 to-transparent" />
        </div>
        <Particles />
        <div className="absolute -left-24 top-1/3 h-96 w-96 rounded-full bg-[#D4AF37]/20 blur-3xl animate-blob" />
        <div className="absolute -right-16 bottom-10 h-80 w-80 rounded-full bg-blue-500/30 blur-3xl animate-float" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 pt-24 sm:pt-28 pb-14 sm:pb-16 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
          <div className="text-center sm:text-left">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex max-w-full items-center gap-2 rounded-full glass-dark px-3.5 py-2 text-[10px] sm:text-xs font-bold uppercase tracking-[0.14em] sm:tracking-[0.2em] text-[#f5d76e]">
              ✨ Registered NGO • <span className="truncate">{SITE.corporateNo}</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.8 }}
              className="font-display mt-5 text-[2rem] leading-[1.12] sm:text-5xl lg:text-6xl font-bold text-white sm:leading-[1.08]"
            >
              Empowering Every Child Through{" "}
              <span className="gold-gradient-text">Education</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-hindi mt-3 text-xl sm:text-3xl text-[#f5d76e]"
            >
              “{SITE.tagline}”
            </motion.p>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }} className="mt-3 sm:mt-4 max-w-xl mx-auto sm:mx-0 text-[15px] sm:text-base text-blue-100/85 leading-relaxed">
              From village pathshalas to smart classrooms — free books, scholarships, digital labs and girls’ education across 120+ villages of Kaimur, Bihar.
            </motion.p>
            {/* Mobile hero image — visible only on phones */}
            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 }} className="lg:hidden mt-6">
              <div className="glass rounded-3xl p-2 premium-shadow">
                <div className="relative overflow-hidden rounded-2xl">
                  <Image src={REAL_PHOTOS[1].src} alt="Kalam Kranti certificate ceremony — real photo" width={REAL_PHOTOS[1].w} height={REAL_PHOTOS[1].h} className="h-auto w-full" sizes="100vw" priority={false} />
                  <div className="absolute bottom-3 left-3 right-3 glass rounded-xl px-3.5 py-2.5 text-left">
                    <p className="text-[13px] font-bold text-[#041a3f]">📍 Real: Certificate Samman, Nuaon</p>
                    <p className="text-[11px] text-slate-600">Kalam Kranti ki asli tasveer</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }} className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link href="/donate" className="rounded-full bg-gradient-to-r from-[#D4AF37] to-[#f5d76e] px-8 py-4 min-h-[54px] flex items-center justify-center font-bold text-[#041a3f] text-[15px] sm:text-base shadow-xl shadow-yellow-500/30 transition active:scale-95 hover:scale-105">
                Donate Now ❤
              </Link>
              <Link href="/volunteer" className="rounded-full border border-white/30 glass-dark px-8 py-4 min-h-[54px] flex items-center justify-center font-bold text-white text-[15px] sm:text-base transition active:scale-95 hover:scale-105">
                Join Mission →
              </Link>
            </motion.div>
            <div className="mt-6 sm:mt-10 grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4">
              {STATS.map((s) => (
                <div key={s.label} className="glass-dark rounded-2xl p-3 sm:p-4 text-center">
                  <p className="font-display text-xl sm:text-2xl font-bold text-[#f5d76e]">
                    <AnimatedCounter value={s.value} suffix={s.suffix} />
                  </p>
                  <p className="mt-1 text-[10px] sm:text-[11px] font-bold uppercase tracking-wide text-blue-100">{s.label}</p>
                  <p className="font-hindi text-[11px] text-[#f5d76e]/80">{s.hindi}</p>
                </div>
              ))}
            </div>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4, duration: 0.9 }} className="hidden lg:block relative">
            <div className="glass rounded-[2rem] p-3 premium-shadow rotate-2">
              <div className="relative overflow-hidden rounded-[1.6rem]">
                <Image src={REAL_PHOTOS[3].src} alt="Children with Kalam Kranti certificates, medals and school bags — real photo" width={REAL_PHOTOS[3].w} height={REAL_PHOTOS[3].h} className="h-auto w-full" sizes="50vw" />
                <div className="absolute bottom-5 left-5 right-5 glass rounded-2xl p-4">
                  <p className="text-sm font-bold text-[#041a3f]">📍 Real: Medal + Certificate + School Bag Vitran</p>
                  <p className="text-xs text-slate-600">Kalam Kranti Education Foundation, Kaimur</p>
                </div>
              </div>
            </div>
            <div className="absolute -left-10 -bottom-8 glass rounded-2xl p-4 premium-shadow animate-float -rotate-3">
              <p className="font-display text-2xl font-bold royal-gradient-text">96% Pass</p>
              <p className="text-xs font-bold text-slate-600">Board Results 2025</p>
            </div>
            <div className="absolute -right-6 -top-6 glass rounded-2xl px-5 py-3 premium-shadow animate-float-slow rotate-3">
              <p className="font-hindi text-[#a8841c]">बेटी पढ़ाओ 📖</p>
            </div>
          </motion.div>
        </div>

        <motion.a href="#mission" animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="hidden sm:block absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-xs font-bold tracking-widest uppercase">
          Scroll ↓
        </motion.a>
      </section>

      {/* MISSION STRIP */}
      <section id="mission" className="relative bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionTitle eyebrow="Our Mission" title={<>Education is every child’s <span className="royal-gradient-text">birthright</span></>} hindi="कोई बच्चा शिक्षा से वंचित न रहे" desc="Inspired by Dr. A.P.J. Abdul Kalam, we bring quality learning to the last mile — villages where schools are far and dreams are big." />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { t: "Free Learning", h: "निःशुल्क पढ़ाई", d: "Books, uniforms, tuition & exam fees — zero cost to families.", e: "📚" },
              { t: "Digital Classrooms", h: "स्मार्ट क्लास", d: "Smart boards, computer labs & recorded lessons in Hindi.", e: "💻" },
              { t: "Girls First", h: "बेटियाँ पहले", d: "Safe transport, mentoring & scholarships for every girl.", e: "👧" },
            ].map((c, i) => (
              <Reveal key={c.t} delay={i * 0.1}>
                <div className="card-hover rounded-3xl border border-blue-100 bg-gradient-to-b from-[#eef4ff] to-white p-8 text-center premium-shadow">
                  <span className="text-5xl">{c.e}</span>
                  <h3 className="font-display mt-4 text-xl font-bold text-[#041a3f]">{c.t}</h3>
                  <p className="font-hindi text-[#a8841c]">{c.h}</p>
                  <p className="mt-2 text-sm text-slate-600">{c.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DIRECTOR */}
      <section className="relative overflow-hidden bg-[#041a3f] py-20">
        <div className="absolute inset-0 animated-gradient opacity-20" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="glass rounded-[2rem] p-3">
              <div className="relative h-[420px] overflow-hidden rounded-[1.6rem]">
                <Image src={IMAGES.lecture} alt="Director" fill className="object-cover" sizes="50vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#041a3f]/80 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="font-display text-xl font-bold text-white">{SITE.director}</p>
                  <p className="text-sm text-[#f5d76e]">Founder & Director • Engineer • Educator</p>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <span className="rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#f5d76e]">Director’s Message</span>
            <h2 className="font-display mt-4 text-3xl sm:text-4xl font-bold text-white">“I studied under a lantern. No child should have to.”</h2>
            <p className="mt-5 text-blue-100/85 leading-relaxed">
              I am {SITE.director}, an engineer from Kaimur. Kalam Kranti is my promise to Bihar — that talent will never fail for lack of opportunity. With your support we run free pathshalas, libraries, scholarships and skill centres.
            </p>
            <p className="font-hindi mt-4 text-xl text-[#f5d76e]">“सपने वो नहीं जो सोते वक्त आते हैं, सपने वो हैं जो सोने नहीं देते।” — कलाम</p>
            <div className="mt-7 flex gap-4">
              <Link href="/about" className="rounded-full bg-[#D4AF37] px-7 py-3.5 font-bold text-[#041a3f] hover:scale-105 transition">Our Story →</Link>
              <Link href="/donate" className="rounded-full border border-white/30 px-7 py-3.5 font-bold text-white hover:bg-white/10 transition">Support ❤</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="bg-[#f7f9ff] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionTitle eyebrow="What we do" title={<>8 flagship <span className="gold-gradient-text">programs</span></>} hindi="हर बच्चे तक, हर गाँव तक" desc="From alphabet to employment — a complete journey for rural learners." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROGRAMS.slice(0, 8).map((p, i) => (
              <ProgramCard key={p.slug} p={p} idx={i} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/programs" className="inline-block rounded-full bg-[#041a3f] px-8 py-3.5 font-bold text-white hover:scale-105 transition">Explore all programs →</Link>
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section className="relative overflow-hidden bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionTitle eyebrow="Impact" title={<>Numbers that tell <span className="royal-gradient-text">stories</span></>} />
          <ImpactStats />
          <div className="mt-14 grid lg:grid-cols-2 gap-8 items-center">
            <Reveal>
              <div className="relative h-[380px] overflow-hidden rounded-3xl premium-shadow">
                <Image src={IMAGES.childrenSmile} alt="Happy children" fill className="object-cover" sizes="50vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#041a3f]/75 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 flex gap-3">
                  <div className="glass rounded-2xl px-4 py-3 flex-1 text-center"><p className="font-bold text-[#041a3f]">Before: 41% dropout</p></div>
                  <div className="rounded-2xl bg-[#D4AF37] px-4 py-3 flex-1 text-center"><p className="font-bold text-[#041a3f]">After: 96% pass ✓</p></div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#041a3f]">From dropout to dream jobs</h3>
              <ul className="mt-5 space-y-4">
                {[
                  ["🎓 320 scholarships", "for Class 10–12 toppers & needy students in 2024–25."],
                  ["💻 14 smart centres", "with computers, internet & recorded Hindi lessons."],
                  ["📖 22 village libraries", "with 5000+ books and evening reading mentors."],
                  ["👩‍🏫 850 volunteers", "teaching, mentoring & running weekend health camps."],
                ].map(([t, d]) => (
                  <li key={t} className="flex gap-3 rounded-2xl bg-[#eef4ff] p-4">
                    <span className="font-bold text-[#041a3f]">{t}</span>
                    <span className="text-sm text-slate-600">{d}</span>
                  </li>
                ))}
              </ul>
              <Link href="/impact" className="mt-6 inline-block font-bold text-[#0A3D91] hover:text-[#a8841c]">See full impact report →</Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="bg-[#f7f9ff] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionTitle eyebrow="Gallery" title={<>Moments of <span className="gold-gradient-text">change</span></>} hindi="बदलाव की झलकियाँ" />
          <GalleryGrid limit={6} />
          <div className="mt-8 text-center">
            <Link href="/gallery" className="inline-block rounded-full border-2 border-[#041a3f] px-8 py-3 font-bold text-[#041a3f] hover:bg-[#041a3f] hover:text-white transition">View full gallery →</Link>
          </div>
        </div>
      </section>

      {/* REAL MOMENTS */}
      <section className="relative overflow-hidden bg-[#041a3f] py-16 sm:py-20">
        <div className="absolute -top-20 left-1/4 h-72 w-72 rounded-full bg-[#D4AF37]/15 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <SectionTitle dark eyebrow="📍 100% Real Photos" title={<>Zameen par <span className="gold-gradient-text">asli kaam</span></>} hindi="ये स्टॉक फोटो नहीं — हमारे गाँव की असली तस्वीरें हैं" desc="Certificate, books, school bags aur trophies — swipe karke dekho. Koi photo kati nahi, sab poori dikhengi." />
        </div>
        <div className="relative mx-auto max-w-7xl sm:px-6">
          <RealStrip />
          <div className="mt-6 text-center px-4">
            <Link href="/gallery" className="inline-block rounded-full bg-[#D4AF37] px-8 py-3.5 min-h-[52px] font-bold text-[#041a3f] hover:scale-105 transition">Saari Real Photos Dekho →</Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionTitle eyebrow="Voices" title={<>Loved by students, parents & <span className="royal-gradient-text">volunteers</span></>} />
          <TestimonialSlider />
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#041a3f] py-20">
        <div className="absolute inset-0">
          <Image src={IMAGES.volunteerGroup} alt="Volunteers" fill className="object-cover opacity-25" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#041a3f] via-[#041a3f]/85 to-[#0A3D91]/70" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 text-center">
          <p className="font-hindi text-2xl text-[#f5d76e]">आपका ₹500 भी किसी का स्कूल बैग बन सकता है</p>
          <h2 className="font-display mt-3 text-3xl sm:text-5xl font-bold text-white">Be the reason a child stays in school</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/donate" className="rounded-full bg-gradient-to-r from-[#D4AF37] to-[#f5d76e] px-10 py-4 font-bold text-[#041a3f] text-lg shadow-xl hover:scale-105 transition">Donate Now ❤</Link>
            <Link href="/volunteer" className="rounded-full glass-dark border border-white/30 px-10 py-4 font-bold text-white hover:scale-105 transition">Become Volunteer</Link>
          </div>
          <p className="mt-5 text-xs text-blue-200/70">80G receipt • {SITE.corporateNo} • {SITE.pan}</p>
        </div>
      </section>

      <section className="bg-[#f7f9ff] py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Newsletter />
        </div>
      </section>
    </>
  );
}
