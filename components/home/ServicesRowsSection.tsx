import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ServicesRowsSection() {
  const serviceRows = [
    {
      id: "content-brand-stories",
      title: "CONTENT & BRAND STORIES",
      description: "Short films and social content with feeling.",
      image: "/images/services/service-row-1.webp",
      alt: "Content & Brand Stories short film cinematography",
      href: "/services#content-brand-stories",
    },
    {
      id: "photography",
      title: "PHOTOGRAPHY",
      description: "People, places, products, and moments through a cinematic lens.",
      image: "/images/services/service-row-2.webp",
      alt: "Nocturne and editorial photography",
      href: "/services#photography",
    },
    {
      id: "events-community",
      title: "EVENTS & COMMUNITY",
      description: "Capturing the energy and connections that bring people together.",
      image: "/images/services/service-row-3.webp",
      alt: "Live event and cultural community gathering",
      href: "/services#events-community",
    },
    {
      id: "art-curation",
      title: "ART & CURATION",
      description: "Digital art, commissions, exhibitions, and cultural experiences.",
      image: "/images/services/service-row-4.webp",
      alt: "Fine art digital exhibition and gallery curation",
      href: "/services#art-curation",
    },
  ];

  return (
    <section className="relative w-full py-20 md:py-32 bg-[#050708] border-t border-white/[0.1]">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        {/* Section Label matching mockup: "04 WORK WITH JOURNEY STUDIO" */}
        <div className="mb-10 md:mb-14">
          <div className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-white/50">
            <span className="text-[#19BDF2] font-mono font-semibold">04</span>
            <span className="w-4 h-[1px] bg-white/20" />
            <span className="font-[family-name:var(--font-raleway)] font-bold text-white/70">WORK WITH JOURNEY STUDIO</span>
          </div>
        </div>

        {/* 4 Horizontal Rows */}
        <div className="border-t border-white/[0.1]">
          {serviceRows.map((row) => (
            <Link
              key={row.id}
              href={row.href}
              className="group block border-b border-white/[0.1] py-6 md:py-8 transition-colors duration-300 hover:bg-white/[0.02]"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 md:gap-10">
                {/* Left: Thumbnail & Titles lockup */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-5 md:gap-8 flex-grow">
                  {/* Thumbnail Image */}
                  <div className="relative w-36 sm:w-44 md:w-56 aspect-[16/9] flex-shrink-0 overflow-hidden rounded-xs border border-white/[0.1] bg-[#0C1115]">
                    <Image
                      src={row.image}
                      alt={row.alt}
                      fill
                      sizes="(max-width: 640px) 144px, 224px"
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-[#050708]/20 group-hover:bg-transparent transition-colors duration-300" />
                  </div>

                  {/* Title & Short Description */}
                  <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-10 flex-grow">
                    <h3 className="font-[family-name:var(--font-inter-tight)] font-black text-xl sm:text-2xl lg:text-3xl text-white uppercase tracking-tight group-hover:text-[#19BDF2] transition-colors duration-200 lg:w-[320px] flex-shrink-0">
                      {row.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#A7B2BA] font-normal leading-relaxed max-w-md">
                      {row.description}
                    </p>
                  </div>
                </div>

                {/* Right: Circular Arrow Icon */}
                <div className="self-end sm:self-center flex-shrink-0">
                  <div className="w-10 h-10 md:w-11 md:h-11 rounded-full border border-white/20 flex items-center justify-center text-white/80 transition-all duration-300 group-hover:border-[#19BDF2] group-hover:bg-[#19BDF2] group-hover:text-[#050708] group-hover:shadow-[0_0_16px_rgba(25,189,242,0.4)]">
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
