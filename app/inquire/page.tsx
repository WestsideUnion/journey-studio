import React from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import ProjectInquiryForm from "@/components/inquiry/ProjectInquiryForm";

export default function InquirePage() {
  return (
    <div className="w-full pt-36 pb-32 bg-[#050708] min-h-screen">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-16">
          <SectionLabel number="09" label="PROJECT INQUIRY" />
          <h1 className="font-[family-name:var(--font-inter-tight)] font-black text-5xl sm:text-6xl md:text-8xl text-white uppercase tracking-[-0.04em] leading-[0.88] mt-6 max-w-4xl">
            TELL US WHAT
            <br />
            YOU&apos;RE BUILDING.
          </h1>
          <p className="font-[family-name:var(--font-inter)] text-sm md:text-base text-[#A7B2BA] uppercase tracking-wider max-w-2xl mt-6 leading-relaxed">
            We work with a limited number of brands and creative partners at a time. This form helps us understand your vision, context, scope and timing so we can create something meaningful.
          </p>
        </div>

        {/* Form Container */}
        <div className="border border-white/[0.12] bg-[#090D10]/50 p-8 md:p-14 rounded-xs">
          <ProjectInquiryForm />
        </div>

        {/* Direct Contact Alternative */}
        <div className="mt-16 pt-10 border-t border-white/[0.1] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-white/50">
          <p>FOR GENERAL QUESTIONS, PRESS & SPEAKING:</p>
          <a
            href="mailto:hello@thejourneystudio.com"
            className="text-[#19BDF2] hover:text-[#41D7FF] transition-colors"
          >
            HELLO@THEJOURNEYSTUDIO.COM →
          </a>
        </div>
      </div>
    </div>
  );
}
