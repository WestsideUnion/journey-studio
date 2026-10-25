import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ClosingInviteSectionProps {
  backgroundImage?: string;
  altText?: string;
  opacity?: number;
}

export default function ClosingInviteSection({
  backgroundImage = "/images/hero/hero-right-silhouette.webp",
  altText = "Have a story in mind? Journey Studio collaboration",
  opacity = 85,
}: ClosingInviteSectionProps = {}) {
  return (
    <section className="relative w-full py-24 md:py-36 bg-[#050708] border-t border-white/[0.1] overflow-hidden">
      {/* Background Silhouette on Right */}
      <div className="absolute top-0 right-0 bottom-0 w-full md:w-[65%] lg:w-[58%] z-0 pointer-events-none">
        <Image
          src={backgroundImage}
          alt={altText}
          fill
          sizes="(max-width: 768px) 100vw, 60vw"
          className="object-cover object-center"
          style={{ opacity: opacity / 100 }}
        />
        {/* Soft edge gradients blending seamlessly */}
        <div className="absolute inset-y-0 left-0 w-32 md:w-56 bg-gradient-to-r from-[#050708] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#050708] to-transparent" />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#050708] to-transparent" />
      </div>

      {/* Left Deep-Black Base Overlay */}
      <div className="absolute inset-y-0 left-0 w-full md:w-1/2 bg-gradient-to-r from-[#050708] via-[#050708]/90 to-transparent z-0 pointer-events-none" />

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="max-w-2xl">
          {/* Section Number matching mockup: "06" */}
          <span className="text-xs font-mono text-white/40 tracking-[0.25em] block mb-6">
            06
          </span>

          {/* Heading */}
          <h2 className="font-[family-name:var(--font-inter-tight)] font-black text-4xl sm:text-6xl md:text-7xl text-white uppercase tracking-[-0.03em] leading-[0.92] mb-10">
            HAVE A
            <br />
            STORY IN MIND?
          </h2>

          {/* Pill Button: "Let's create together" linking to inquiry flow */}
          <div>
            <Link
              href="/inquire"
              className="group inline-flex items-center gap-3 px-8 py-3.5 rounded-full border border-white/30 text-white font-[family-name:var(--font-raleway)] font-bold text-xs md:text-sm tracking-[0.12em] uppercase transition-all duration-300 hover:border-[#19BDF2] hover:text-[#19BDF2] hover:shadow-[0_0_24px_rgba(25,189,242,0.35)] hover:bg-[#19BDF2]/5"
            >
              <span>Let&apos;s create together</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 text-[#19BDF2]" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
