import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import { journalPostsData } from "@/content/journal";

export default function JournalPage() {
  return (
    <div className="w-full pt-36 pb-32 bg-[#050708] min-h-screen">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-20">
          <SectionLabel number="08" label="JOURNAL & PROCESS" />
          <h1 className="font-[family-name:var(--font-inter-tight)] font-black text-5xl sm:text-6xl md:text-8xl text-white uppercase tracking-[-0.04em] leading-[0.88] mt-6 max-w-4xl">
            NOTES ON
            <br />
            CULTURE, LIGHT &
            <br />
            CREATIVE LIFE
          </h1>
          <p className="font-[family-name:var(--font-inter)] text-sm md:text-base text-[#A7B2BA] uppercase tracking-wider max-w-xl mt-6">
            Reflections from the field, production breakdowns, and thoughts on visual storytelling.
          </p>
        </div>

        {/* Journal Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {journalPostsData.map((post) => (
            <Link
              key={post.slug}
              href={`/journal/${post.slug}`}
              className="group border border-white/[0.1] bg-[#090D10] p-6 rounded-xs flex flex-col justify-between space-y-6 transition-all duration-300 hover:border-[#19BDF2]/50"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-xs bg-[#0C1115]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#050708]/80 backdrop-blur-sm text-[0.6rem] font-mono text-[#19BDF2] uppercase tracking-wider">
                  {post.category}
                </span>
              </div>

              <div>
                <div className="flex items-center gap-3 text-xs font-mono text-white/40 mb-2">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>

                <h2 className="font-[family-name:var(--font-inter-tight)] font-black text-2xl md:text-3xl text-white uppercase tracking-tight group-hover:text-[#19BDF2] transition-colors mb-3">
                  {post.subtitle}
                </h2>

                <p className="text-xs md:text-sm text-[#A7B2BA] leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-widest text-[#19BDF2] group-hover:underline">
                  READ ESSAY
                </span>
                <ArrowRight className="w-4 h-4 text-[#19BDF2] transition-transform duration-200 group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
