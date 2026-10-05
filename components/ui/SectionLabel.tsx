import React from "react";

interface SectionLabelProps {
  number: string;
  label: string;
  className?: string;
  light?: boolean;
}

export default function SectionLabel({
  number,
  label,
  className = "",
  light = false,
}: SectionLabelProps) {
  return (
    <div
      className={`inline-flex items-center gap-3 text-[0.6875rem] font-mono uppercase tracking-[0.2em] ${
        light ? "text-[#19BDF2]" : "text-white/60"
      } ${className}`}
    >
      <span className="text-[#19BDF2] font-semibold">{number}</span>
      <span className="w-4 h-[1px] bg-white/20" />
      <span className="tracking-[0.25em]">{label}</span>
    </div>
  );
}
