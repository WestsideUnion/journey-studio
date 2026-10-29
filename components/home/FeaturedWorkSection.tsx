import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Project, projectsData } from "@/content/projects";

interface FeaturedWorkSectionProps {
  projects?: Project[];
}

export default function FeaturedWorkSection({
  projects = projectsData,
}: FeaturedWorkSectionProps = {}) {
  // Take top 3 projects matching mockup
  const featuredProjects = projects.slice(0, 3);

  return (
    <section id="selected-work" className="relative w-full py-20 md:py-32 bg-[#050708] border-t border-white/[0.1]">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        {/* Section Header: Label on left, "View all work" on right */}
        <div className="flex items-center justify-between mb-10 md:mb-14">
          <div className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-white/50">
            <span className="text-[#19BDF2] font-mono font-semibold">05</span>
            <span className="w-4 h-[1px] bg-white/20" />
            <span className="font-[family-name:var(--font-raleway)] font-bold text-white/70">SELECTED WORK</span>
          </div>

          <Link
            href="/work"
            className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-white/70 hover:text-[#19BDF2] transition-colors"
          >
            <span className="font-[family-name:var(--font-raleway)] font-bold">VIEW ALL WORK</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#19BDF2] transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {featuredProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="group flex flex-col space-y-4"
            >
              {/* Card Image */}
              <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] overflow-hidden rounded-xs border border-white/[0.1] bg-[#0C1115]">
                <Image
                  src={project.coverImage}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050708]/60 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity duration-300" />
              </div>

              {/* Title & Metadata Lockup matching mockup */}
              <div className="flex items-start justify-between pt-1">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-[family-name:var(--font-inter-tight)] font-black text-lg md:text-xl text-white uppercase tracking-tight group-hover:text-[#19BDF2] transition-colors duration-200">
                      {project.title}
                    </h3>
                    <ArrowRight className="w-3.5 h-3.5 text-white/40 group-hover:text-[#19BDF2] group-hover:translate-x-1 transition-all duration-200" />
                  </div>
                  <p className="text-xs font-mono text-[#A7B2BA] tracking-wide">
                    {project.subtitle || project.category}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
