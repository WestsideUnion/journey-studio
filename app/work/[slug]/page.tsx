import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { projectsData } from "@/content/projects";
import SectionLabel from "@/components/ui/SectionLabel";

export function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectCaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const projectIndex = projectsData.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = projectsData[projectIndex];
  const nextProject = projectsData[(projectIndex + 1) % projectsData.length];

  return (
    <div className="w-full pt-32 pb-32 bg-[#050708] min-h-screen">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        {/* Back Link */}
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#A7B2BA] hover:text-[#19BDF2] transition-colors mb-10"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>BACK TO WORK</span>
        </Link>

        {/* Title & Metadata Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end pb-12 border-b border-white/[0.12] mb-12">
          <div className="lg:col-span-8">
            <span className="text-[0.6875rem] font-mono uppercase tracking-[0.25em] text-[#19BDF2] block mb-3 font-semibold">
              {project.category} · {project.year}
            </span>
            <h1 className="font-[family-name:var(--font-inter-tight)] font-black text-4xl sm:text-6xl md:text-7xl text-white uppercase tracking-[-0.04em] leading-[0.9]">
              {project.title}
            </h1>
          </div>

          <div className="lg:col-span-4 flex flex-col space-y-4">
            <div className="grid grid-cols-2 gap-4 text-xs font-mono border-t lg:border-t-0 border-white/[0.1] pt-4 lg:pt-0">
              <div>
                <span className="text-white/40 block mb-1">CLIENT / SUBJECT</span>
                <span className="text-white font-medium">{project.client}</span>
              </div>
              <div>
                <span className="text-white/40 block mb-1">LOCATION</span>
                <span className="text-white font-medium">{project.location}</span>
              </div>
            </div>
            <div>
              <span className="text-white/40 block text-xs font-mono mb-1">ROLES</span>
              <div className="flex flex-wrap gap-2">
                {project.role.map((r) => (
                  <span
                    key={r}
                    className="text-[0.6875rem] font-mono px-2.5 py-0.5 rounded-full bg-white/[0.06] text-white/80"
                  >
                    {r}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Hero Media Still */}
        <div className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-xs border border-white/[0.12] bg-[#0C1115] mb-20">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        {/* Narrative & Challenge */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-20 border-b border-white/[0.12] mb-20">
          <div className="lg:col-span-4">
            <SectionLabel number="01" label="THE CONTEXT" />
            <h2 className="font-[family-name:var(--font-inter-tight)] font-bold text-2xl text-white uppercase tracking-tight mt-4">
              INTENT & VISUAL NARRATIVE
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-8 text-sm md:text-base text-[#A7B2BA] leading-relaxed">
            <p className="text-white font-normal text-lg md:text-xl font-[family-name:var(--font-inter-tight)]">
              {project.summary}
            </p>
            {project.challenge && (
              <div>
                <h3 className="text-xs font-mono uppercase tracking-widest text-[#19BDF2] mb-2">
                  THE CHALLENGE
                </h3>
                <p>{project.challenge}</p>
              </div>
            )}
            {project.creativeIdea && (
              <div>
                <h3 className="text-xs font-mono uppercase tracking-widest text-[#19BDF2] mb-2">
                  THE CREATIVE APPROACH
                </h3>
                <p>{project.creativeIdea}</p>
              </div>
            )}
          </div>
        </div>

        {/* Visual Gallery */}
        <div className="mb-24">
          <div className="mb-8">
            <SectionLabel number="02" label="VISUAL GALLERY" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.galleryImages.map((img, idx) => (
              <div
                key={idx}
                className="relative w-full aspect-[16/10] overflow-hidden rounded-xs border border-white/[0.1] bg-[#0C1115]"
              >
                <Image
                  src={img}
                  alt={`${project.title} frame ${idx + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Deliverables & Next Step */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 p-8 md:p-14 border border-white/[0.12] bg-[#090D10] mb-20">
          <div className="lg:col-span-6">
            <span className="text-[0.6875rem] font-mono uppercase tracking-[0.25em] text-[#19BDF2] block mb-3 font-semibold">
              DELIVERED ASSETS
            </span>
            <ul className="space-y-2 text-xs md:text-sm text-white/80 font-mono">
              {project.deliverables.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <span className="text-[#19BDF2]">0{idx + 1}.</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-white/[0.1] pt-6 lg:pt-0 lg:pl-10">
            <div>
              <h3 className="font-[family-name:var(--font-inter-tight)] font-bold text-2xl text-white uppercase tracking-tight mb-2">
                HAVE A SIMILAR VISION?
              </h3>
              <p className="text-xs md:text-sm text-[#A7B2BA]">
                Journey Studio collaborates with brands, founders, and cultural leaders on visual campaigns and stories.
              </p>
            </div>
            <div className="pt-6">
              <Link
                href="/inquire"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#19BDF2] text-[#050708] font-[family-name:var(--font-inter-tight)] font-bold text-xs uppercase tracking-wider hover:bg-[#41D7FF] transition-colors shadow-[0_0_20px_rgba(25,189,242,0.3)]"
              >
                <span>START A PROJECT</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Next Project Footer */}
        <div className="flex items-center justify-between pt-10 border-t border-white/[0.12]">
          <Link
            href="/work"
            className="text-xs font-mono uppercase tracking-[0.2em] text-white/50 hover:text-white transition-colors"
          >
            ← ALL PROJECTS
          </Link>
          <Link
            href={`/work/${nextProject.slug}`}
            className="group flex items-center gap-3 text-right"
          >
            <div>
              <span className="text-[0.625rem] font-mono uppercase tracking-widest text-[#19BDF2] block">
                NEXT CASE STUDY
              </span>
              <span className="font-[family-name:var(--font-inter-tight)] font-bold text-base md:text-lg text-white uppercase group-hover:text-[#19BDF2] transition-colors">
                {nextProject.title}
              </span>
            </div>
            <ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-[#19BDF2] transition-colors" />
          </Link>
        </div>
      </div>
    </div>
  );
}
