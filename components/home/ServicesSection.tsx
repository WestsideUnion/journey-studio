import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import { servicesData } from "@/content/services";

export default function ServicesSection() {
  // Show top 4 services as in the mockup
  const featuredServices = servicesData.slice(0, 4);

  return (
    <section className="relative w-full py-24 md:py-32 bg-[#050708] border-t border-white/[0.12]">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-16">
          <SectionLabel number="03" label="SERVICES" />
          <Link
            href="/services"
            className="text-xs font-mono uppercase tracking-[0.2em] text-[#19BDF2] hover:text-[#41D7FF] transition-colors"
          >
            VIEW ALL CAPABILITIES →
          </Link>
        </div>

        {/* 4-Card Hairline Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-l border-t border-white/[0.12]">
          {featuredServices.map((service) => (
            <Link
              key={service.id}
              href={service.href}
              className="group relative flex flex-col justify-between p-6 md:p-8 border-r border-b border-white/[0.12] bg-[#050708] transition-all duration-300 hover:bg-[#090D10]"
            >
              {/* Image with subtle hover zoom */}
              <div className="relative w-full aspect-[4/5] overflow-hidden rounded-xs mb-6 border border-white/[0.08] bg-[#0C1115]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050708]/80 via-transparent to-transparent opacity-60" />
                <span className="absolute top-3 left-3 text-[0.625rem] font-mono text-white/50 tracking-wider">
                  {service.index}
                </span>
              </div>

              {/* Text Info */}
              <div className="flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="font-[family-name:var(--font-inter-tight)] font-black text-xl md:text-2xl text-white uppercase tracking-tight mb-3 group-hover:text-[#19BDF2] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs md:text-sm text-[#A7B2BA] leading-relaxed font-normal">
                    {service.shortDescription}
                  </p>
                </div>

                {/* Arrow */}
                <div className="pt-6 flex items-center justify-between">
                  <span className="w-6 h-[1px] bg-white/20 group-hover:w-10 group-hover:bg-[#19BDF2] transition-all duration-300" />
                  <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-[#19BDF2] group-hover:translate-x-1 transition-all duration-200" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
