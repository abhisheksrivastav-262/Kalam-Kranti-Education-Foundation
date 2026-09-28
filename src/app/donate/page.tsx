import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { SectionTitle } from "@/components/ui";
import { Reveal } from "@/components/animated";
import { DonationCard, FAQ } from "@/components/sections";

export const metadata: Metadata = {
  title: "Donate",
  description: "Donate to educate rural Bihar — ₹500 gives books, ₹5000 sponsors a term. UPI, bank transfer, 80G receipts. Kalam Kranti Education Foundation.",
};

export default function DonatePage() {
  return (
    <>
      <section className="bg-[#041a3f] pt-32 pb-16 text-center relative overflow-hidden">
        <div className="absolute -top-20 left-1/3 h-72 w-72 rounded-full bg-[#D4AF37]/20 blur-3xl" />
        <div className="relative mx-auto max-w-3xl px-4">
          <span className="rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/15 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#f5d76e]">Donate</span>
          <h1 className="font-display mt-5 text-4xl sm:text-5xl font-bold text-white">Your ₹500 = a child’s <span className="gold-gradient-text">school bag</span></h1>
          <p className="font-hindi mt-3 text-xl text-[#f5d76e]">दान नहीं, भविष्य में निवेश</p>
        </div>
      </section>
      <section className="bg-[#f7f9ff] py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3">
            <Reveal><DonationCard /></Reveal>
            <div className="mt-6"><FAQ items={[
              { q: "Is my donation tax-deductible?", a: "Yes — 80G receipts issued. Share your PAN + address on WhatsApp after payment." },
              { q: "Where exactly does money go?", a: "Books (₹500/child/yr), uniforms (₹800), full schooling (₹12,000/yr), libraries (₹51,000), smart classrooms (₹2.5L). Reports on request." },
              { q: "Can I donate books/clothes instead?", a: "Absolutely! Drop at Mahartha Nuaon centre or courier. WhatsApp us first for the list of needs." },
            ]} /></div>
          </div>
          <div className="lg:col-span-2 space-y-5">
            <Reveal delay={0.1}>
              <div className="rounded-3xl bg-[#041a3f] p-7 text-white premium-shadow">
                <h3 className="font-display text-xl font-bold">What your gift does</h3>
                <ul className="mt-4 space-y-3 text-sm">
                  {[["₹500", "Books + copies for 1 child (full year)"], ["₹1,000", "Uniform + shoes + school bag"], ["₹2,500", "Smart-class access for 5 kids"], ["₹5,000", "Half-year tuition for 1 child"], ["₹11,000", "Full-year scholarship + mentoring"]].map(([a, d]) => (
                    <li key={a} className="flex gap-3 rounded-2xl bg-white/10 p-3"><span className="font-bold text-[#f5d76e] whitespace-nowrap">{a}</span><span className="text-blue-100/85">{d}</span></li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="rounded-3xl bg-white p-7 premium-shadow border border-[#D4AF37]/30">
                <h3 className="font-bold text-[#041a3f]">🛡️ Trust & Transparency</h3>
                <ul className="mt-3 space-y-2 text-xs text-slate-600">
                  <li>✓ Registered: {SITE.corporateNo}</li>
                  <li>✓ PAN: {SITE.pan} • TAN: {SITE.tan}</li>
                  <li>✓ Audited accounts shared annually</li>
                  <li>✓ Photos & receipts on WhatsApp</li>
                  <li>✓ Led by {SITE.director}</li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
