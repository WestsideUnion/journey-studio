import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { journalPostsData } from "@/content/journal";
import SectionLabel from "@/components/ui/SectionLabel";

export function generateStaticParams() {
  return journalPostsData.map((post) => ({
    slug: post.slug,
  }));
}

export default async function JournalPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = journalPostsData.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="w-full pt-36 pb-32 bg-[#050708] min-h-screen">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        {/* Back link */}
        <Link
          href="/journal"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#A7B2BA] hover:text-[#19BDF2] transition-colors mb-10"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>BACK TO JOURNAL</span>
        </Link>

        {/* Post Header */}
        <div className="mb-12 border-b border-white/[0.12] pb-10">
          <SectionLabel number="ESSAY" label={post.category} />
          <h1 className="font-[family-name:var(--font-inter-tight)] font-black text-4xl sm:text-6xl text-white uppercase tracking-[-0.03em] leading-[0.9] mt-6 mb-6">
            {post.subtitle}
          </h1>
          <div className="flex items-center gap-4 text-xs font-mono text-white/50 tracking-wider">
            <span>BY MAHEEN</span>
            <span>·</span>
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
        </div>

        {/* Hero Visual Still */}
        <div className="relative w-full aspect-[16/9] overflow-hidden rounded-xs border border-white/[0.12] bg-[#0C1115] mb-16">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        {/* Article Body */}
        <div className="space-y-8 max-w-3xl mx-auto text-base sm:text-lg text-[#F4F7F8]/90 font-light leading-relaxed">
          <p className="text-xl sm:text-2xl text-white font-[family-name:var(--font-inter-tight)] font-medium leading-relaxed pb-4 border-b border-white/[0.08]">
            {post.excerpt}
          </p>

          {post.content.map((paragraph, idx) => (
            <p key={idx} className="leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Author Footer */}
        <div className="mt-20 pt-10 border-t border-white/[0.12] max-w-3xl mx-auto flex items-center justify-between">
          <div>
            <span className="text-xs font-mono text-[#19BDF2] tracking-widest uppercase block mb-1">
              JOURNEY STUDIO
            </span>
            <p className="text-sm text-white/70">
              Published by Maheen. Toronto, Canada.
            </p>
          </div>
          <Link
            href="/inquire"
            className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-[#19BDF2] hover:text-[#41D7FF] transition-colors"
          >
            <span>START A CONVERSATION</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
