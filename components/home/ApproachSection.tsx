import React from "react";
import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";

export default function ApproachSection() {
  return (
    <section className="relative w-full py-24 md:py-32 bg-[#050708] border-t border-white/[0.12]">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        {/* Section Label */}
        <div className="mb-12">
          <SectionLabel number="02" label="OUR APPROACH" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Massive Stacked Type */}
          <div className="lg:col-span-7">
            <h2 className="font-[family-name:var(--font-inter-tight)] font-black text-[12vw] sm:text-[9vw] lg:text-[6.5rem] tracking-[-0.04em] leading-[0.88] text-white uppercase">
              STORIES
              <br />
              THAT
              <br />
              MAKE
              <br />
              CONNECTIONS
            </h2>
          </div>

          {/* Right Column: Statement & Cinematic Still */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-10 lg:pt-4">
            <p className="font-[family-name:var(--font-inter)] text-sm md:text-base text-[#F4F7F8] uppercase tracking-wide leading-relaxed font-normal max-w-lg">
              WE CREATE VISUAL STORYTELLING, CONTENT AND EXPERIENCES THAT HELP BRANDS, PLACES AND COMMUNITIES CONNECT PEOPLE — IN THE REAL WORLD AND ONLINE.
            </p>

            {/* Framed Cinematic Still */}
            <div className="relative w-full aspect-[2/1] rounded-sm overflow-hidden border border-white/[0.14] group">
              <Image
                src="/images/work/approach-still.webp"
                alt="Cinematic architectural silhouette frame"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050708]/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 text-[0.625rem] font-mono tracking-widest text-white/50 uppercase">
                [ TORONTO NOCTURNE · STILL 01 ]
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
