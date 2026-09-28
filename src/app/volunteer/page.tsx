"use client";
import { useState } from "react";
import Image from "next/image";
import { IMAGES, SITE } from "@/lib/site";
import { SectionTitle } from "@/components/ui";
import { Reveal } from "@/components/animated";

export default function VolunteerPage() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <section className="bg-[#041a3f] pt-32 pb-16 text-center">
        <div className="mx-auto max-w-3xl px-4">
          <span className="rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/15 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#f5d76e]">Volunteer</span>
          <h1 className="font-display mt-5 text-4xl sm:text-5xl font-bold text-white">Give 2 hours a week, <span className="gold-gradient-text">change a life</span></h1>
          <p className="font-hindi mt-3 text-xl text-[#f5d76e]">आओ, पढ़ाएँ — आओ, बढ़ाएँ</p>
        </div>
      </section>
      <section className="bg-[#f7f9ff] py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-10">
          <Reveal>
            <div className="relative">
              <div className="relative h-[300px] overflow-hidden rounded-3xl premium-shadow">
                <Image src={IMAGES.volunteers} alt="Volunteers" fill className="object-cover" sizes="50vw" />
              </div>
              <div className="glass rounded-3xl p-6 mt-5 premium-shadow">
                <h3 className="font-display font-bold text-[#041a3f] text-lg">Why volunteer with us?</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  <li>✅ Teach online or in village centres (Hindi medium ok)</li>
                  <li>✅ Get certificate + recommendation letter</li>
                  <li>✅ Join 850+ teachers, engineers, students</li>
                  <li>✅ Weekend drives, library & health camps</li>
                </ul>
                <div className="mt-4 rounded-2xl bg-[#041a3f] p-4 text-center text-sm text-white">
                  📞 Questions? WhatsApp us — <b className="text-[#f5d76e]">{SITE.phone}</b>
                </div>
              </div>
              <div className="relative h-[220px] overflow-hidden rounded-3xl mt-5 premium-shadow">
                <Image src={IMAGES.volunteerGroup} alt="Group" fill className="object-cover" sizes="50vw" />
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-3xl bg-white p-6 sm:p-9 premium-shadow border border-blue-50">
              {sent ? (
                <div className="py-16 text-center">
                  <span className="text-6xl">🎉</span>
                  <h2 className="font-display mt-4 text-2xl font-bold text-[#041a3f]">Dhanyavaad! Application received</h2>
                  <p className="mt-2 text-slate-600">Our team will call/WhatsApp you within 48 hours. Welcome to the mission! 🙏</p>
                  <p className="font-hindi mt-3 text-[#a8841c] text-lg">शिक्षा के सिपाही बनने के लिए धन्यवाद</p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="space-y-4"
                >
                  <h2 className="font-display text-2xl font-bold text-[#041a3f]">Volunteer Registration</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div><label className="text-xs font-bold uppercase text-slate-500">Full Name *</label><input required placeholder="e.g. Rahul Kumar" className="mt-1 w-full rounded-2xl border-2 border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#D4AF37]" /></div>
                    <div><label className="text-xs font-bold uppercase text-slate-500">Mobile *</label><input required pattern="[0-9+ ]{10,15}" placeholder="98765 43210" className="mt-1 w-full rounded-2xl border-2 border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#D4AF37]" /></div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div><label className="text-xs font-bold uppercase text-slate-500">Email</label><input type="email" placeholder="you@email.com" className="mt-1 w-full rounded-2xl border-2 border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#D4AF37]" /></div>
                    <div><label className="text-xs font-bold uppercase text-slate-500">Profession</label><select className="mt-1 w-full rounded-2xl border-2 border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#D4AF37] bg-white"><option>Student</option><option>Teacher</option><option>Engineer</option><option>Doctor</option><option>Business</option><option>Homemaker</option><option>Other</option></select></div>
                  </div>
                  <div><label className="text-xs font-bold uppercase text-slate-500">Address</label><input placeholder="Village / City, District" className="mt-1 w-full rounded-2xl border-2 border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#D4AF37]" /></div>
                  <div><label className="text-xs font-bold uppercase text-slate-500">How can you help?</label><div className="mt-2 flex flex-wrap gap-2">{["Teaching", "Online Tutor", "Content", "Design", "Fundraising", "Health Camp", "Library"].map((t) => (<label key={t} className="cursor-pointer rounded-full border border-slate-200 px-4 py-2 text-xs font-bold has-[:checked]:bg-[#041a3f] has-[:checked]:text-white has-[:checked]:border-[#041a3f]"><input type="checkbox" className="sr-only" />{t}</label>))}</div></div>
                  <div><label className="text-xs font-bold uppercase text-slate-500">Why do you want to join? *</label><textarea required rows={4} placeholder="2-3 lines about your motivation..." className="mt-1 w-full rounded-2xl border-2 border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#D4AF37]" /></div>
                  <button className="w-full rounded-full bg-gradient-to-r from-[#0A3D91] to-[#1663d9] py-4 font-bold text-white shadow-lg hover:scale-[1.02] transition">Submit Application 🚀</button>
                  <p className="text-center text-[11px] text-slate-500">By submitting, you agree to be contacted via call/WhatsApp.</p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
