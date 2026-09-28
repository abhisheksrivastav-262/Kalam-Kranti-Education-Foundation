"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { TESTIMONIALS, GALLERY, PROGRAMS, SITE } from "@/lib/site";
import { AnimatedCounter } from "./animated";

export function TestimonialSlider() {
  const [i, setI] = useState(0);
  const t = TESTIMONIALS[i];
  return (
    <div className="relative mx-auto max-w-3xl">
      <AnimatePresence mode="wait">
        <motion.div
          key={i}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -60 }}
          transition={{ duration: 0.5 }}
          className="glass rounded-3xl p-6 sm:p-10 text-center premium-shadow"
        >
          <div className="mx-auto h-16 w-16 overflow-hidden rounded-full border-2 border-[#D4AF37] relative">
            <Image src={t.image} alt={t.name} fill className="object-cover" sizes="64px" />
          </div>
          <p className="mt-4 text-[15px] sm:text-lg leading-relaxed text-slate-700 italic">“{t.text}”</p>
          <p className="mt-4 font-display font-bold text-[#041a3f]">{t.name}</p>
          <p className="text-sm text-[#a8841c] font-semibold">{t.role}</p>
        </motion.div>
      </AnimatePresence>
      <div className="mt-6 flex items-center justify-center gap-3">
        <button onClick={() => setI((i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)} className="flex h-12 w-12 items-center justify-center rounded-full bg-[#041a3f] text-white text-base font-bold hover:bg-[#0A3D91] active:scale-95 transition" aria-label="Previous">←</button>
        <div className="flex gap-2">
          {TESTIMONIALS.map((_, d) => (
            <button key={d} onClick={() => setI(d)} aria-label={`Go to ${d}`} className={`h-2.5 rounded-full transition-all ${d === i ? "w-8 bg-[#D4AF37]" : "w-2.5 bg-slate-300"}`} />
          ))}
        </div>
        <button onClick={() => setI((i + 1) % TESTIMONIALS.length)} className="flex h-12 w-12 items-center justify-center rounded-full bg-[#041a3f] text-white text-base font-bold hover:bg-[#0A3D91] active:scale-95 transition" aria-label="Next">→</button>
      </div>
    </div>
  );
}

export function GalleryGrid({ limit }: { limit?: number }) {
  const [light, setLight] = useState<string | null>(null);
  const items = limit ? GALLERY.slice(0, limit) : GALLERY;
  return (
    <>
      <div className="masonry">
        {items.map((g, idx) => (
          <motion.button
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (idx % 6) * 0.06 }}
            onClick={() => setLight(g.src)}
            className="group relative block w-full overflow-hidden rounded-2xl premium-shadow text-left active:scale-[0.98] transition"
          >
            <div className="relative h-56 sm:h-64 w-full">
              <Image src={g.src} alt={g.title} fill className="object-cover transition duration-700 group-hover:scale-110" sizes="(max-width:768px) 100vw, 33vw" loading="lazy" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#041a3f]/85 via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-0 p-4">
              <span className="rounded-full bg-[#D4AF37] px-3 py-0.5 text-[11px] font-bold text-[#041a3f]">{g.cat}</span>
              <p className="mt-1.5 font-display font-bold text-white">{g.title}</p>
            </div>
          </motion.button>
        ))}
      </div>
      <AnimatePresence>
        {light && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setLight(null)} className="fixed inset-0 z-[95] flex items-end sm:items-center justify-center bg-black/85 backdrop-blur">
            <motion.div initial={{ y: 40, scale: 0.97 }} animate={{ y: 0, scale: 1 }} exit={{ y: 40, scale: 0.97 }} className="relative h-[82vh] sm:h-[70vh] w-full sm:max-w-4xl overflow-hidden sm:rounded-3xl rounded-t-3xl" onClick={(e) => e.stopPropagation()}>
              <Image src={light} alt="Preview" fill className="object-contain bg-black" sizes="100vw" />
              <button onClick={() => setLight(null)} className="absolute top-4 right-4 rounded-full bg-white px-5 py-2.5 text-sm font-bold min-h-[44px]" aria-label="Close">✕ Close</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export function ProgramCard({ p, idx }: { p: (typeof PROGRAMS)[number]; idx: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: (idx % 4) * 0.08 }}
      className="card-hover group overflow-hidden rounded-3xl bg-white premium-shadow border border-blue-50"
    >
      <div className="relative h-52 overflow-hidden">
        <Image src={p.image} alt={p.title} fill className="object-cover transition duration-700 group-hover:scale-110" sizes="(max-width:768px) 100vw, 33vw" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#041a3f]/70 to-transparent" />
        <span className="absolute top-3 left-3 rounded-full glass px-3 py-1 text-lg">{p.icon}</span>
        <p className="font-hindi absolute bottom-3 left-4 text-[#f5d76e]">{p.hindi}</p>
      </div>
      <div className="p-6">
        <h3 className="font-display text-xl font-bold text-[#041a3f]">{p.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.desc}</p>
        <Link href="/volunteer" className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#0A3D91] hover:text-[#a8841c] transition">
          Join this program <span>→</span>
        </Link>
      </div>
    </motion.div>
  );
}

export function ImpactStats() {
  const stats = [
    { v: 12500, s: "+", l: "Students Supported" },
    { v: 120, s: "+", l: "Villages Reached" },
    { v: 850, s: "+", l: "Volunteers" },
    { v: 96, s: "%", l: "Board Pass Rate" },
  ];
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
      {stats.map((st) => (
        <div key={st.l} className="glass rounded-3xl p-6 text-center premium-shadow">
          <p className="font-display text-3xl sm:text-4xl font-bold royal-gradient-text">
            <AnimatedCounter value={st.v} suffix={st.s} />
          </p>
          <p className="mt-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-600">{st.l}</p>
        </div>
      ))}
    </div>
  );
}

export function Newsletter() {
  const [done, setDone] = useState(false);
  return (
    <div className="rounded-3xl bg-gradient-to-r from-[#041a3f] via-[#0A3D91] to-[#041a3f] p-8 sm:p-12 relative overflow-hidden">
      <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-[#D4AF37]/20 blur-3xl" />
      <div className="relative grid lg:grid-cols-2 gap-6 items-center">
        <div>
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">Get stories of change in your inbox</h3>
          <p className="mt-2 text-blue-100/80">Monthly impact report, scholarship alerts & volunteer calls. No spam.</p>
        </div>
        {done ? (
          <p className="rounded-2xl bg-green-500/20 border border-green-300/30 p-4 text-green-100 font-semibold">🙏 Dhanyavaad! You are subscribed.</p>
        ) : (
          <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => { e.preventDefault(); setDone(true); }}>
            <input required type="email" placeholder="Your email address" className="flex-1 rounded-full px-5 py-3.5 text-sm outline-none border border-white/20 bg-white/10 text-white placeholder:text-blue-200" />
            <button className="rounded-full bg-[#D4AF37] px-7 py-3.5 text-sm font-bold text-[#041a3f] hover:scale-105 transition">Subscribe</button>
          </form>
        )}
      </div>
    </div>
  );
}

export function FAQ({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="space-y-3">
      {items.map((f, i) => (
        <div key={i} className={`rounded-2xl border transition ${open === i ? "bg-white shadow-lg border-[#D4AF37]/40" : "bg-white/70 border-blue-100"}`}>
          <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-bold text-[#041a3f] text-sm sm:text-base">
            {f.q}
            <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${open === i ? "bg-[#D4AF37] text-[#041a3f]" : "bg-blue-50"}`}>{open === i ? "−" : "+"}</span>
          </button>
          <AnimatePresence>
            {open === i && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                <p className="px-5 pb-5 text-sm leading-relaxed text-slate-600">{f.a}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

export function DonationCard() {
  const [amt, setAmt] = useState(1000);
  const [custom, setCustom] = useState("");
  const active = custom ? parseInt(custom) || 0 : amt;
  return (
    <div className="glass rounded-3xl p-6 sm:p-8 premium-shadow">
      <h3 className="font-display text-2xl font-bold text-[#041a3f]">Choose your contribution</h3>
      <p className="font-hindi text-[#a8841c] mt-1">आपका दान, किसी का भविष्य</p>
      <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3">
        {[500, 1000, 2500, 5000, 11000].map((a) => (
          <button key={a} onClick={() => { setAmt(a); setCustom(""); }} className={`rounded-2xl border-2 px-2 py-3.5 min-h-[52px] text-sm font-bold transition active:scale-95 ${!custom && amt === a ? "border-[#D4AF37] bg-[#D4AF37]/15 text-[#041a3f] scale-[1.03]" : "border-slate-200 bg-white text-slate-600 active:border-[#D4AF37]"}`}>
            ₹{a.toLocaleString("en-IN")}
          </button>
        ))}
      </div>
      <input value={custom} onChange={(e) => setCustom(e.target.value.replace(/\D/g, ""))} placeholder="Custom amount (₹)" inputMode="numeric" className="mt-4 w-full rounded-2xl border-2 border-slate-200 px-5 py-3.5 font-bold outline-none focus:border-[#D4AF37]" />
      <div className="mt-4 rounded-2xl bg-gradient-to-r from-[#041a3f] to-[#0A3D91] p-5 text-white flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-widest text-blue-200">You are donating</p>
          <p className="font-display text-3xl font-bold text-[#f5d76e]">₹{(active || 0).toLocaleString("en-IN")}</p>
        </div>
        <span className="text-4xl">🎁</span>
      </div>
      <div className="mt-4 grid sm:grid-cols-2 gap-3">
        <div className="rounded-2xl border border-dashed border-[#D4AF37] bg-[#D4AF37]/10 p-4 text-center">
          <p className="text-xs font-bold uppercase text-[#a8841c]">UPI / QR</p>
          <div className="mx-auto mt-2 flex h-28 w-28 items-center justify-center rounded-xl bg-white text-[11px] font-bold text-slate-500 border">QR CODE<br />kalamkranti@upi</div>
          <p className="mt-2 text-xs font-mono">kalamkranti@upi</p>
        </div>
        <div className="rounded-2xl bg-slate-50 border p-4 text-xs leading-relaxed">
          <p className="font-bold text-[#041a3f] uppercase mb-1">Bank Transfer</p>
          <p>A/c: Kalam Kranti Education Foundation</p>
          <p>A/c No: <b>XXXXXXXXXXXX</b></p>
          <p>IFSC: <b>XXXX0001234</b></p>
          <p>Branch: Bhabhua, Kaimur</p>
        </div>
      </div>
      <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(`Namaste! I want to donate ₹${active} to Kalam Kranti Education Foundation.`)}`} target="_blank" rel="noreferrer" className="mt-5 block rounded-full bg-gradient-to-r from-[#D4AF37] to-[#f5d76e] py-4 text-center font-bold text-[#041a3f] shadow-lg hover:scale-[1.02] transition">
        Donate ₹{(active || 0).toLocaleString("en-IN")} via WhatsApp ❤
      </a>
      <p className="mt-3 text-center text-[11px] text-slate-500">80G receipts available • {SITE.pan} • Transparent audited accounts</p>
    </div>
  );
}
