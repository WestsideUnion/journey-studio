"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import CinematicCanvas from "@/components/ui/CinematicCanvas";

export default function HeroSection() {
  const disciplines = [
    "PHOTOGRAPHY",
    "FILM",
    "CREATIVE DIRECTION",
    "SOCIAL",
    "COMMUNITY",
    "ART",
  ];

  return (
    <section className="relative w-full min-h-[92vh] md:min-h-screen flex flex-col justify-end overflow-hidden pt-28 pb-12 md:pb-16 bg-[#050708]">
      {/* Background Cinematic Visual */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/hero-bg.webp"
          alt="Journey Studio Cinematic Blue-Hour Nocturne"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-45 mix-blend-screen scale-[1.02] transition-transform duration-1000"
        />
        {/* Cinematic Vignette and Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050708] via-[#050708]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050708]/90 via-[#050708]/30 to-[#050708]/80" />
        <div className="absolute top-1/3 left-2/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#19BDF2]/10 blur-[130px] pointer-events-none" />
      </div>

      {/* Three.js Interactive Light Streaks & Dust Particles */}
      <CinematicCanvas intensity={1} />

      {/* Main Hero Content */}
      <div className="relative z-20 max-w-[1600px] w-full mx-auto px-6 md:px-12 flex flex-col justify-between flex-grow">
        {/* Top spacer */}
        <div className="pt-8 md:pt-16" />

        {/* Center / Dominant Title */}
        <div className="my-auto py-12 md:py-20">
          <h1 className="font-[family-name:var(--font-inter-tight)] font-black text-[15vw] sm:text-[14vw] md:text-[12.5vw] lg:text-[10.5rem] tracking-[-0.05em] leading-[0.82] text-white uppercase select-none">
            JOURNEY
            <br />
            STUDIO
          </h1>
        </div>

        {/* Lower Row: Sub-copy, CTA, and Disciplines Index */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end border-t border-white/[0.12] pt-8">
          {/* Left Column: Tagline, Description & CTA */}
          <div className="lg:col-span-8 flex flex-col space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#19BDF2] animate-pulse shadow-[0_0_10px_#19BDF2]" />
              <span className="text-[0.6875rem] md:text-[0.75rem] font-mono tracking-[0.25em] text-[#19BDF2] uppercase font-semibold">
                CREATIVE · CONTENT · CONNECTION
              </span>
            </div>

            <p className="font-[family-name:var(--font-inter)] text-sm md:text-base text-[#F4F7F8] max-w-xl leading-relaxed uppercase tracking-wide font-normal">
              A creative studio for brands, people and communities who believe in meaningful stories.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/inquire"
                className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#19BDF2] text-[#050708] font-[family-name:var(--font-inter-tight)] font-bold text-xs md:text-sm tracking-wider uppercase transition-all duration-300 hover:bg-[#41D7FF] shadow-[0_0_24px_rgba(25,189,242,0.35)] hover:shadow-[0_0_36px_rgba(25,189,242,0.6)] active:scale-[0.98]"
              >
                <span>START A PROJECT</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/work"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/20 text-white font-[family-name:var(--font-inter-tight)] font-bold text-xs md:text-sm tracking-wider uppercase transition-all duration-300 hover:border-[#19BDF2] hover:text-[#19BDF2] hover:bg-[#19BDF2]/5"
              >
                <span>VIEW WORK</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>

          {/* Right Column: Micro Discipline List */}
          <div className="lg:col-span-4 flex lg:justify-end">
            <ul className="space-y-1.5 text-right font-mono text-[0.6875rem] md:text-[0.75rem] tracking-[0.2em] text-white/50">
              {disciplines.map((item, idx) => (
                <li
                  key={item}
                  className="transition-colors duration-200 hover:text-[#19BDF2] flex items-center lg:justify-end gap-2"
                >
                  <span className="text-[0.6rem] text-[#19BDF2]/60">0{idx + 1}</span>
                  <span className="text-white/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
