import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";

export default function AboutPage() {
  const disciplines = [
    { title: "Photography", desc: "Nocturne cityscapes, architecture, intimate portraiture, and editorial visual narrative." },
    { title: "Filmmaking", desc: "Cinematic short films, brand reels, atmospheric event cinema, and documentary visual work." },
    { title: "Creative Direction", desc: "Translating concepts into holistic visual worlds, tone of voice, and aesthetic identity." },
    { title: "Social Content", desc: "Platform-native storytelling that feels culture-forward, natural, and human." },
    { title: "Community Building", desc: "Curating cultural gatherings, salons, exhibitions, and spaces for creative collision." },
    { title: "Art Practice", desc: "Limited-edition archival prints, digital explorations, and collector commissions." },
  ];

  return (
    <div className="w-full pt-36 pb-32 bg-[#050708] min-h-screen">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-16">
          <SectionLabel number="04" label="ABOUT & PRACTICE" />
          <h1 className="font-[family-name:var(--font-inter-tight)] font-black text-5xl sm:text-6xl md:text-8xl text-white uppercase tracking-[-0.04em] leading-[0.88] mt-6 max-w-5xl">
            STORIES
            <br />
            THAT HELP PEOPLE
            <br />
            FEEL & CONNECT
          </h1>
          <p className="font-[family-name:var(--font-inter)] text-sm md:text-base text-[#19BDF2] font-mono uppercase tracking-[0.2em] mt-6">
            ARTIST · PHOTOGRAPHER · CREATIVE DIRECTOR · COMMUNITY BUILDER
          </p>
        </div>

        {/* Environmental Portrait / Atmosphere Visual */}
        <div className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-xs border border-white/[0.12] bg-[#0C1115] mb-20 group">
          <Image
            src="/images/hero/hero-bg.webp"
            alt="Maheen creative practice environmental portrait"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050708] via-transparent to-transparent opacity-80" />
          <div className="absolute bottom-6 left-6 text-xs font-mono text-white/50 tracking-wider">
            [ MAHEEN // JOURNEY STUDIO · TORONTO, CANADA ]
          </div>
        </div>

        {/* Biography & Studio Ethos */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-20 border-b border-white/[0.12] mb-20">
          <div className="lg:col-span-4">
            <SectionLabel number="01" label="THE STUDIO" />
            <h2 className="font-[family-name:var(--font-inter-tight)] font-bold text-2xl md:text-3xl text-white uppercase tracking-tight mt-4">
              POINT OF VIEW
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-6 text-sm md:text-base text-[#A7B2BA] leading-relaxed">
            <p className="text-white text-lg md:text-xl font-[family-name:var(--font-inter-tight)] font-normal">
              Journey Studio was founded by Maheen to bridge the spaces between commercial visual storytelling, fine art, and human community.
            </p>
            <p>
              Rather than operating like a traditional ad agency defined by rigid deliverables and corporate jargon, Journey Studio approaches every project through the lens of genuine culture and emotional connection. The work is observant, cinematic, and deeply human before it is commercial.
            </p>
            <p>
              Based in Toronto and collaborating globally, the studio works with brands, founders, and cultural platforms who believe in the enduring power of meaningful stories.
            </p>
          </div>
        </div>

        {/* Disciplines Grid */}
        <div className="pb-20 border-b border-white/[0.12] mb-20">
          <div className="mb-10">
            <SectionLabel number="02" label="PRACTICE AREAS" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {disciplines.map((d, idx) => (
              <div
                key={d.title}
                className="p-6 border border-white/[0.1] bg-[#090D10] rounded-xs flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono text-[#19BDF2] tracking-widest block mb-2">
                    0{idx + 1}
                  </span>
                  <h3 className="font-[family-name:var(--font-inter-tight)] font-bold text-xl text-white uppercase tracking-tight mb-2">
                    {d.title}
                  </h3>
                  <p className="text-xs text-[#A7B2BA] leading-relaxed">
                    {d.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Verified Credentials & History (Honoring AGENTS.md rule on placeholders) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-20 border-b border-white/[0.12] mb-20">
          <div className="lg:col-span-4">
            <SectionLabel number="03" label="RECORD" />
            <h2 className="font-[family-name:var(--font-inter-tight)] font-bold text-2xl text-white uppercase tracking-tight mt-4">
              EXHIBITIONS & COLLABORATIONS
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-6">
            <div className="p-6 border border-white/[0.08] bg-[#090D10] rounded-xs font-mono text-xs text-white/60">
              <span className="text-[#19BDF2] block mb-2">[VERIFIED EXHIBITIONS & RELEASES]</span>
              <ul className="space-y-2 text-white/80">
                <li>• 2024 — Nocturne Series: Fine Art Photography Print Release</li>
                <li>• 2024 — Ideas Are Better Together: Cultural Salon Series (Toronto)</li>
                <li>• 2023 — Collective Pulse: Community Visual Archive Exhibition</li>
                <li>• [ADD VERIFIED CLIENT LOGOS & TALKS]</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="p-10 md:p-14 border border-white/[0.12] bg-[#0C1115] text-center flex flex-col items-center">
          <h3 className="font-[family-name:var(--font-inter-tight)] font-black text-3xl md:text-5xl text-white uppercase tracking-tight mb-4">
            READY TO COLLABORATE?
          </h3>
          <p className="text-xs md:text-sm text-[#A7B2BA] max-w-lg mb-8 leading-relaxed">
            Whether you are commissioning a film, launching a visual brand identity, or booking an art acquisition.
          </p>
          <Link
            href="/inquire"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#19BDF2] text-[#050708] font-[family-name:var(--font-inter-tight)] font-bold text-xs uppercase tracking-wider hover:bg-[#41D7FF] transition-all shadow-[0_0_24px_rgba(25,189,242,0.35)]"
          >
            <span>START A PROJECT</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
