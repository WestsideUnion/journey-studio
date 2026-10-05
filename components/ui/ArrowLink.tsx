import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ArrowLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}

export default function ArrowLink({
  href,
  children,
  className = "",
  light = false,
}: ArrowLinkProps) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2 text-xs md:text-sm font-[family-name:var(--font-inter-tight)] font-semibold uppercase tracking-wider transition-colors duration-200 ${
        light
          ? "text-[#19BDF2] hover:text-[#41D7FF]"
          : "text-white/80 hover:text-[#19BDF2]"
      } ${className}`}
    >
      <span className="relative">
        {children}
        <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-[#19BDF2] transition-all duration-300 group-hover:w-full" />
      </span>
      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1 text-[#19BDF2]" />
    </Link>
  );
}
