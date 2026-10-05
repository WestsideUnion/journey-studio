import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";

export default function WhoWeWorkWithSection() {
  const partners = [
    "BRANDS",
    "STARTUPS",
    "AGENCIES",
    "ARTISTS",
    "EVENTS",
    "COMMUNITIES",
  ];

  return (
    <section className="relative w-full py-24 md:py-32 bg-[#050708] border-t border-white/[0.12]">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        {/* Section Label */}
        <div className="mb-12">
          <SectionLabel number="05" label="WHO WE WORK WITH" />
        </div>

        {/* Bracketed Categories Banner matching mockup */}
        <div className="py-8 border-y border-white/[0.1] flex flex-wrap items-center gap-x-8 gap-y-4 font-mono text-xs md:text-sm tracking-[0.25em] text-white/70 uppercase">
          <span className="text-[#19BDF2]">[</span>
          {partners.map((partner, idx) => (
            <span
              key={partner}
              className="hover:text-white transition-colors cursor-default"
            >
              {partner}
              {idx < partners.length - 1 && <span className="ml-8 text-white/20">·</span>}
            </span>
          ))}
          <span className="text-[#19BDF2]">]</span>
          <span className="text-white/40 ml-4">[ AND OTHERS ]</span>
        </div>

        {/* Culture / Community Banner: "IDEAS ARE BETTER TOGETHER" */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 border border-white/[0.12] bg-[#090D10] overflow-hidden">
          {/* Left Column: Image with Massive Headline Overlay */}
          <div className="lg:col-span-7 relative min-h-[380px] md:min-h-[460px] p-8 md:p-12 flex flex-col justify-end overflow-hidden group">
            <Image
              src="/images/events/community-banner.webp"
              alt="Ideas are better together community gathering"
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050708] via-[#050708]/50 to-transparent" />
            <div className="absolute inset-0 bg-[#061E33]/30 mix-blend-color" />

            <div className="relative z-10">
              <span className="text-[0.6875rem] font-mono text-[#19BDF2] uppercase tracking-[0.25em] block mb-2">
                COMMUNITY & CULTURE
              </span>
              <h3 className="font-[family-name:var(--font-inter-tight)] font-black text-4xl sm:text-5xl lg:text-6xl text-white uppercase tracking-[-0.03em] leading-[0.9]">
                IDEAS ARE BETTER
                <br />
                TOGETHER
              </h3>
            </div>
          </div>

          {/* Right Column: Statement & Action CTA */}
          <div className="lg:col-span-5 p-8 md:p-12 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-white/[0.12] bg-[#0C1115]/80">
            <div>
              <p className="font-[family-name:var(--font-inter)] text-sm md:text-base text-[#F4F7F8] uppercase tracking-wide leading-relaxed font-normal mb-8">
                WE WORK WITH A SELECTED NETWORK OF BRANDS AND CREATIVE PARTNERS AT A TIME TO KEEP THE WORK MEANINGFUL, COLLABORATIVE AND IMPACTFUL.
              </p>
              <p className="text-xs md:text-sm text-[#A7B2BA] leading-relaxed">
                Whether launching a campaign, documenting a cultural moment, or activating a space, our partnerships are built on shared curiosity and high visual standards.
              </p>
            </div>

            <div className="pt-10 flex items-center gap-4">
              <Link
                href="/inquire"
                className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-full border border-white/20 text-white font-[family-name:var(--font-inter-tight)] font-bold text-xs tracking-wider uppercase transition-all duration-300 hover:border-[#19BDF2] hover:text-[#19BDF2] hover:bg-[#19BDF2]/5 hover:shadow-[0_0_20px_rgba(25,189,242,0.2)]"
              >
                <span>START A PROJECT</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 text-[#19BDF2]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
