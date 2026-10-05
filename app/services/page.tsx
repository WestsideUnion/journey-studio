import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import { servicesData } from "@/content/services";

export default function ServicesPage() {
  return (
    <div className="w-full pt-36 pb-32 bg-[#050708] min-h-screen">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-20">
          <SectionLabel number="03" label="CAPABILITIES" />
          <h1 className="font-[family-name:var(--font-inter-tight)] font-black text-5xl sm:text-6xl md:text-8xl text-white uppercase tracking-[-0.04em] leading-[0.88] mt-6 max-w-4xl">
            CREATIVE
            <br />
            SERVICES & DISCIPLINES
          </h1>
          <p className="font-[family-name:var(--font-inter)] text-sm md:text-base text-[#A7B2BA] uppercase tracking-wider max-w-xl mt-6">
            Different formats. One uncompromising visual language. From brand campaigns to community programming.
          </p>
        </div>

        {/* Detailed Service Rows */}
        <div className="space-y-16">
          {servicesData.map((service, idx) => (
            <div
              key={service.id}
              id={service.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 p-8 md:p-12 border border-white/[0.12] bg-[#090D10] rounded-xs items-center"
            >
              {/* Image Preview */}
              <div className="lg:col-span-4 relative aspect-[4/3] lg:aspect-square overflow-hidden rounded-xs border border-white/[0.1] bg-[#0C1115]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 30vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050708]/80 via-transparent to-transparent pointer-events-none" />
                <span className="absolute top-3 left-3 text-[0.625rem] font-mono text-white/50 tracking-widest">
                  SERVICE // {service.index}
                </span>
              </div>

              {/* Service Details */}
              <div className="lg:col-span-8 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[#19BDF2] font-mono text-xs font-semibold">
                      0{idx + 1}
                    </span>
                    <span className="w-8 h-[1px] bg-white/20" />
                  </div>
                  <h2 className="font-[family-name:var(--font-inter-tight)] font-black text-3xl md:text-4xl text-white uppercase tracking-tight mb-4">
                    {service.title}
                  </h2>
                  <p className="text-sm md:text-base text-[#F4F7F8] font-normal leading-relaxed mb-4">
                    {service.shortDescription}
                  </p>
                  <p className="text-xs md:text-sm text-[#A7B2BA] leading-relaxed">
                    {service.fullDescription}
                  </p>
                </div>

                {/* Deliverables */}
                <div className="pt-4 border-t border-white/[0.08]">
                  <span className="text-[0.6875rem] font-mono uppercase tracking-[0.2em] text-[#19BDF2] block mb-3 font-semibold">
                    KEY DELIVERABLES
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {service.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2.5 text-xs text-white/80 font-mono">
                        <Check className="w-3.5 h-3.5 text-[#19BDF2] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Link */}
                <div className="pt-4">
                  <Link
                    href={`/inquire?service=${service.id}`}
                    className="group inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#19BDF2] hover:text-[#41D7FF] transition-colors"
                  >
                    <span>INQUIRE ABOUT THIS SERVICE</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-20 p-10 md:p-14 border border-white/[0.12] bg-[#0C1115] text-center flex flex-col items-center">
          <h3 className="font-[family-name:var(--font-inter-tight)] font-black text-3xl md:text-5xl text-white uppercase tracking-tight mb-4">
            LET&apos;S DEFINE YOUR STORY
          </h3>
          <p className="text-xs md:text-sm text-[#A7B2BA] max-w-lg mb-8 leading-relaxed">
            We collaborate with select founders, brands, and creative partners who value authentic storytelling and cinematic visual worlds.
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
