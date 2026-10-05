import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";

export default function ArtPrintsSection() {
  return (
    <section className="relative w-full py-24 md:py-32 bg-[#050708] border-t border-white/[0.12]">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        {/* Section Label */}
        <div className="mb-12">
          <SectionLabel number="07" label="ART & PRINTS" />
        </div>

        {/* 2-Column Split matching mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Full-Moon Window Still */}
          <div className="lg:col-span-7">
            <div className="relative w-full aspect-[16/10] overflow-hidden rounded-xs border border-white/[0.12] bg-[#0C1115] group">
              <Image
                src="/images/art/art-moon-window.webp"
                alt="Art that lives beyond screens moonlit room"
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050708]/80 via-transparent to-transparent pointer-events-none" />

              {/* In-image CTA button as seen in mockup */}
              <div className="absolute bottom-6 right-6">
                <Link
                  href="/art"
                  className="group/btn inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#050708]/80 backdrop-blur-md border border-white/20 text-white font-[family-name:var(--font-inter-tight)] font-bold text-xs tracking-wider uppercase transition-all duration-300 hover:border-[#19BDF2] hover:text-[#19BDF2]"
                >
                  <span>VIEW ART</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5 text-[#19BDF2]" />
                </Link>
              </div>

              <div className="absolute bottom-6 left-6 text-[0.625rem] font-mono text-white/50 tracking-wider">
                [ EDITION 01 · BEYOND SCREENS ]
              </div>
            </div>
          </div>

          {/* Right Column: Massive Headline & Print Description */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div>
              <h2 className="font-[family-name:var(--font-inter-tight)] font-black text-4xl sm:text-5xl lg:text-6xl text-white uppercase tracking-[-0.03em] leading-[0.9] mb-6">
                ART
                <br />
                THAT
                <br />
                LIVES
                <br />
                BEYOND
                <br />
                SCREENS
              </h2>

              <p className="font-[family-name:var(--font-inter)] text-xs md:text-sm text-[#A7B2BA] uppercase tracking-wider leading-relaxed font-normal mb-8">
                LIMITED EDITION PRINTS, DIGITAL ART AND COMMISSIONED WORKS.
              </p>

              <p className="text-xs md:text-sm text-[#A7B2BA] leading-relaxed max-w-md">
                Original photography and digital explorations captured across medium format and cinematic lenses. Produced with archival pigment inks on museum-grade cotton rag paper.
              </p>
            </div>

            <div className="pt-4">
              <Link
                href="/art"
                className="group inline-flex items-center gap-2 text-xs md:text-sm font-[family-name:var(--font-inter-tight)] font-bold uppercase tracking-widest text-[#19BDF2] hover:text-[#41D7FF] transition-colors"
              >
                <span>EXPLORE ART & PRINTS</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
