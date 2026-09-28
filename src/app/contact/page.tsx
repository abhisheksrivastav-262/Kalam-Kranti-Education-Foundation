"use client";
import { useState } from "react";
import { SITE } from "@/lib/site";
import { Reveal } from "@/components/animated";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <section className="bg-[#041a3f] pt-32 pb-16 text-center">
        <div className="mx-auto max-w-3xl px-4">
          <span className="rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/15 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#f5d76e]">Contact</span>
          <h1 className="font-display mt-5 text-4xl sm:text-5xl font-bold text-white">Come, visit our <span className="gold-gradient-text">pathshala</span></h1>
          <p className="mt-3 text-blue-100/80">We reply within 24 hours — call, WhatsApp or drop a message.</p>
        </div>
      </section>
      <section className="bg-[#f7f9ff] py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-8">
          <Reveal>
            <div className="space-y-5">
              <div className="rounded-3xl bg-white p-7 premium-shadow">
                <h2 className="font-display text-xl font-bold text-[#041a3f]">{SITE.name}</h2>
                <div className="mt-4 space-y-3 text-sm text-slate-600">
                  <p>📍 {SITE.location}</p>
                  <p>👨‍💼 Director: <b>{SITE.director}</b></p>
                  <p>🏢 Corporate No.: <b>{SITE.corporateNo}</b></p>
                  <p>🧾 PAN: <b>{SITE.pan}</b> • TAN: <b>{SITE.tan}</b></p>
                  <p>📞 <a href={`tel:${SITE.phone}`} className="font-bold text-[#0A3D91]">{SITE.phone}</a></p>
                  <p>✉️ <a href={`mailto:${SITE.email}`} className="font-bold text-[#0A3D91]">{SITE.email}</a></p>
                </div>
                <div className="mt-5 flex gap-3">
                  {(["Facebook", "Instagram", "YouTube", "X"] as const).map((s) => (
                    <a key={s} href="#" aria-label={s} className="flex h-11 w-11 items-center justify-center rounded-full bg-[#eef4ff] font-bold text-[#041a3f] hover:bg-[#D4AF37] transition text-xs">{s[0]}</a>
                  ))}
                </div>
              </div>
              <div className="overflow-hidden rounded-3xl premium-shadow border">
                <iframe
                  title="Kaimur Map"
                  src="https://www.google.com/maps?q=Bhabhua,Kaimur,Bihar&output=embed"
                  className="h-[300px] w-full"
                  loading="lazy"
                />
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-3xl bg-white p-7 sm:p-9 premium-shadow">
              {sent ? (
                <div className="py-16 text-center">
                  <span className="text-6xl">🙏</span>
                  <h2 className="font-display mt-4 text-2xl font-bold text-[#041a3f]">Message received!</h2>
                  <p className="mt-2 text-slate-600">We’ll reply within 24 hours. For urgent help, WhatsApp {SITE.phone}.</p>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-4">
                  <h2 className="font-display text-2xl font-bold text-[#041a3f]">Send a message</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input required placeholder="Your name *" className="rounded-2xl border-2 border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#D4AF37]" />
                    <input required placeholder="Mobile *" pattern="[0-9+ ]{10,15}" className="rounded-2xl border-2 border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#D4AF37]" />
                  </div>
                  <input type="email" placeholder="Email" className="w-full rounded-2xl border-2 border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#D4AF37]" />
                  <select className="w-full rounded-2xl border-2 border-slate-200 px-4 py-3 text-sm bg-white outline-none focus:border-[#D4AF37]">
                    <option>Donation enquiry</option><option>Admission / Scholarship</option><option>Volunteering</option><option>Partner with us</option><option>Other</option>
                  </select>
                  <textarea required rows={5} placeholder="Your message... *" className="w-full rounded-2xl border-2 border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#D4AF37]" />
                  <button className="w-full rounded-full bg-gradient-to-r from-[#0A3D91] to-[#1663d9] py-4 font-bold text-white hover:scale-[1.02] transition">Send Message ✈️</button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
