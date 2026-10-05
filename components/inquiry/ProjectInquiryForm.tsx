"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";
import Link from "next/link";

interface ProjectInquiryFormProps {
  compact?: boolean;
}

export default function ProjectInquiryForm({ compact = false }: ProjectInquiryFormProps) {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    role: "Founder / Co-Founder",
    brand: "",
    website: "",
    projectObjective: "Brand storytelling / positioning",
    distribution: ["Instagram / Reels and placements"],
    budget: "$5,000 – $15,000",
    timeline: "1–2 months",
    brandAesthetic: "",
    attraction: "Cinematic storytelling style",
    story: "",
    location: "Toronto",
    honeypot: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const roleOptions = [
    "Founder / Co-Founder",
    "Marketing Director",
    "Brand Manager",
    "Agency Producer",
    "Other",
  ];

  const objectiveOptions = [
    "Product or brand launch",
    "Seasonal campaign",
    "Brand storytelling / positioning",
    "Ongoing content system",
    "Other",
  ];

  const distributionOptions = [
    "Instagram / Reels and placements",
    "Organic social / Reels / Shorts",
    "Digital advertising",
    "Website / landing pages",
    "Other",
  ];

  const budgetOptions = [
    "Under CAD $3,000",
    "CAD $3,000 – $5,000",
    "CAD $5,000 – $15,000",
    "CAD $15,000 – $50,000",
    "CAD $50,000+",
    "Not defined yet",
  ];

  const timelineOptions = [
    "Within 2–4 weeks",
    "1–2 months",
    "Future season",
    "Flexible",
    "Other",
  ];

  const attractionOptions = [
    "Cinematic storytelling style",
    "Toronto authenticity",
    "Creative direction",
    "Photography + film",
    "Community / cultural work",
    "Recommendation / referral",
  ];

  const locationOptions = [
    "Toronto",
    "Greater Toronto Area",
    "Canada outside GTA",
    "International",
    "Other",
  ];

  const handleDistributionToggle = (item: string) => {
    setFormData((prev) => {
      const exists = prev.distribution.includes(item);
      if (exists) {
        return { ...prev, distribution: prev.distribution.filter((d) => d !== item) };
      } else {
        return { ...prev, distribution: [...prev.distribution, item] };
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(
          result.errors
            ? Object.values(result.errors).flat().join(". ")
            : result.message || "Failed to submit inquiry"
        );
      } else {
        setStatus("success");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error occurred. Your answers remain saved, please try again.");
    }
  };

  if (status === "success") {
    return (
      <div className="p-10 md:p-16 border border-white/[0.12] bg-[#090D10] rounded-xs text-center flex flex-col items-center justify-center space-y-6">
        <CheckCircle2 className="w-12 h-12 text-[#19BDF2]" />
        <h3 className="font-[family-name:var(--font-inter-tight)] font-black text-4xl sm:text-5xl text-white uppercase tracking-tight">
          THANK YOU.
        </h3>
        <p className="font-[family-name:var(--font-inter)] text-sm md:text-base text-[#A7B2BA] max-w-lg leading-relaxed">
          Your project details are in. If the narrative and timing align with our studio focus, Maheen will be in touch with next steps.
        </p>
        <Link
          href="/work"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#19BDF2] text-[#050708] font-[family-name:var(--font-inter-tight)] font-bold text-xs tracking-wider uppercase hover:bg-[#41D7FF] transition-all shadow-[0_0_24px_rgba(25,189,242,0.35)]"
        >
          <span>BACK TO WORK</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-10">
      {/* Honeypot hidden input */}
      <input
        type="text"
        name="honeypot"
        value={formData.honeypot}
        onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      {status === "error" && (
        <div className="p-4 border border-[#FF6B6B]/40 bg-[#FF6B6B]/10 rounded-xs flex items-center gap-3 text-xs md:text-sm text-[#FF6B6B]">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* 2-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
        {/* 01 EMAIL */}
        <div>
          <label className="block text-[0.6875rem] font-mono tracking-[0.2em] text-white/50 uppercase mb-3">
            <span className="text-[#19BDF2] font-semibold">01</span> EMAIL *
          </label>
          <input
            type="email"
            required
            placeholder="yourname@company.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3.5 bg-[#090D10] border border-white/[0.14] rounded-xs text-sm text-white placeholder-white/20 focus:border-[#19BDF2] focus:outline-none focus:ring-1 focus:ring-[#19BDF2] transition-colors"
          />
        </div>

        {/* 02 FIRST NAME */}
        <div>
          <label className="block text-[0.6875rem] font-mono tracking-[0.2em] text-white/50 uppercase mb-3">
            <span className="text-[#19BDF2] font-semibold">02</span> FIRST NAME *
          </label>
          <input
            type="text"
            required
            placeholder="How should we address you?"
            value={formData.firstName}
            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            className="w-full px-4 py-3.5 bg-[#090D10] border border-white/[0.14] rounded-xs text-sm text-white placeholder-white/20 focus:border-[#19BDF2] focus:outline-none focus:ring-1 focus:ring-[#19BDF2] transition-colors"
          />
        </div>

        {/* 03 ROLE WITHIN BRAND */}
        <div>
          <label className="block text-[0.6875rem] font-mono tracking-[0.2em] text-white/50 uppercase mb-3">
            <span className="text-[#19BDF2] font-semibold">03</span> ROLE WITHIN YOUR BRAND *
          </label>
          <div className="space-y-2">
            {roleOptions.map((r) => (
              <label
                key={r}
                className="flex items-center gap-3 text-xs text-white/80 cursor-pointer hover:text-white transition-colors"
              >
                <input
                  type="radio"
                  name="role"
                  value={r}
                  checked={formData.role === r}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="accent-[#19BDF2] w-3.5 h-3.5"
                />
                <span>{r}</span>
              </label>
            ))}
          </div>
        </div>

        {/* 04 BRAND / COMPANY & SOCIAL */}
        <div className="space-y-6">
          <div>
            <label className="block text-[0.6875rem] font-mono tracking-[0.2em] text-white/50 uppercase mb-3">
              <span className="text-[#19BDF2] font-semibold">04</span> BRAND / COMPANY NAME *
            </label>
            <input
              type="text"
              placeholder="Your brand or company name"
              value={formData.brand}
              onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
              className="w-full px-4 py-3.5 bg-[#090D10] border border-white/[0.14] rounded-xs text-sm text-white placeholder-white/20 focus:border-[#19BDF2] focus:outline-none focus:ring-1 focus:ring-[#19BDF2] transition-colors"
            />
          </div>

          <div>
            <label className="block text-[0.6875rem] font-mono tracking-[0.2em] text-white/50 uppercase mb-3">
              PRIMARY WEBSITE OR SOCIAL PRESENCE
            </label>
            <input
              type="text"
              placeholder="https://"
              value={formData.website}
              onChange={(e) => setFormData({ ...formData, website: e.target.value })}
              className="w-full px-4 py-3.5 bg-[#090D10] border border-white/[0.14] rounded-xs text-sm text-white placeholder-white/20 focus:border-[#19BDF2] focus:outline-none focus:ring-1 focus:ring-[#19BDF2] transition-colors"
            />
          </div>
        </div>

        {/* 05 PROJECT OBJECTIVE */}
        <div>
          <label className="block text-[0.6875rem] font-mono tracking-[0.2em] text-white/50 uppercase mb-3">
            <span className="text-[#19BDF2] font-semibold">05</span> PROJECT OBJECTIVE *
          </label>
          <div className="space-y-2">
            {objectiveOptions.map((o) => (
              <label
                key={o}
                className="flex items-center gap-3 text-xs text-white/80 cursor-pointer hover:text-white transition-colors"
              >
                <input
                  type="radio"
                  name="projectObjective"
                  value={o}
                  checked={formData.projectObjective === o}
                  onChange={(e) => setFormData({ ...formData, projectObjective: e.target.value })}
                  className="accent-[#19BDF2] w-3.5 h-3.5"
                />
                <span>{o}</span>
              </label>
            ))}
          </div>
        </div>

        {/* 06 WHERE WILL THE CONTENT LIVE */}
        <div>
          <label className="block text-[0.6875rem] font-mono tracking-[0.2em] text-white/50 uppercase mb-3">
            <span className="text-[#19BDF2] font-semibold">06</span> WHERE WILL THE CONTENT LIVE? *
          </label>
          <div className="space-y-2">
            {distributionOptions.map((d) => (
              <label
                key={d}
                className="flex items-center gap-3 text-xs text-white/80 cursor-pointer hover:text-white transition-colors"
              >
                <input
                  type="checkbox"
                  checked={formData.distribution.includes(d)}
                  onChange={() => handleDistributionToggle(d)}
                  className="accent-[#19BDF2] w-3.5 h-3.5"
                />
                <span>{d}</span>
              </label>
            ))}
          </div>
        </div>

        {/* 07 ESTIMATED INVESTMENT */}
        <div>
          <label className="block text-[0.6875rem] font-mono tracking-[0.2em] text-white/50 uppercase mb-3">
            <span className="text-[#19BDF2] font-semibold">07</span> ESTIMATED PRODUCTION INVESTMENT *
          </label>
          <div className="space-y-2">
            {budgetOptions.map((b) => (
              <label
                key={b}
                className="flex items-center gap-3 text-xs text-white/80 cursor-pointer hover:text-white transition-colors"
              >
                <input
                  type="radio"
                  name="budget"
                  value={b}
                  checked={formData.budget === b}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="accent-[#19BDF2] w-3.5 h-3.5"
                />
                <span>{b}</span>
              </label>
            ))}
          </div>
        </div>

        {/* 08 IDEAL TIMELINE */}
        <div>
          <label className="block text-[0.6875rem] font-mono tracking-[0.2em] text-white/50 uppercase mb-3">
            <span className="text-[#19BDF2] font-semibold">08</span> IDEAL CAMPAIGN TIMELINE *
          </label>
          <div className="space-y-2">
            {timelineOptions.map((t) => (
              <label
                key={t}
                className="flex items-center gap-3 text-xs text-white/80 cursor-pointer hover:text-white transition-colors"
              >
                <input
                  type="radio"
                  name="timeline"
                  value={t}
                  checked={formData.timeline === t}
                  onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                  className="accent-[#19BDF2] w-3.5 h-3.5"
                />
                <span>{t}</span>
              </label>
            ))}
          </div>
        </div>

        {/* 09 BRAND AESTHETIC */}
        <div>
          <label className="block text-[0.6875rem] font-mono tracking-[0.2em] text-white/50 uppercase mb-3">
            <span className="text-[#19BDF2] font-semibold">09</span> BRAND AESTHETIC AND VALUES
          </label>
          <textarea
            rows={3}
            placeholder="Tell us about your brand aesthetic, visual references, or artists you love..."
            value={formData.brandAesthetic}
            onChange={(e) => setFormData({ ...formData, brandAesthetic: e.target.value })}
            className="w-full px-4 py-3 bg-[#090D10] border border-white/[0.14] rounded-xs text-xs text-white placeholder-white/20 focus:border-[#19BDF2] focus:outline-none focus:ring-1 focus:ring-[#19BDF2] transition-colors"
          />
        </div>

        {/* 10 WHAT ATTRACTED YOU */}
        <div>
          <label className="block text-[0.6875rem] font-mono tracking-[0.2em] text-white/50 uppercase mb-3">
            <span className="text-[#19BDF2] font-semibold">10</span> WHAT ATTRACTED YOU TO JOURNEY STUDIO? *
          </label>
          <div className="space-y-2">
            {attractionOptions.map((a) => (
              <label
                key={a}
                className="flex items-center gap-3 text-xs text-white/80 cursor-pointer hover:text-white transition-colors"
              >
                <input
                  type="radio"
                  name="attraction"
                  value={a}
                  checked={formData.attraction === a}
                  onChange={(e) => setFormData({ ...formData, attraction: e.target.value })}
                  className="accent-[#19BDF2] w-3.5 h-3.5"
                />
                <span>{a}</span>
              </label>
            ))}
          </div>
        </div>

        {/* 11 TELL US ABOUT THE STORY - FULL WIDTH */}
        <div className="md:col-span-2">
          <label className="block text-[0.6875rem] font-mono tracking-[0.2em] text-white/50 uppercase mb-3">
            <span className="text-[#19BDF2] font-semibold">11</span> TELL US ABOUT THE STORY YOU&apos;RE TRYING TO TELL *
          </label>
          <textarea
            required
            rows={4}
            placeholder="Share a bit about your project, goals, audience, and the human story behind it..."
            value={formData.story}
            onChange={(e) => setFormData({ ...formData, story: e.target.value })}
            className="w-full px-4 py-3.5 bg-[#090D10] border border-white/[0.14] rounded-xs text-sm text-white placeholder-white/20 focus:border-[#19BDF2] focus:outline-none focus:ring-1 focus:ring-[#19BDF2] transition-colors"
          />
        </div>

        {/* 12 PROJECT LOCATION */}
        <div className="md:col-span-2">
          <label className="block text-[0.6875rem] font-mono tracking-[0.2em] text-white/50 uppercase mb-3">
            <span className="text-[#19BDF2] font-semibold">12</span> PROJECT LOCATION *
          </label>
          <div className="flex flex-wrap gap-4">
            {locationOptions.map((loc) => (
              <label
                key={loc}
                className="inline-flex items-center gap-2.5 text-xs text-white/80 cursor-pointer hover:text-white transition-colors"
              >
                <input
                  type="radio"
                  name="location"
                  value={loc}
                  checked={formData.location === loc}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="accent-[#19BDF2] w-3.5 h-3.5"
                />
                <span>{loc}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="pt-6 border-t border-white/[0.1]">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="group w-full md:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 rounded-full bg-[#19BDF2] text-[#050708] font-[family-name:var(--font-inter-tight)] font-black text-sm tracking-widest uppercase transition-all duration-300 hover:bg-[#41D7FF] shadow-[0_0_28px_rgba(25,189,242,0.4)] hover:shadow-[0_0_40px_rgba(25,189,242,0.6)] active:scale-[0.98] disabled:opacity-50"
        >
          <span>{status === "submitting" ? "SENDING INQUIRY..." : "START A PROJECT"}</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
        </button>
      </div>
    </form>
  );
}
