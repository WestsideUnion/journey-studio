"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CinematicCanvas from "@/components/ui/CinematicCanvas";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[92vh] lg:min-h-screen flex flex-col justify-center overflow-hidden pt-32 pb-16 md:pb-24 bg-[#050708]">
      {/* Background Silhouette & Skyline on Right */}
      <div className="absolute top-0 right-0 bottom-0 w-full md:w-[65%] lg:w-[58%] z-0 pointer-events-none">
        <Image
          src="/images/hero/hero-right-silhouette.webp"
          alt="Toronto nocturnal skyline with CN Tower and silhouette"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 60vw"
          className="object-cover object-center opacity-85"
        />
        {/* Soft edge gradients blending seamlessly into dark background */}
        <div className="absolute inset-y-0 left-0 w-32 md:w-56 bg-gradient-to-r from-[#050708] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#050708] to-transparent" />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#050708] to-transparent" />
      </div>

      {/* Left Deep-Black Base Overlay */}
      <div className="absolute inset-y-0 left-0 w-full md:w-1/2 bg-gradient-to-r from-[#050708] via-[#050708]/90 to-transparent z-0 pointer-events-none" />

      {/* Interactive Light Streaks & Dust Particles */}
      <CinematicCanvas intensity={0.6} />

      {/* Main Hero Content */}
      <div className="relative z-20 max-w-[1600px] w-full mx-auto px-6 md:px-12 flex flex-col justify-center">
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Main Headline */}
          <h1 className="font-[family-name:var(--font-inter-tight)] font-black text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-[-0.04em] leading-[0.92] text-white uppercase mb-8">
            STORIES
            <br />
            THAT MAKE
            <br />
            YOU FEEL
            <br />
            CONNECTED.
          </h1>

          {/* Supporting Text */}
          <p className="font-[family-name:var(--font-inter)] text-sm md:text-base lg:text-lg text-[#F4F7F8]/85 max-w-xl leading-relaxed mb-10 font-normal">
            Cinematic content and photography for brands and communities in tech, art, and wellness.
          </p>

          {/* CTA: "Explore the work" */}
          <div>
            <Link
              href="#selected-work"
              className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full border border-white/30 text-white font-[family-name:var(--font-inter-tight)] font-semibold text-xs md:text-sm tracking-wider uppercase transition-all duration-300 hover:border-[#19BDF2] hover:text-[#19BDF2] hover:shadow-[0_0_24px_rgba(25,189,242,0.35)] hover:bg-[#19BDF2]/5"
            >
              <span>Explore the work</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 text-[#19BDF2]" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
