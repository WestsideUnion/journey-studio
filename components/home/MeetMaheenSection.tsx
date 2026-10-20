import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function MeetMaheenSection() {
  return (
    <section className="relative w-full py-20 md:py-32 bg-[#050708] border-t border-white/[0.1]">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image of Maheen */}
          <div className="lg:col-span-7">
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] overflow-hidden rounded-xs border border-white/[0.12] bg-[#0C1115] group">
              <Image
                src="/images/about/meet-maheen.webp"
                alt="Maheen, Toronto-based artist, photographer and founder of Journey Studio"
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050708]/50 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Right Column: Introduction */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6 lg:pl-4">
            {/* Index label matching mockup: "03" */}
            <span className="text-xs font-mono text-white/40 tracking-[0.25em] block">
              03
            </span>

            {/* Heading */}
            <h2 className="font-[family-name:var(--font-inter-tight)] font-black text-4xl sm:text-5xl lg:text-6xl text-white uppercase tracking-[-0.03em] leading-[0.92]">
              MEET
              <br />
              MAHEEN
            </h2>

            {/* Main Introduction Copy */}
            <p className="font-[family-name:var(--font-inter)] text-sm md:text-base text-[#F4F7F8]/80 leading-relaxed font-normal">
              I’m Maheen, a Toronto-based artist, photographer, and content creator. Journey Studio brings together my love for cinematic storytelling, art, and human connection.
            </p>

            {/* Supporting Line */}
            <p className="font-[family-name:var(--font-raleway)] text-sm md:text-base text-[#A7B2BA] font-medium tracking-[0.04em] leading-relaxed">
              Creating across tech, art, and wellness.
            </p>

            {/* Link: More about me */}
            <div className="pt-2">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 font-[family-name:var(--font-raleway)] font-bold text-xs md:text-sm text-white hover:text-[#19BDF2] uppercase tracking-[0.14em] transition-colors"
              >
                <span>MORE ABOUT ME</span>
                <ArrowRight className="w-4 h-4 text-[#19BDF2] transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
