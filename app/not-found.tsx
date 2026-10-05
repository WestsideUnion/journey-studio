import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";

export default function NotFound() {
  return (
    <div className="w-full min-h-[85vh] flex items-center justify-center bg-[#050708] px-6">
      <div className="max-w-xl text-center flex flex-col items-center">
        <SectionLabel number="404" label="NOT FOUND" />
        <h1 className="font-[family-name:var(--font-inter-tight)] font-black text-6xl sm:text-8xl text-white uppercase tracking-[-0.04em] leading-[0.85] my-6">
          OUT OF
          <br />
          FRAME
        </h1>
        <p className="text-sm md:text-base text-[#A7B2BA] mb-8 leading-relaxed">
          The page or story you are looking for does not exist or has moved. Return to the visual archive or start a conversation.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#19BDF2] text-[#050708] font-[family-name:var(--font-inter-tight)] font-bold text-xs uppercase tracking-wider hover:bg-[#41D7FF] transition-colors shadow-[0_0_20px_rgba(25,189,242,0.3)]"
          >
            <span>HOME</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white font-[family-name:var(--font-inter-tight)] font-bold text-xs uppercase tracking-wider hover:border-[#19BDF2] hover:text-[#19BDF2] transition-colors"
          >
            <span>SELECTED WORK</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
