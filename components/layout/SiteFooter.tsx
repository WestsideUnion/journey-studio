import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer className="w-full bg-[#050708] border-t border-white/[0.12] pt-20 pb-12 text-white">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/[0.08]">
          {/* Brand Column */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <Link href="/" className="inline-block mb-4">
                <span className="block font-[family-name:var(--font-inter-tight)] font-black text-3xl md:text-4xl tracking-[-0.04em] leading-none text-white">
                  JOURNEY
                </span>
                <span className="block font-[family-name:var(--font-inter-tight)] font-black text-3xl md:text-4xl tracking-[-0.04em] leading-none text-white">
                  STUDIO
                </span>
              </Link>
              <p className="text-sm text-[#A7B2BA] max-w-sm mt-4 leading-relaxed font-normal">
                A creative studio for brands, people, and communities who believe in meaningful stories. Living at the intersection of cinematic visuals, culture, and human connection.
              </p>
            </div>

            <div className="mt-8">
              <span className="inline-block text-[0.6875rem] uppercase tracking-[0.2em] text-[#19BDF2] font-semibold mb-2">
                BASE
              </span>
              <p className="text-xs text-white/80 font-mono tracking-wider">
                TORONTO, CANADA · AVAILABLE WORLDWIDE
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3">
            <span className="text-[0.6875rem] uppercase tracking-[0.2em] text-white/40 font-semibold block mb-6">
              EXPLORE
            </span>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/work" className="text-[#A7B2BA] hover:text-white transition-colors">
                  Selected Work
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-[#A7B2BA] hover:text-white transition-colors">
                  Services & Capabilities
                </Link>
              </li>
              <li>
                <Link href="/art" className="text-[#A7B2BA] hover:text-white transition-colors">
                  Art, Prints & Visual Worlds
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[#A7B2BA] hover:text-white transition-colors">
                  About & Creative Practice
                </Link>
              </li>
              <li>
                <Link href="/journal" className="text-[#A7B2BA] hover:text-white transition-colors">
                  Journal & Notes
                </Link>
              </li>
              <li>
                <Link href="/inquire" className="text-[#19BDF2] hover:text-[#41D7FF] font-medium transition-colors inline-flex items-center gap-1">
                  Start a Project <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect & Socials */}
          <div className="md:col-span-4">
            <span className="text-[0.6875rem] uppercase tracking-[0.2em] text-white/40 font-semibold block mb-6">
              CONNECT
            </span>
            <div className="space-y-4">
              <p className="text-xs text-[#A7B2BA] leading-relaxed">
                Direct inquiries for freelance commissions, creative direction, brand collaborations, and speaking:
              </p>
              <a
                href="mailto:hello@thejourneystudio.com"
                className="text-base text-white hover:text-[#19BDF2] transition-colors font-[family-name:var(--font-inter-tight)] font-semibold inline-flex items-center gap-1.5"
              >
                hello@thejourneystudio.com <ArrowUpRight className="w-4 h-4 text-[#19BDF2]" />
              </a>

              <div className="flex items-center space-x-6 pt-4 text-xs tracking-widest uppercase font-mono text-white/60">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#19BDF2] transition-colors"
                >
                  Instagram
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#19BDF2] transition-colors"
                >
                  X / Twitter
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#19BDF2] transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Signature Tagline and Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-white/40 space-y-4 md:space-y-0 font-mono">
          <p className="tracking-wide">
            © {new Date().getFullYear()} JOURNEY STUDIO. ALL RIGHTS RESERVED.
          </p>
          <p className="tracking-widest uppercase text-white/60 text-[0.6875rem]">
            STORIES · PEOPLE · PLACES · CULTURE
          </p>
        </div>
      </div>
    </footer>
  );
}
