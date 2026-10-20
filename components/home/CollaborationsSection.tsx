import React from "react";
import Image from "next/image";
import { brandsData } from "@/content/brands";

export default function CollaborationsSection() {
  const rowOneBrands = brandsData.filter((b) => b.row === 1);
  const rowTwoBrands = brandsData.filter((b) => b.row === 2);

  return (
    <section className="relative w-full py-16 md:py-24 bg-[#050708] border-t border-white/[0.1]">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        {/* Section Divider Header with Centered Label matching mockup */}
        <div className="flex items-center justify-center gap-4 mb-12 md:mb-16">
          <span className="flex-grow h-[1px] bg-white/[0.12]" />
          <h2 className="text-[0.6875rem] md:text-xs font-[family-name:var(--font-raleway)] font-bold uppercase tracking-[0.25em] text-white/50 text-center px-4 shrink-0">
            SELECTED COLLABORATIONS
          </h2>
          <span className="flex-grow h-[1px] bg-white/[0.12]" />
        </div>

        {/* Brand Grid: Two Rows with consistent visual sizing and spacing */}
        <div className="flex flex-col space-y-6 md:space-y-8">
          {/* Row 1: Active Brands (Tim's, FLOJO, Superteam Canada, TRIEC) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-14 items-center justify-items-center">
            {/* Tim's */}
            <div className="h-14 w-full flex items-center justify-center px-4 transition-opacity duration-300 opacity-80 hover:opacity-100">
              <div className="relative w-28 md:w-36 h-10 flex items-center justify-center">
                <Image
                  src="/images/brands/tims-crisp.png"
                  alt="Tim's brand collaboration"
                  fill
                  sizes="160px"
                  className="object-contain object-center filter drop-shadow-[0_0_12px_rgba(255,255,255,0.2)]"
                />
              </div>
            </div>

            {/* FLOJO */}
            <div className="h-14 w-full flex items-center justify-center px-4 transition-opacity duration-300 opacity-80 hover:opacity-100">
              <span className="font-[family-name:var(--font-inter-tight)] font-medium text-2xl md:text-3xl text-white tracking-[0.35em] text-center select-none">
                FLOJO
              </span>
            </div>

            {/* Superteam Canada */}
            <div className="h-14 w-full flex items-center justify-center px-4 transition-opacity duration-300 opacity-80 hover:opacity-100">
              <div className="flex flex-col items-center justify-center leading-none text-center select-none">
                <span className="font-[family-name:var(--font-inter-tight)] font-black text-xl md:text-2xl text-white tracking-tight">
                  Superteam
                </span>
                <span className="font-[family-name:var(--font-inter-tight)] font-semibold text-xs md:text-sm text-white/90 tracking-[0.16em] mt-0.5 uppercase">
                  Canada
                </span>
              </div>
            </div>

            {/* TRIEC */}
            <div className="h-14 w-full flex items-center justify-center px-4 transition-opacity duration-300 opacity-80 hover:opacity-100">
              <span className="font-[family-name:var(--font-inter-tight)] font-black text-2xl md:text-3xl text-white tracking-[0.06em] text-center select-none">
                TRIEC
              </span>
            </div>
          </div>

          {/* Row 2: Reserved Space for Future Brand Additions */}
          {/* On desktop: maintains subtle two-row height matching mockup; on mobile: reduced to avoid excessive gap */}
          <div className="hidden md:grid md:grid-cols-4 gap-8 md:gap-14 items-center justify-items-center h-12">
            {rowTwoBrands.length > 0 ? (
              rowTwoBrands.map((brand) => (
                <div
                  key={brand.id}
                  className="h-12 w-full flex items-center justify-center px-4 opacity-80 hover:opacity-100 transition-opacity"
                >
                  <span className="font-[family-name:var(--font-inter-tight)] font-bold text-lg text-white tracking-wider">
                    {brand.name}
                  </span>
                </div>
              ))
            ) : (
              <div className="col-span-4 h-6 w-full" aria-hidden="true" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
