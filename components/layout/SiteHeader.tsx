"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";

import Image from "next/image";

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

  // Primary desktop navigation matching the mockup spec: Work, Art, Services, About
  const desktopNavLinks = [
    { label: "Work", href: "/work" },
    { label: "Art", href: "/art" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
  ];

  // Mobile menu keeps all pages accessible
  const mobileNavLinks = [
    { label: "Work", href: "/work" },
    { label: "Art", href: "/art" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Journal", href: "/journal" },
    { label: "Contact", href: "/inquire" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#050708]/90 backdrop-blur-md border-b border-white/[0.08] py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo - Equal-Height Mark & Wordmark Lockup */}
          <Link
            href="/"
            className="group flex items-center transition-opacity hover:opacity-90"
            aria-label="Journey Studio Home"
          >
            <div className="relative h-[32px] md:h-[36px] w-auto">
              <Image
                src="/images/logo/journey-logo-lockup-white.webp"
                alt="Journey Studio"
                width={127}
                height={36}
                className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                priority
              />
            </div>
            <span className="sr-only">Journey Studio</span>
          </Link>

          {/* Desktop Nav: Work, Art, Services, About */}
          <nav className="hidden md:flex items-center space-x-8 lg:space-x-10 text-[0.8125rem] tracking-[0.14em] font-medium text-white/70 uppercase">
            {desktopNavLinks.map((item) => {
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

          {/* Right Action CTA: "Let's Create" pill button matching mockup */}
          <div className="hidden md:flex items-center">
            <Link
              href="/inquire"
              className="group inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/20 text-white font-[family-name:var(--font-raleway)] font-bold text-xs tracking-[0.12em] uppercase transition-all duration-300 hover:border-[#19BDF2] hover:text-[#19BDF2] hover:shadow-[0_0_16px_rgba(25,189,242,0.3)] hover:bg-[#19BDF2]/5"
            >
              <span>Let&apos;s Create</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white hover:text-[#19BDF2] transition-colors focus:outline-none"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
        </div>
      </header>

      {/* Full-Screen Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#050708] flex flex-col justify-between px-6 pt-28 pb-10 md:hidden">
          <div className="flex flex-col space-y-6">
            <span className="text-[0.6875rem] uppercase tracking-[0.2em] text-[#19BDF2] font-semibold">
              INDEX / NAVIGATION
            </span>
            <nav className="flex flex-col space-y-4">
              {mobileNavLinks.map((item, index) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="font-[family-name:var(--font-inter-tight)] text-2xl font-bold tracking-tight text-white/90 hover:text-[#19BDF2] transition-colors flex items-center justify-between border-b border-white/[0.08] pb-3"
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
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full border border-[#19BDF2] text-[#19BDF2] font-[family-name:var(--font-inter-tight)] font-bold text-xs tracking-wider uppercase hover:bg-[#19BDF2] hover:text-[#050708] transition-all"
            >
              <span>Let&apos;s Create</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <div className="text-center text-[0.75rem] text-white/40 tracking-wider font-mono">
              TORONTO · CREATING CONNECTIONS
            </div>
          </div>
        </div>
      )}
    </>
  );
}
