import React from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import ProjectInquiryForm from "@/components/inquiry/ProjectInquiryForm";

export default function InquirySection() {
  return (
    <section id="inquiry" className="relative w-full py-24 md:py-32 bg-[#050708] border-t border-white/[0.12]">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        {/* Section Label */}
        <div className="mb-12">
          <SectionLabel number="09" label="PROJECT INQUIRY" />
        </div>

        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-16">
          <div className="lg:col-span-7">
            <h2 className="font-[family-name:var(--font-inter-tight)] font-black text-4xl sm:text-5xl lg:text-7xl text-white uppercase tracking-[-0.04em] leading-[0.9]">
              TELL US WHAT
              <br />
              YOU&apos;RE BUILDING.
            </h2>
          </div>

          <div className="lg:col-span-5 lg:pt-2">
            <p className="font-[family-name:var(--font-inter)] text-xs md:text-sm text-[#A7B2BA] uppercase tracking-wider leading-relaxed font-normal">
              WE WORK WITH A LIMITED NUMBER OF BRANDS AND CREATIVE PARTNERS AT A TIME. THIS FORM HELPS US UNDERSTAND YOUR VISION, CONTEXT, SCOPE AND TIMING SO WE CAN CREATE SOMETHING IMPACTFUL.
            </p>
          </div>
        </div>

        {/* Form Container */}
        <div className="border border-white/[0.12] bg-[#090D10]/40 p-8 md:p-14 rounded-xs">
          <ProjectInquiryForm />
        </div>
      </div>
    </section>
  );
}
