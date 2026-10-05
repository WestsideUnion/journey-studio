import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

interface PrimaryCTAProps {
  href?: string;
  onClick?: () => void;
  children?: React.ReactNode;
  variant?: "blue" | "white" | "outline";
  className?: string;
  icon?: "right" | "up-right";
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export default function PrimaryCTA({
  href = "/inquire",
  onClick,
  children = "START A PROJECT",
  variant = "blue",
  className = "",
  icon = "right",
  disabled = false,
  type = "button",
}: PrimaryCTAProps) {
  const baseStyles =
    "group inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full font-[family-name:var(--font-inter-tight)] font-bold text-xs md:text-sm tracking-wider uppercase transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed";

  const variantStyles = {
    blue: "bg-[#19BDF2] text-[#050708] hover:bg-[#41D7FF] shadow-[0_0_24px_rgba(25,189,242,0.3)] hover:shadow-[0_0_32px_rgba(25,189,242,0.5)] active:scale-[0.98]",
    white:
      "bg-white text-[#050708] hover:bg-[#19BDF2] hover:shadow-[0_0_24px_rgba(25,189,242,0.35)] active:scale-[0.98]",
    outline:
      "bg-transparent text-white border border-white/20 hover:border-[#19BDF2] hover:text-[#19BDF2] hover:bg-[#19BDF2]/5 active:scale-[0.98]",
  };

  const IconComponent = icon === "up-right" ? ArrowUpRight : ArrowRight;

  const content = (
    <>
      <span>{children}</span>
      <IconComponent className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
    </>
  );

  if (href && !disabled && type !== "submit") {
    return (
      <Link
        href={href}
        className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {content}
    </button>
  );
}
