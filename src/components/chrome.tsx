"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { SITE, NAV_LINKS } from "@/lib/site";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-1 z-[90] origin-left bg-gradient-to-r from-[#0A3D91] via-[#D4AF37] to-[#0A3D91]"
    />
  );
}

export function CursorGlow() {
  const [pos, setPos] = useState({ x: -500, y: -500 });
  useEffect(() => {
    const f = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", f);
    return () => window.removeEventListener("mousemove", f);
  }, []);
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed z-[5] h-[420px] w-[420px] rounded-full opacity-25 blur-[100px] hidden md:block"
      style={{
        left: pos.x - 210,
        top: pos.y - 210,
        background: "radial-gradient(circle, #D4AF37 0%, #0A3D91 60%, transparent 70%)",
        transition: "left .25s ease-out, top .25s ease-out",
      }}
    />
  );
}

export function Particles() {
  const dots = Array.from({ length: 22 });
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map((_, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-[#D4AF37]/40 animate-float"
          style={{
            width: 4 + ((i * 7) % 8),
            height: 4 + ((i * 7) % 8),
            left: `${(i * 37) % 100}%`,
            top: `${(i * 53) % 100}%`,
            animationDelay: `${(i % 7) * 0.8}s`,
            opacity: 0.25 + ((i % 5) * 0.12),
          }}
        />
      ))}
    </div>
  );
}

export function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1400);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center animated-gradient"
        >
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex h-24 w-24 items-center justify-center rounded-3xl bg-white/10 border border-white/20 backdrop-blur-xl text-4xl font-bold gold-gradient-text font-display"
          >
            क
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 font-display text-2xl text-white font-semibold"
          >
            Kalam Kranti
          </motion.p>
          <p className="font-hindi text-[#D4AF37] mt-1">शिक्षा के लिए एक साझा प्रयास</p>
          <div className="mt-6 h-1 w-48 overflow-hidden rounded-full bg-white/20">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "200%" }}
              transition={{ repeat: Infinity, duration: 1.1, ease: "easeInOut" }}
              className="h-full w-1/2 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 30);
    f();
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  // Lock body scroll when the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open ]);
  return (
    <header
      className={`fixed top-0 inset-x-0 z-[80] transition-all duration-500 ${
        scrolled || open ? "glass shadow-lg shadow-blue-900/10 py-2" : "bg-transparent py-3 sm:py-4"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-2.5 min-h-[44px]">
          <span className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0A3D91] to-[#041a3f] text-xl sm:text-2xl font-bold text-[#D4AF37] shadow-lg border border-[#D4AF37]/40 font-display">
            क
          </span>
          <span className="leading-tight">
            <span className={`block font-display font-bold text-sm sm:text-base ${scrolled || open ? "text-[#041a3f]" : "text-white"}`}>
              Kalam Kranti
            </span>
            <span className={`block text-[10px] sm:text-[11px] font-medium tracking-wide ${scrolled || open ? "text-slate-600" : "text-blue-100"}`}>
              Education Foundation
            </span>
          </span>
        </Link>
        <div className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition hover:bg-[#D4AF37]/20 ${
                scrolled ? "text-[#041a3f]" : "text-white"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/donate"
            className="ml-3 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#f5d76e] px-6 py-2.5 text-sm font-bold text-[#041a3f] shadow-lg shadow-yellow-500/30 transition hover:scale-105"
          >
            Donate Now ❤
          </Link>
        </div>
        <div className="flex lg:hidden items-center gap-2">
          <Link
            href="/donate"
            className="rounded-full bg-gradient-to-r from-[#D4AF37] to-[#f5d76e] px-4 py-2 text-xs font-bold text-[#041a3f] shadow-md active:scale-95 transition"
          >
            Donate ❤
          </Link>
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className={`flex h-11 w-11 items-center justify-center rounded-xl active:scale-95 transition ${scrolled || open ? "bg-[#041a3f] text-white" : "bg-white/20 text-white backdrop-blur"}`}
          >
            {open ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M6 6l12 12M18 6L6 18"/></svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
            )}
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden mx-3 sm:mx-4 mt-2 rounded-2xl border border-white/50 bg-white/95 backdrop-blur-xl p-2.5 shadow-2xl max-h-[70vh] overflow-y-auto"
          >
            {NAV_LINKS.map((l, idx) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="flex items-center justify-between rounded-xl px-4 py-3.5 text-[15px] font-semibold text-[#041a3f] active:bg-blue-50 min-h-[48px]">
                <span>{idx + 1}. {l.label}</span>
                <span className="text-[#D4AF37]">→</span>
              </Link>
            ))}
            <Link href="/donate" onClick={() => setOpen(false)} className="mt-1.5 block rounded-xl bg-gradient-to-r from-[#0A3D91] to-[#1663d9] px-4 py-4 text-center text-[15px] font-bold text-white min-h-[52px]">
              Donate Now ❤
            </Link>
            <p className="py-2 text-center font-hindi text-sm text-[#a8841c]">शिक्षा के लिए एक साझा प्रयास</p>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="relative bg-[#041a3f] text-blue-100 overflow-hidden">
      <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[#D4AF37]/15 blur-3xl animate-blob" />
      <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 pt-12 pb-28 lg:pb-14 grid gap-9 sm:grid-cols-2 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#D4AF37] to-[#a8841c] text-2xl font-bold text-[#041a3f] font-display">क</span>
            <div>
              <p className="font-display font-bold text-white">Kalam Kranti</p>
              <p className="text-xs">Education Foundation</p>
            </div>
          </div>
          <p className="font-hindi mt-4 text-[#D4AF37] text-lg">“शिक्षा के लिए एक साझा प्रयास”</p>
          <p className="mt-3 text-sm leading-relaxed text-blue-200/80">
            Empowering every child in rural Bihar through free education, scholarships, digital learning and values.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {NAV_LINKS.map((l) => (
              <li key={l.href}><Link href={l.href} className="hover:text-[#D4AF37] transition">{l.label}</Link></li>
            ))}
            <li><Link href="/donate" className="hover:text-[#D4AF37]">Donate</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-white mb-4">Programs</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/programs" className="hover:text-[#D4AF37]">Free Education</Link></li>
            <li><Link href="/programs" className="hover:text-[#D4AF37]">Girls Education</Link></li>
            <li><Link href="/programs" className="hover:text-[#D4AF37]">Digital Learning</Link></li>
            <li><Link href="/programs" className="hover:text-[#D4AF37]">Scholarships</Link></li>
            <li><Link href="/programs" className="hover:text-[#D4AF37]">Skill Development</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-white mb-4">Registered NGO</h4>
          <ul className="space-y-2 text-xs text-blue-200/90">
            <li>Corporate No.: {SITE.corporateNo}</li>
            <li>PAN: {SITE.pan}</li>
            <li>TAN: {SITE.tan}</li>
            <li className="pt-2">{SITE.location}</li>
            <li>Director: {SITE.director}</li>
          </ul>
        </div>
      </div>
      <div className="relative border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-blue-200/70">
          <p>Copyright © 2025 {SITE.name}. All Rights Reserved.</p>
          <p>Crafted with ❤ for the children of Bihar</p>
        </div>
      </div>
    </footer>
  );
}

export function WhatsAppFloat() {
  return (
    <div className="fixed bottom-24 lg:bottom-5 right-4 lg:right-5 z-[70] flex flex-col gap-2.5">
      <a
        href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent("Namaste! I want to support Kalam Kranti Education Foundation.")}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex h-12 w-12 lg:h-14 lg:w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-green-600/40 transition active:scale-95 hover:scale-110"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5s.8 1.9.8 2c.1.1.1.3 0 .5-.3.6-.6.8-.4 1.1.6 1 1.4 1.9 2.5 2.4.3.2.5.1.7-.1l.8-.9c.2-.3.4-.2.7-.1l2 1c.3.1.5.2.6.4 0 .1 0 .6-.4 1.4Z"/></svg>
      </a>
      <a
        href={`tel:${SITE.phone.replace(/\s/g, "")}`}
        aria-label="Call us"
        className="flex h-12 w-12 lg:h-14 lg:w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#0A3D91] to-[#1663d9] text-white shadow-xl transition active:scale-95 hover:scale-110"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8.1 10a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.6 2Z"/></svg>
      </a>
    </div>
  );
}

export function MobileBottomBar() {
  const items = [
    { href: "/", label: "Home", icon: "🏠" },
    { href: "/programs", label: "Programs", icon: "📚" },
    { href: "/donate", label: "Donate", icon: "❤", highlight: true },
    { href: "/volunteer", label: "Join", icon: "🙋" },
    { href: "/contact", label: "Contact", icon: "📞" },
  ];
  return (
    <nav aria-label="Mobile quick navigation" className="lg:hidden fixed bottom-0 inset-x-0 z-[75] pb-safe">
      <div className="mx-3 mb-3 rounded-2xl border border-white/40 bg-white/92 shadow-2xl shadow-blue-900/20 backdrop-blur-xl px-1.5 py-1.5 flex items-stretch justify-between">
        {items.map((it) => (
          <Link
            key={it.href + it.label}
            href={it.href}
            className={`flex flex-1 flex-col items-center justify-center gap-0.5 rounded-xl py-2 min-h-[56px] active:scale-95 transition ${
              it.highlight
                ? "bg-gradient-to-r from-[#D4AF37] to-[#f5d76e] text-[#041a3f] font-bold shadow-md"
                : "text-[#041a3f]/80 font-semibold active:bg-blue-50"
            }`}
          >
            <span className="text-lg leading-none">{it.icon}</span>
            <span className="text-[10px] tracking-wide">{it.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}

export function SmoothScroll() {
  useEffect(() => {
    let lenis: { destroy: () => void; raf: (t: number) => void } | null = null;
    (async () => {
      const Lenis = (await import("lenis")).default;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const instance = new Lenis({ lerp: 0.09 } as any);
      lenis = instance as unknown as { destroy: () => void; raf: (t: number) => void };
      const raf = (time: number) => {
        (instance as unknown as { raf: (t: number) => void }).raf(time);
        requestAnimationFrame(raf);
      };
      requestAnimationFrame(raf);
    })();
    return () => lenis?.destroy();
  }, []);
  return null;
}
