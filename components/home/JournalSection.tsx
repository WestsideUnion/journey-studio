import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import { journalPostsData } from "@/content/journal";

export default function JournalSection() {
  return (
    <section className="relative w-full py-24 md:py-32 bg-[#050708] border-t border-white/[0.12]">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-16">
          <SectionLabel number="08" label="JOURNAL" />
          <Link
            href="/journal"
            className="group inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#19BDF2] hover:text-[#41D7FF] transition-colors"
          >
            <span>READ MORE</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 4 Cards Row matching mockup */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {journalPostsData.map((post) => (
            <Link
              key={post.slug}
              href={`/journal/${post.slug}`}
              className="group flex flex-col space-y-4"
            >
              {/* Image Thumbnail */}
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xs border border-white/[0.1] bg-[#0C1115]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#050708]/20 group-hover:bg-transparent transition-colors duration-300" />
              </div>

              {/* Title & Subtitle */}
              <div>
                <h3 className="font-[family-name:var(--font-inter-tight)] font-black text-lg md:text-xl text-white uppercase tracking-tight group-hover:text-[#19BDF2] transition-colors mb-1.5">
                  {post.title}
                </h3>
                <p className="text-[0.6875rem] font-mono text-[#A7B2BA] uppercase tracking-wider leading-relaxed">
                  {post.subtitle}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
