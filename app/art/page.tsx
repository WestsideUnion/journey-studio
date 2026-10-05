import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import { artworksData } from "@/content/artworks";

export default function ArtPage() {
  const featured = artworksData[0];
  const gallery = artworksData.slice(1);

  return (
    <div className="w-full pt-36 pb-32 bg-[#050708] min-h-screen">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-16">
          <SectionLabel number="07" label="ART & VISUAL WORLDS" />
          <h1 className="font-[family-name:var(--font-inter-tight)] font-black text-5xl sm:text-6xl md:text-8xl text-white uppercase tracking-[-0.04em] leading-[0.88] mt-6 max-w-4xl">
            ART THAT
            <br />
            LIVES BEYOND
            <br />
            SCREENS
          </h1>
          <p className="font-[family-name:var(--font-inter)] text-sm md:text-base text-[#A7B2BA] uppercase tracking-wider max-w-xl mt-6">
            Fine-art photography, digital explorations, limited-edition archival prints, and custom commissions.
          </p>
        </div>

        {/* Artist Statement Banner */}
        <div className="p-8 md:p-14 border border-white/[0.12] bg-[#090D10] mb-20">
          <SectionLabel number="01" label="ARTIST STATEMENT" />
          <blockquote className="mt-6 text-lg sm:text-xl md:text-2xl text-white font-[family-name:var(--font-inter-tight)] font-semibold leading-relaxed max-w-4xl">
            &ldquo;My art practice investigates nocturnal solitude, architectural geometry, and the subtle resonance between human emotion and ambient light. I treat the camera not just as a recording instrument, but as a medium of presence.&rdquo;
          </blockquote>
          <div className="mt-6 text-xs font-mono text-[#19BDF2] tracking-widest uppercase">
            — MAHEEN · JOURNEY STUDIO
          </div>
        </div>

        {/* Featured Artwork Hero */}
        <div className="mb-24">
          <div className="flex items-center justify-between mb-8">
            <SectionLabel number="02" label="FEATURED SERIES" />
            <span className="text-xs font-mono text-white/50 tracking-wider">
              LIMITED EDITION RELEASES
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 border border-white/[0.12] bg-[#090D10] p-6 md:p-10 items-center">
            <div className="lg:col-span-7 relative aspect-[16/10] overflow-hidden rounded-xs bg-[#0C1115]">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-center hover:scale-105 transition-transform duration-700"
              />
            </div>

            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div>
                <span className="text-[0.6875rem] font-mono uppercase tracking-[0.2em] text-[#19BDF2] block mb-2">
                  {featured.year} · {featured.edition}
                </span>
                <h2 className="font-[family-name:var(--font-inter-tight)] font-black text-3xl md:text-4xl text-white uppercase tracking-tight mb-4">
                  {featured.title}
                </h2>
                <p className="text-xs md:text-sm text-[#A7B2BA] leading-relaxed mb-6">
                  {featured.description}
                </p>
                <div className="space-y-2 text-xs font-mono text-white/70 border-t border-white/[0.08] pt-4">
                  <p>MEDIUM: {featured.medium}</p>
                  <p>DIMENSIONS: {featured.dimensions}</p>
                  <p>STATUS: {featured.available ? "AVAILABLE FOR ACQUISITION" : "PRIVATE COLLECTION"}</p>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href={`/inquire?type=art&work=${featured.slug}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#19BDF2] text-[#050708] font-[family-name:var(--font-inter-tight)] font-bold text-xs uppercase tracking-wider hover:bg-[#41D7FF] transition-colors shadow-[0_0_20px_rgba(25,189,242,0.3)]"
                >
                  <span>INQUIRE ABOUT THIS WORK</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="mb-24">
          <div className="mb-8">
            <SectionLabel number="03" label="SELECTED WORKS" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {gallery.map((work) => (
              <div
                key={work.id}
                className="border border-white/[0.1] bg-[#090D10] p-5 flex flex-col justify-between space-y-4 rounded-xs group"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-xs bg-[#0C1115]">
                  <Image
                    src={work.image}
                    alt={work.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div>
                  <span className="text-[0.625rem] font-mono text-[#19BDF2] uppercase tracking-wider block mb-1">
                    {work.edition}
                  </span>
                  <h3 className="font-[family-name:var(--font-inter-tight)] font-bold text-lg text-white uppercase tracking-tight mb-2">
                    {work.title}
                  </h3>
                  <p className="text-xs text-[#A7B2BA] leading-relaxed mb-4">
                    {work.description}
                  </p>
                  <p className="text-[0.6875rem] font-mono text-white/50">
                    {work.medium} · {work.dimensions}
                  </p>
                </div>

                <div className="pt-2 border-t border-white/[0.08]">
                  <Link
                    href={`/inquire?type=art&work=${work.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-[#19BDF2] hover:text-[#41D7FF] transition-colors"
                  >
                    <span>COLLECTOR INQUIRY</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Collector Commission Banner */}
        <div className="p-10 md:p-14 border border-white/[0.12] bg-[#0C1115] flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="font-[family-name:var(--font-inter-tight)] font-black text-2xl md:text-3xl text-white uppercase tracking-tight mb-2">
              COMMISSION AN ORIGINAL WORK
            </h3>
            <p className="text-xs md:text-sm text-[#A7B2BA] max-w-lg leading-relaxed">
              For private collectors, architects, and institutions seeking site-specific photographic works or digital installations.
            </p>
          </div>
          <Link
            href="/inquire?type=commission"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#050708] font-[family-name:var(--font-inter-tight)] font-bold text-xs uppercase tracking-wider hover:bg-[#19BDF2] transition-colors"
          >
            <span>COMMISSION INQUIRY</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
