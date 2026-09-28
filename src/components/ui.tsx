"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

export function SectionTitle({
  eyebrow,
  title,
  hindi,
  desc,
  align = "center",
  dark = false,
}: {
  eyebrow: string;
  title: ReactNode;
  hindi?: string;
  desc?: string;
  align?: "center" | "left";
  dark?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : "text-left"} mb-12`}
    >
      <span className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#a8841c]">
        <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
        {eyebrow}
      </span>
      <h2
        className={`font-display mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight ${
          dark ? "text-white" : "text-[#041a3f]"
        }`}
      >
        {title}
      </h2>
      {hindi && (
        <p className="font-hindi mt-3 text-xl text-[#D4AF37]">{hindi}</p>
      )}
      {desc && (
        <p className={`mt-4 text-base sm:text-lg leading-relaxed ${dark ? "text-blue-100/80" : "text-slate-600"}`}>
          {desc}
        </p>
      )}
    </motion.div>
  );
}

export function GlassCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`glass rounded-3xl premium-shadow ${className}`}>{children}</div>
  );
}

export function WaveSeparator({ flip = false, color = "#041a3f" }: { flip?: boolean; color?: string }) {
  return (
    <div className={`w-full overflow-hidden leading-[0] ${flip ? "rotate-180" : ""}`} aria-hidden>
      <svg viewBox="0 0 1200 90" preserveAspectRatio="none" className="h-[50px] w-full sm:h-[80px]">
        <path
          d="M0,50 C300,110 900,-10 1200,50 L1200,90 L0,90 Z"
          fill={color}
          opacity="0.08"
        />
        <path d="M0,60 C300,120 900,0 1200,60 L1200,90 L0,90 Z" fill={color} opacity="1" />
      </svg>
    </div>
  );
}
