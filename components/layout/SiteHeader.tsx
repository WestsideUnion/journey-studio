"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: "WORK", href: "/work" },
    { label: "SERVICES", href: "/services" },
    { label: "ART", href: "/art" },
    { label: "ABOUT", href: "/about" },
    { label: "JOURNAL", href: "/journal" },
    { label: "CONTACT", href: "/inquire" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#050708]/85 backdrop-blur-md border-b border-white/[0.08] py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo - Stacked Editorial Wordmark */}
          <Link
            href="/"
            className="group flex flex-col tracking-tight transition-opacity hover:opacity-80"
            aria-label="Journey Studio Home"
          >
            <span className="font-[family-name:var(--font-inter-tight)] font-black text-lg md:text-xl tracking-[-0.03em] leading-none text-white">
              JOURNEY
            </span>
            <span className="font-[family-name:var(--font-inter-tight)] font-black text-lg md:text-xl tracking-[-0.03em] leading-none text-white">
              STUDIO
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-10 text-[0.8125rem] tracking-[0.14em] font-medium text-white/70">
            {navLinks.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`transition-colors duration-200 hover:text-white relative py-1 ${
                    isActive ? "text-[#19BDF2]" : ""
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#19BDF2]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/inquire"
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#050708] font-[family-name:var(--font-inter-tight)] font-bold text-xs tracking-wider transition-all duration-300 hover:bg-[#19BDF2] hover:text-[#050708] hover:shadow-[0_0_20px_rgba(25,189,242,0.4)]"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-[#19BDF2] transition-colors focus:outline-none"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Full-Screen Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#050708] flex flex-col justify-between px-6 pt-28 pb-10 lg:hidden">
          <div className="flex flex-col space-y-6">
            <span className="text-[0.6875rem] uppercase tracking-[0.2em] text-[#19BDF2] font-semibold">
              INDEX / NAVIGATION
            </span>
            <nav className="flex flex-col space-y-4">
              {navLinks.map((item, index) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="font-[family-name:var(--font-inter-tight)] text-3xl font-extrabold tracking-tight text-white/90 hover:text-[#19BDF2] transition-colors flex items-center justify-between border-b border-white/[0.08] pb-3"
                >
                  <span>{item.label}</span>
                  <span className="text-xs text-white/40 font-mono tracking-widest">
                    0{index + 1}
                  </span>
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex flex-col space-y-4 pt-6 border-t border-white/[0.08]">
            <Link
              href="/inquire"
              className="w-full flex items-center justify-center gap-2 py-4 rounded-full bg-[#19BDF2] text-[#050708] font-[family-name:var(--font-inter-tight)] font-bold text-sm tracking-wider shadow-[0_0_24px_rgba(25,189,242,0.35)]"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <div className="text-center text-[0.75rem] text-white/40 tracking-wider">
              TORONTO · GLOBAL
            </div>
          </div>
        </div>
      )}
    </>
  );
}
