import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import { projectsData } from "@/content/projects";

export default function SelectedWorkSection() {
  const featured = projectsData[0];
  const galleryThumbs = projectsData.slice(1, 5);

  return (
    <section className="relative w-full py-24 md:py-32 bg-[#050708] border-t border-white/[0.12]">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <SectionLabel number="04" label="SELECTED WORK" />
          <Link
            href="/work"
            className="group inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#19BDF2] hover:text-[#41D7FF] transition-colors"
          >
            <span>VIEW ALL WORK</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Top Feature: Wide Still + Editorial Typography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch mb-6">
          {/* Main Wide Image Still */}
          <Link
            href={`/work/${featured.slug}`}
            className="group relative lg:col-span-8 aspect-[16/9] md:aspect-[21/10] overflow-hidden rounded-xs border border-white/[0.12] bg-[#0C1115]"
          >
            <Image
              src={featured.coverImage}
              alt={featured.title}
              fill
              sizes="(max-width: 1024px) 100vw, 66vw"
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050708]/80 via-transparent to-transparent opacity-80" />
            
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <div>
                <span className="text-[0.625rem] font-mono text-[#19BDF2] uppercase tracking-[0.2em] block mb-1">
                  FEATURED WORK · {featured.year}
                </span>
                <h3 className="font-[family-name:var(--font-inter-tight)] font-black text-2xl md:text-3xl text-white uppercase tracking-tight">
                  {featured.title}
                </h3>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white group-hover:bg-[#19BDF2] group-hover:text-[#050708] transition-colors">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </div>
          </Link>

          {/* Right Editorial Typography Lockup */}
          <div className="lg:col-span-4 p-8 md:p-10 border border-white/[0.12] bg-[#090D10]/50 flex flex-col justify-between">
            <div>
              <span className="text-[0.625rem] font-mono text-white/40 tracking-[0.25em] uppercase block mb-4">
                VISUAL ANTHOLOGY
              </span>
              <h3 className="font-[family-name:var(--font-inter-tight)] font-black text-4xl sm:text-5xl lg:text-6xl text-white uppercase tracking-[-0.03em] leading-[0.9]">
                CITY
                <br />
                PEOPLE
                <br />
                PLACES
                <br />
                STORIES
              </h3>
            </div>

            <div className="pt-8 flex items-center justify-between border-t border-white/[0.08]">
              <span className="text-xs text-[#A7B2BA] uppercase font-mono tracking-wider">
                EXPLORE PROJECTS
              </span>
              <div className="flex items-center space-x-2 text-[#19BDF2]">
                <ArrowRight className="w-5 h-5 animate-pulse" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row: 4 Mixed Thumbs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {galleryThumbs.map((item, idx) => (
            <Link
              key={item.slug}
              href={`/work/${item.slug}`}
              className="group flex flex-col space-y-3"
            >
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xs border border-white/[0.1] bg-[#0C1115]">
                <Image
                  src={item.coverImage}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#050708]/30 group-hover:bg-transparent transition-colors duration-300" />
                <span className="absolute top-2.5 left-2.5 text-[0.6rem] font-mono text-white/60 tracking-wider">
                  0{idx + 2}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-[family-name:var(--font-inter-tight)] font-bold text-sm text-white uppercase tracking-tight group-hover:text-[#19BDF2] transition-colors">
                    {item.title}
                  </h4>
                  <span className="text-[0.6875rem] text-[#A7B2BA] font-mono">
                    {item.category}
                  </span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-white/30 group-hover:text-[#19BDF2] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
