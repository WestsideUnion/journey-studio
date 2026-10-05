import React from "react";
import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";

export default function BrandsSection() {
  return (
    <section className="relative w-full py-24 md:py-32 bg-[#050708] border-t border-white/[0.12]">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        {/* Section Label */}
        <div className="mb-12">
          <SectionLabel number="06" label="ECOSYSTEM" />
        </div>

        {/* Content Layout matching mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading + Silhouette image */}
          <div className="lg:col-span-7 flex flex-col space-y-8">
            <h2 className="font-[family-name:var(--font-inter-tight)] font-black text-4xl sm:text-5xl lg:text-7xl text-white uppercase tracking-[-0.04em] leading-[0.9]">
              BRANDS
              <br />
              PEOPLE
              <br />
              PLACES
              <br />
              COMMUNITIES
            </h2>

            {/* Silhouette Still Frame */}
            <div className="relative w-full aspect-[16/9] rounded-xs overflow-hidden border border-white/[0.12] bg-[#0C1115] group">
              <Image
                src="/images/work/silhouette-city.webp"
                alt="Silhouette overlooking metropolitan city"
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050708]/70 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Right Column: Statement & Geographic Scope */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-12 lg:pt-6">
            <div className="border-l border-white/[0.12] pl-6 md:pl-8">
              <p className="font-[family-name:var(--font-inter)] text-sm md:text-base text-[#F4F7F8] uppercase tracking-wide leading-relaxed font-normal mb-6">
                FROM CAMPAIGNS TO CULTURAL MOMENTS, WE COLLABORATE WITH BRANDS, FOUNDERS, CREATIVES AND COMMUNITIES TO BRING COMPELLING VISUAL STORIES TO LIFE.
              </p>
              <p className="text-xs md:text-sm text-[#A7B2BA] leading-relaxed">
                We believe stories exist everywhere: in the design of a physical space, the texture of a brand narrative, the energy of an event, and the quiet dignity of a portrait.
              </p>
            </div>

            <div className="font-mono text-xs tracking-[0.25em] text-[#19BDF2] uppercase flex items-center gap-2">
              <span>[</span>
              <span className="text-white">TORONTO</span>
              <span>→</span>
              <span className="text-white">GLOBAL</span>
              <span>]</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
