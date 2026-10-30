import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import { getAboutPageData } from "@/lib/data/aboutPage";

export const dynamic = "force-dynamic";

export default async function AboutPage() {
  const about = await getAboutPageData();
  const headingLines = about.heroHeading.split("\n");

  return (
    <div className="w-full pt-36 pb-32 bg-[#050708] min-h-screen">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-16">
          <SectionLabel number="04" label="ABOUT & PRACTICE" />
          <h1 className="font-[family-name:var(--font-inter-tight)] font-black text-5xl sm:text-6xl md:text-8xl text-white uppercase tracking-[-0.04em] leading-[0.88] mt-6 max-w-5xl">
            {headingLines.map((line, idx) => (
              <React.Fragment key={idx}>
                {line}
                {idx < headingLines.length - 1 && <br />}
              </React.Fragment>
            ))}
          </h1>
          <p className="font-[family-name:var(--font-inter)] text-sm md:text-base text-[#19BDF2] font-mono uppercase tracking-[0.2em] mt-6">
            {about.heroTagline}
          </p>
        </div>

        {/* Environmental Portrait / Atmosphere Visual */}
        <div className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-xs border border-white/[0.12] bg-[#0C1115] mb-20 group">
          <Image
            src={about.heroImage.url}
            alt={about.heroImage.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050708] via-transparent to-transparent opacity-80" />
          {about.heroImageCaption && (
            <div className="absolute bottom-6 left-6 text-xs font-mono text-white/50 tracking-wider">
              {about.heroImageCaption}
            </div>
          )}
        </div>

        {/* Biography & Studio Ethos */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-20 border-b border-white/[0.12] mb-20">
          <div className="lg:col-span-4 space-y-6">
            <div>
              <SectionLabel number="01" label="THE STUDIO" />
              <h2 className="font-[family-name:var(--font-inter-tight)] font-bold text-2xl md:text-3xl text-white uppercase tracking-tight mt-4">
                {about.studioHeading}
              </h2>
            </div>

            {about.portraitImage?.url && (
              <div className="relative w-full aspect-[4/5] overflow-hidden rounded-xs border border-white/[0.12] bg-[#0C1115]">
                <Image
                  src={about.portraitImage.url}
                  alt={about.portraitImage.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover object-center"
                />
              </div>
            )}
          </div>

          <div className="lg:col-span-8 space-y-6 text-sm md:text-base text-[#A7B2BA] leading-relaxed">
            {about.bioLead && (
              <p className="text-white text-lg md:text-xl font-[family-name:var(--font-inter-tight)] font-normal">
                {about.bioLead}
              </p>
            )}
            {about.bioParagraphs.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* Disciplines Grid */}
        <div className="pb-20 border-b border-white/[0.12] mb-20">
          <div className="mb-10">
            <SectionLabel number="02" label="PRACTICE AREAS" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {about.disciplines.map((d, idx) => (
              <div
                key={`${d.title}-${idx}`}
                className="p-6 border border-white/[0.1] bg-[#090D10] rounded-xs flex flex-col justify-between space-y-4"
              >
                {d.image && (
                  <div className="relative w-full aspect-[16/10] overflow-hidden rounded-xs bg-[#0C1115]">
                    <Image
                      src={d.image}
                      alt={d.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover object-center"
                    />
                  </div>
                )}
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

        {/* Verified Credentials & History */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-20 border-b border-white/[0.12] mb-20">
          <div className="lg:col-span-4">
            <SectionLabel number="03" label="RECORD" />
            <h2 className="font-[family-name:var(--font-inter-tight)] font-bold text-2xl text-white uppercase tracking-tight mt-4">
              {about.recordHeading}
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-6">
            <div className="p-6 border border-white/[0.08] bg-[#090D10] rounded-xs font-mono text-xs text-white/60">
              <span className="text-[#19BDF2] block mb-2">
                {about.recordLabel}
              </span>
              <ul className="space-y-2 text-white/80">
                {about.exhibitions.map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="p-10 md:p-14 border border-white/[0.12] bg-[#0C1115] text-center flex flex-col items-center">
          <h3 className="font-[family-name:var(--font-inter-tight)] font-black text-3xl md:text-5xl text-white uppercase tracking-tight mb-4">
            {about.ctaHeading}
          </h3>
          <p className="text-xs md:text-sm text-[#A7B2BA] max-w-lg mb-8 leading-relaxed">
            {about.ctaDescription}
          </p>
          <Link
            href="/inquire"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#19BDF2] text-[#050708] font-[family-name:var(--font-inter-tight)] font-bold text-xs uppercase tracking-wider hover:bg-[#41D7FF] transition-all shadow-[0_0_24px_rgba(25,189,242,0.35)]"
          >
            <span>{about.ctaButtonText}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
