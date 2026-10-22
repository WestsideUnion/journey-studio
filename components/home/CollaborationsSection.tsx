import React from "react";
import Image from "next/image";
import { brandsData, BrandItem } from "@/content/brands";

interface CollaborationsSectionProps {
  brands?: BrandItem[];
}

export default function CollaborationsSection({
  brands = brandsData,
}: CollaborationsSectionProps) {
  // Top-tier marquee brands prioritized as requested
  const headlineBrands = brands.filter((b) => b.row === 1);
  // Secondary cultural & ecosystem partners
  const partnerBrands = brands.filter((b) => b.row === 2);

  return (
    <section className="relative w-full py-16 md:py-24 bg-[#050708] border-t border-white/[0.1] overflow-hidden">
      {/* Subtle ambient background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-500/[0.03] blur-[120px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="relative max-w-[1600px] mx-auto px-6 md:px-12">
        {/* Section Divider Header with Centered Label */}
        <div className="flex items-center justify-center gap-4 mb-10 md:mb-14">
          <span className="flex-grow h-[1px] bg-gradient-to-r from-transparent via-white/[0.12] to-white/[0.12]" />
          <div className="flex items-center gap-2.5 px-4 shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_#3b82f6]" />
            <h2 className="text-[0.6875rem] md:text-xs font-[family-name:var(--font-raleway)] font-bold uppercase tracking-[0.28em] text-white/60 text-center">
              SELECTED COLLABORATIONS
            </h2>
          </div>
          <span className="flex-grow h-[1px] bg-gradient-to-l from-transparent via-white/[0.12] to-white/[0.12]" />
        </div>

        {/* ─── TIER 1: TOP & PROMINENT HEADLINE COLLABORATIONS ─── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8 items-stretch mb-10 md:mb-14">
          {headlineBrands.map((brand, idx) => (
            <div
              key={brand.id}
              className="group relative flex flex-col items-center justify-center p-8 md:p-10 rounded-sm border border-white/[0.09] bg-gradient-to-b from-white/[0.025] to-white/[0.005] hover:border-blue-500/40 hover:bg-white/[0.04] transition-all duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.4)] hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]"
            >
              {/* Subtle top index indicator */}
              <div className="absolute top-3 left-4 flex items-center gap-2">
                <span className="text-[0.625rem] font-mono tracking-widest text-white/30 group-hover:text-blue-400 transition-colors">
                  0{idx + 1}
                </span>
                <span className="w-1 h-1 rounded-full bg-white/20 group-hover:bg-blue-400 transition-colors" />
              </div>

              {/* Brand Logo Container with Prominent Sizing */}
              <div className="relative w-full h-16 md:h-20 flex items-center justify-center my-2">
                {brand.logoSrc ? (
                  <div className="relative w-full h-full max-w-[240px] flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                    <Image
                      src={brand.logoSrc}
                      alt={brand.alt}
                      fill
                      sizes="(max-width: 768px) 260px, 280px"
                      className={`object-contain object-center filter drop-shadow-[0_0_16px_rgba(255,255,255,0.15)] group-hover:drop-shadow-[0_0_20px_rgba(59,130,246,0.35)] transition-all duration-300 ${
                        brand.id === "fujifilm" ? "invert hue-rotate-180" : ""
                      }`}
                      priority
                    />
                  </div>
                ) : (
                  <span className="font-[family-name:var(--font-inter-tight)] font-black text-2xl text-white tracking-wide">
                    {brand.name}
                  </span>
                )}
              </div>

              {/* Subtle Editorial Meta Description */}
              {brand.description && (
                <p className="mt-2 text-[0.6875rem] font-[family-name:var(--font-raleway)] text-white/45 tracking-wider uppercase text-center group-hover:text-white/70 transition-colors line-clamp-1">
                  {brand.description}
                </p>
              )}

              {/* Bottom Hairline Highlight */}
              <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/0 group-hover:via-blue-500/50 to-transparent transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* ─── TIER 2: CULTURAL & ECOSYSTEM PARTNERS ─── */}
        <div className="pt-4 border-t border-white/[0.06]">
          <div className="flex items-center justify-between mb-6">
            <span className="text-[0.625rem] font-mono tracking-widest text-white/30 uppercase">
              // Creative & Community Partners
            </span>
            <span className="text-[0.625rem] font-mono tracking-widest text-white/20 uppercase hidden sm:inline">
              Selected Roster
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 items-center justify-items-center">
            {partnerBrands.map((brand) => (
              <div
                key={brand.id}
                className="h-16 w-full flex items-center justify-center px-3 py-2 rounded-sm border border-transparent hover:border-white/[0.08] hover:bg-white/[0.02] transition-all duration-300 opacity-80 hover:opacity-100 group"
              >
                {brand.logoSrc ? (
                  <div className="relative w-full max-w-[140px] sm:max-w-[150px] h-9 sm:h-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                    <Image
                      src={brand.logoSrc}
                      alt={brand.alt}
                      fill
                      sizes="(max-width: 768px) 150px, 180px"
                      className={`object-contain object-center filter drop-shadow-[0_0_10px_rgba(255,255,255,0.08)] group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all duration-300 ${
                        brand.id === "superrare" ? "brightness-0 invert" : ""
                      }`}
                    />
                  </div>
                ) : (
                  <span className="font-[family-name:var(--font-inter-tight)] font-bold text-sm sm:text-base text-white/80 group-hover:text-white tracking-wider text-center select-none">
                    {brand.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
