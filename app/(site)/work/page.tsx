"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import { projectsData } from "@/content/projects";

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState("ALL");

  const categories = [
    "ALL",
    "Photo + Film",
    "Creative Direction",
    "Social + Content",
    "Community",
    "Art",
  ];

  const filteredProjects =
    activeFilter === "ALL"
      ? projectsData
      : projectsData.filter((p) => p.category === activeFilter);

  return (
    <div className="w-full pt-36 pb-32 bg-[#050708] min-h-screen">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-12">
          <SectionLabel number="INDEX" label="SELECTED WORK" />
          <h1 className="font-[family-name:var(--font-inter-tight)] font-black text-5xl sm:text-6xl md:text-8xl text-white uppercase tracking-[-0.04em] leading-[0.88] mt-6 max-w-4xl">
            SELECTED
            <br />
            STORIES & WORK
          </h1>
          <p className="font-[family-name:var(--font-inter)] text-sm md:text-base text-[#A7B2BA] uppercase tracking-wider max-w-xl mt-6">
            From intimate portraiture and nocturne studies to creative direction and cultural gatherings.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 md:gap-3 py-6 mb-12 border-y border-white/[0.1]">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-200 ${
                activeFilter === cat
                  ? "bg-[#19BDF2] text-[#050708] font-bold shadow-[0_0_16px_rgba(25,189,242,0.35)]"
                  : "bg-white/[0.04] text-white/70 hover:text-white hover:bg-white/[0.08]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="group flex flex-col space-y-4 border border-white/[0.1] bg-[#090D10] p-4 rounded-xs transition-all duration-300 hover:border-[#19BDF2]/50"
            >
              <div className="relative w-full aspect-[16/10] overflow-hidden rounded-xs bg-[#0C1115]">
                <Image
                  src={project.coverImage}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#050708]/30 group-hover:bg-transparent transition-colors" />
                <span className="absolute top-3 left-3 text-[0.625rem] font-mono text-white/70 tracking-widest">
                  0{idx + 1}
                </span>
                <span className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-[#050708]/80 backdrop-blur-sm text-[0.6rem] font-mono text-[#19BDF2] uppercase tracking-wider">
                  {project.category}
                </span>
              </div>

              <div className="flex flex-col flex-grow justify-between pt-2">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[0.6875rem] font-mono text-white/40 tracking-wider">
                      {project.client} · {project.year}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-[#19BDF2] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                  <h2 className="font-[family-name:var(--font-inter-tight)] font-bold text-xl text-white uppercase tracking-tight group-hover:text-[#19BDF2] transition-colors mb-2">
                    {project.title}
                  </h2>
                  <p className="text-xs text-[#A7B2BA] line-clamp-2 leading-relaxed font-normal">
                    {project.summary}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
