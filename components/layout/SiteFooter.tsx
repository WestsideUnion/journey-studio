import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedInIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function XIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export default function SiteFooter() {
  return (
    <footer className="w-full bg-[#050708] border-t border-white/[0.1] pt-16 pb-12 text-white">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        {/* Navigation & Contact Links (Preserving existing functionality) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-14 border-b border-white/[0.08]">
          {/* Studio Ethos Column */}
          <div className="md:col-span-5">
            <Link
              href="/"
              className="inline-flex items-center mb-4 group transition-opacity hover:opacity-90"
              aria-label="Journey Studio Home"
            >
              <div className="relative h-[44px] md:h-[52px] w-auto">
                <Image
                  src="/images/logo/journey-logo-lockup-white.webp"
                  alt="Journey Studio"
                  width={183}
                  height={52}
                  className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>
              <span className="sr-only">Journey Studio</span>
            </Link>
            <p className="text-xs md:text-sm text-[#A7B2BA] max-w-sm mt-3 leading-relaxed font-normal">
              Cinematic content, photography, and creative direction for brands and communities in tech, art, and wellness.
            </p>
          </div>

          {/* Navigation Links Column */}
          <div className="md:col-span-3">
            <span className="text-[0.6875rem] uppercase tracking-[0.2em] text-white/40 font-semibold block mb-4">
              INDEX
            </span>
            <ul className="space-y-2.5 text-xs md:text-sm">
              <li>
                <Link href="/work" className="text-[#A7B2BA] hover:text-white transition-colors">
                  Work
                </Link>
              </li>
              <li>
                <Link href="/art" className="text-[#A7B2BA] hover:text-white transition-colors">
                  Art & Visuals
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-[#A7B2BA] hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[#A7B2BA] hover:text-white transition-colors">
                  About Maheen
                </Link>
              </li>
              <li>
                <Link href="/journal" className="text-[#A7B2BA] hover:text-white transition-colors">
                  Journal
                </Link>
              </li>
            </ul>
          </div>

          {/* Inquiries & Start a Project */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              <span className="text-[0.6875rem] uppercase tracking-[0.2em] text-white/40 font-semibold block mb-4">
                INQUIRIES
              </span>
              <p className="text-xs text-[#A7B2BA] mb-3 leading-relaxed">
                Direct conversations for brand partnerships, films, and commissions:
              </p>
              <Link
                href="/inquire"
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#19BDF2] hover:text-[#41D7FF] transition-colors"
              >
                <span>START A PROJECT</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Mockup Signature Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-white/50 space-y-4 md:space-y-0">
          {/* Left: Toronto • Creating Connections */}
          <div className="font-mono text-[0.6875rem] md:text-xs tracking-[0.25em] text-white/60 uppercase">
            TORONTO · CREATING CONNECTIONS
          </div>

          {/* Right: @maheenblues + Social Icons */}
          <div className="flex items-center space-x-4">
            <a
              href="https://instagram.com/maheenblues"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#A7B2BA] hover:text-[#19BDF2] transition-colors font-mono tracking-wider"
            >
              @maheenblues
            </a>
            <div className="flex items-center space-x-3 text-white/60">
              <a
                href="https://instagram.com/maheenblues"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram @maheenblues"
                className="hover:text-[#19BDF2] transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-[#19BDF2] transition-colors"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="hover:text-[#19BDF2] transition-colors"
              >
                <XIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
