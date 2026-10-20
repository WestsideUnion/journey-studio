"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowLeft,
  Check,
  CornerDownLeft,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";

interface FormData {
  // Step 1: Mediums
  projectTypes: string[];
  // Step 2: Story
  story: string;
  // Step 3: Distribution & Timeline
  distribution: string[];
  timeline: string;
  // Step 4: Budget & Location
  budget: string;
  location: string;
  // Step 5: Discovery & Notes
  discovery: string;
  additionalNotes: string;
  // Step 6: Contact
  firstName: string;
  email: string;
  brand: string;
  role: string;
  website: string;
  honeypot: string;
}

const INITIAL_DATA: FormData = {
  projectTypes: ["Content & Brand Stories"],
  story: "",
  distribution: ["Instagram / Reels"],
  timeline: "1–2 months",
  budget: "CAD $5,000 – $15,000",
  location: "Toronto",
  discovery: "Instagram (@maheenblues)",
  additionalNotes: "",
  firstName: "",
  email: "",
  brand: "",
  role: "",
  website: "",
  honeypot: "",
};

const PROJECT_TYPE_OPTIONS = [
  { key: "A", label: "Content & Brand Stories", desc: "Short films, narrative campaigns, social systems" },
  { key: "B", label: "Photography", desc: "People, places, products, editorial stills" },
  { key: "C", label: "Events & Community", desc: "Gatherings, cultural experiences, live capture" },
  { key: "D", label: "Art & Curation", desc: "Digital art, commissions, gallery exhibitions" },
  { key: "E", label: "Creative Direction", desc: "Visual concepts, styling, aesthetic strategy" },
  { key: "F", label: "Custom Collaboration", desc: "Something bespoke or multi-disciplinary" },
];

const DISTRIBUTION_OPTIONS = [
  "Instagram / Reels",
  "TikTok",
  "Website / Flagship",
  "Paid Media",
  "Physical / Event",
  "YouTube / Longform",
  "Multi-Platform",
];

const TIMELINE_OPTIONS = [
  "Within 2–4 weeks",
  "1–2 months",
  "3+ months",
  "Flexible / Ongoing",
];

const BUDGET_OPTIONS = [
  "Under CAD $3,000",
  "CAD $3,000 – $5,000",
  "CAD $5,000 – $15,000",
  "CAD $15,000 – $50,000",
  "CAD $50,000+",
  "Flexible / Not defined yet",
];

const LOCATION_OPTIONS = [
  "Toronto",
  "Greater Toronto Area",
  "Canada outside GTA",
  "International",
  "Remote / Digital",
];

const DISCOVERY_OPTIONS = [
  "Instagram (@maheenblues)",
  "Referral / Word of mouth",
  "X / Twitter",
  "Previous Client Work",
  "Search / Online",
  "Other",
];

export default function ProjectInquiryForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>(INITIAL_DATA);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const totalSteps = 6;
  const containerRef = useRef<HTMLDivElement>(null);

  // Focus management
  const storyInputRef = useRef<HTMLTextAreaElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (currentStep === 1) {
      setTimeout(() => storyInputRef.current?.focus(), 150);
    } else if (currentStep === 5) {
      setTimeout(() => nameInputRef.current?.focus(), 150);
    }
  }, [currentStep]);

  // Global keyboard shortcuts (Typeform-style)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept shortcuts if user is typing in inputs or textareas
      const target = e.target as HTMLElement;
      const isInput = target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA");

      if (e.key === "Enter" && !e.shiftKey) {
        // In textarea, regular enter creates new line unless Cmd/Ctrl+Enter
        if (target && target.tagName === "TEXTAREA" && !(e.metaKey || e.ctrlKey)) {
          return;
        }
        e.preventDefault();
        handleNext();
        return;
      }

      // Hotkeys for Step 0 (Medium selection: A - F)
      if (currentStep === 0 && !isInput) {
        const keyUpper = e.key.toUpperCase();
        const option = PROJECT_TYPE_OPTIONS.find((opt) => opt.key === keyUpper);
        if (option) {
          e.preventDefault();
          toggleProjectType(option.label);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentStep, formData]);

  const toggleProjectType = (type: string) => {
    setFormData((prev) => {
      const exists = prev.projectTypes.includes(type);
      const nextTypes = exists
        ? prev.projectTypes.filter((t) => t !== type)
        : [...prev.projectTypes, type];
      return { ...prev, projectTypes: nextTypes };
    });
    if (errors.projectTypes) {
      setErrors((prev) => ({ ...prev, projectTypes: "" }));
    }
  };

  const toggleDistribution = (dist: string) => {
    setFormData((prev) => {
      const exists = prev.distribution.includes(dist);
      const nextDist = exists
        ? prev.distribution.filter((d) => d !== dist)
        : [...prev.distribution, dist];
      return { ...prev, distribution: nextDist };
    });
  };

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (step === 0) {
      if (formData.projectTypes.length === 0) {
        newErrors.projectTypes = "Please select at least one medium or type of story.";
      }
    } else if (step === 1) {
      if (!formData.story || formData.story.trim().length < 10) {
        newErrors.story = "Please share at least a sentence or two (10+ characters) about your story.";
      }
    } else if (step === 5) {
      if (!formData.firstName || formData.firstName.trim().length < 2) {
        newErrors.firstName = "Please provide your name.";
      }
      if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = "Please provide a valid email address.";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (!validateStep(currentStep)) return;

    if (currentStep < totalSteps - 1) {
      setCurrentStep((prev) => prev + 1);
      containerRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      handleSubmit();
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
      setErrors({});
      containerRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleSubmit = async () => {
    if (!validateStep(5)) return;

    setIsSubmitting(true);
    setSubmitError("");

    try {
      const payload = {
        email: formData.email,
        firstName: formData.firstName,
        brand: formData.brand || undefined,
        role: formData.role || undefined,
        website: formData.website || undefined,
        projectTypes: formData.projectTypes,
        projectObjective: formData.projectTypes[0] || "Creative Storytelling",
        distribution: formData.distribution,
        budget: formData.budget,
        timeline: formData.timeline,
        story: formData.story,
        location: formData.location,
        discovery: formData.discovery,
        additionalNotes: formData.additionalNotes || undefined,
        honeypot: formData.honeypot || undefined,
      };

      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setIsSuccess(true);
      } else {
        setSubmitError(data.message || "Failed to submit inquiry. Please try again.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      setSubmitError("Network connection issue. Please verify your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const progressPercent = Math.round(((currentStep + 1) / totalSteps) * 100);

  // Success Screen
  if (isSuccess) {
    return (
      <div className="py-16 md:py-24 text-center max-w-2xl mx-auto animate-fadeIn">
        <div className="w-16 h-16 mx-auto mb-8 rounded-full border border-[#19BDF2]/40 bg-[#19BDF2]/10 flex items-center justify-center text-[#19BDF2]">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#19BDF2] block mb-3">
          INQUIRY RECEIVED · CONNECTED WITH RESEND
        </span>
        <h2 className="font-[family-name:var(--font-inter-tight)] font-black text-4xl sm:text-5xl md:text-6xl text-white tracking-[-0.03em] uppercase leading-none mb-6">
          THANK YOU.
        </h2>
        <p className="text-base md:text-lg text-[#A7B2BA] leading-relaxed mb-10 max-w-xl mx-auto">
          Your project narrative has been received. Maheen personally reviews each submission and will follow up with next steps and scheduling.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-[#050708] font-[family-name:var(--font-inter-tight)] font-bold text-xs tracking-wider uppercase hover:bg-white/90 transition-all"
          >
            Back to Home
          </Link>
          <Link
            href="/work"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-white/20 text-white font-[family-name:var(--font-inter-tight)] font-bold text-xs tracking-wider uppercase hover:border-[#19BDF2] hover:text-[#19BDF2] transition-all"
          >
            Explore Selected Work →
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="w-full relative min-h-[540px] flex flex-col justify-between">
      {/* Top Progress Bar & Status */}
      <div className="w-full mb-8">
        <div className="flex items-center justify-between text-xs font-mono text-white/50 mb-2.5">
          <span className="tracking-[0.2em] uppercase text-[#19BDF2]">
            STEP 0{currentStep + 1} OF 0{totalSteps}
          </span>
          <span className="tracking-widest">{progressPercent}% COMPLETED</span>
        </div>
        <div className="w-full h-[2px] bg-white/[0.08] relative overflow-hidden rounded-full">
          <div
            className="h-full bg-[#19BDF2] transition-all duration-500 ease-out shadow-[0_0_8px_rgba(25,189,242,0.6)]"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Main Step Body */}
      <div className="flex-1 py-4">
        {/* ================= STEP 0: Project Mediums ================= */}
        {currentStep === 0 && (
          <div className="space-y-6 animate-fadeIn">
            <div>
              <span className="text-xs font-mono text-[#19BDF2] tracking-[0.25em] uppercase block mb-2">
                01 → THE MEDIUM & STORY
              </span>
              <h2 className="font-[family-name:var(--font-inter-tight)] font-black text-2xl sm:text-3xl md:text-4xl text-white tracking-[-0.03em] uppercase leading-tight">
                What are you looking to create?
              </h2>
              <p className="text-xs sm:text-sm text-[#A7B2BA] mt-2">
                Select all that align with your vision. Press key <span className="font-mono text-white bg-white/10 px-1 py-0.5 rounded">A–F</span> or click to toggle.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
              {PROJECT_TYPE_OPTIONS.map((opt) => {
                const isSelected = formData.projectTypes.includes(opt.label);
                return (
                  <button
                    key={opt.key}
                    type="button"
                    onClick={() => toggleProjectType(opt.label)}
                    className={`group relative text-left p-4 rounded-xs border transition-all duration-200 flex items-start gap-3.5 ${
                      isSelected
                        ? "border-[#19BDF2] bg-[#19BDF2]/10 shadow-[0_0_20px_rgba(25,189,242,0.12)]"
                        : "border-white/[0.12] bg-white/[0.02] hover:border-white/30 hover:bg-white/[0.04]"
                    }`}
                  >
                    <div
                      className={`w-6 h-6 rounded-xs shrink-0 font-mono text-xs flex items-center justify-center font-bold transition-colors ${
                        isSelected
                          ? "bg-[#19BDF2] text-[#050708]"
                          : "border border-white/20 text-white/60 group-hover:border-white/40 group-hover:text-white"
                      }`}
                    >
                      {opt.key}
                    </div>
                    <div className="flex-1 pr-6">
                      <div className="font-[family-name:var(--font-inter-tight)] font-bold text-sm md:text-base text-white tracking-tight">
                        {opt.label}
                      </div>
                      <div className="text-xs text-[#A7B2BA] mt-0.5 leading-relaxed">
                        {opt.desc}
                      </div>
                    </div>
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center transition-all ${
                        isSelected ? "text-[#19BDF2]" : "opacity-0 text-white/20"
                      }`}
                    >
                      <Check className="w-4 h-4" />
                    </div>
                  </button>
                );
              })}
            </div>

            {errors.projectTypes && (
              <p className="text-xs font-mono text-rose-400 mt-2 flex items-center gap-1.5">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{errors.projectTypes}</span>
              </p>
            )}
          </div>
        )}

        {/* ================= STEP 1: The Narrative / Story ================= */}
        {currentStep === 1 && (
          <div className="space-y-6 animate-fadeIn">
            <div>
              <span className="text-xs font-mono text-[#19BDF2] tracking-[0.25em] uppercase block mb-2">
                02 → THE NARRATIVE
              </span>
              <h2 className="font-[family-name:var(--font-inter-tight)] font-black text-2xl sm:text-3xl md:text-4xl text-white tracking-[-0.03em] uppercase leading-tight">
                Tell us about the story you want to tell.
              </h2>
              <p className="text-xs sm:text-sm text-[#A7B2BA] mt-2 max-w-xl">
                What is the emotional core, community, product, or experience you want people to connect with?
              </p>
            </div>

            <div className="pt-2">
              <textarea
                ref={storyInputRef}
                rows={5}
                value={formData.story}
                onChange={(e) => {
                  setFormData({ ...formData, story: e.target.value });
                  if (errors.story) setErrors({ ...errors, story: "" });
                }}
                placeholder="Share your thoughts, visual references, goals, or the message you wish to communicate..."
                className={`w-full bg-white/[0.03] border text-white p-5 rounded-xs font-[family-name:var(--font-inter)] text-base md:text-lg leading-relaxed placeholder:text-white/25 focus:outline-none transition-all ${
                  errors.story
                    ? "border-rose-500 focus:border-rose-400 shadow-[0_0_15px_rgba(244,63,94,0.15)]"
                    : "border-white/[0.15] focus:border-[#19BDF2] focus:shadow-[0_0_20px_rgba(25,189,242,0.15)]"
                }`}
              />
              <div className="flex items-center justify-between text-xs font-mono text-white/40 mt-2">
                <span>Shift ⇧ + Enter ↵ for newline</span>
                <span>{formData.story.length} characters</span>
              </div>
            </div>

            {errors.story && (
              <p className="text-xs font-mono text-rose-400 flex items-center gap-1.5">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{errors.story}</span>
              </p>
            )}
          </div>
        )}

        {/* ================= STEP 2: Channels & Timeline ================= */}
        {currentStep === 2 && (
          <div className="space-y-8 animate-fadeIn">
            <div>
              <span className="text-xs font-mono text-[#19BDF2] tracking-[0.25em] uppercase block mb-2">
                03 → CHANNELS & TIMELINE
              </span>
              <h2 className="font-[family-name:var(--font-inter-tight)] font-black text-2xl sm:text-3xl md:text-4xl text-white tracking-[-0.03em] uppercase leading-tight">
                Where will the work live, and when should it premiere?
              </h2>
            </div>

            {/* Sub-question A: Distribution */}
            <div>
              <label className="text-xs font-mono text-white/70 uppercase tracking-[0.15em] block mb-3">
                Distribution Channels (Choose all that apply):
              </label>
              <div className="flex flex-wrap gap-2.5">
                {DISTRIBUTION_OPTIONS.map((item) => {
                  const active = formData.distribution.includes(item);
                  return (
                    <button
                      key={item}
                      type="button"
                      onClick={() => toggleDistribution(item)}
                      className={`px-4 py-2.5 rounded-xs text-xs font-mono tracking-wider transition-all uppercase flex items-center gap-2 border ${
                        active
                          ? "border-[#19BDF2] bg-[#19BDF2]/15 text-white shadow-[0_0_15px_rgba(25,189,242,0.15)]"
                          : "border-white/[0.12] bg-white/[0.02] text-white/70 hover:border-white/30 hover:text-white"
                      }`}
                    >
                      <span>{item}</span>
                      {active && <Check className="w-3 h-3 text-[#19BDF2]" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Sub-question B: Timeline */}
            <div>
              <label className="text-xs font-mono text-white/70 uppercase tracking-[0.15em] block mb-3">
                Ideal Timeline / Delivery:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {TIMELINE_OPTIONS.map((item) => {
                  const active = formData.timeline === item;
                  return (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setFormData({ ...formData, timeline: item })}
                      className={`p-3 rounded-xs text-xs font-mono tracking-wider transition-all text-center border uppercase ${
                        active
                          ? "border-[#19BDF2] bg-[#19BDF2]/15 text-white shadow-[0_0_15px_rgba(25,189,242,0.15)]"
                          : "border-white/[0.12] bg-white/[0.02] text-white/70 hover:border-white/30 hover:text-white"
                      }`}
                    >
                      {item}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* ================= STEP 3: Investment & Location ================= */}
        {currentStep === 3 && (
          <div className="space-y-8 animate-fadeIn">
            <div>
              <span className="text-xs font-mono text-[#19BDF2] tracking-[0.25em] uppercase block mb-2">
                04 → LOGISTICS & INVESTMENT
              </span>
              <h2 className="font-[family-name:var(--font-inter-tight)] font-black text-2xl sm:text-3xl md:text-4xl text-white tracking-[-0.03em] uppercase leading-tight">
                What are your production parameters?
              </h2>
              <p className="text-xs sm:text-sm text-[#A7B2BA] mt-2">
                Helps us accurately calibrate equipment, team size, and logistical footprint.
              </p>
            </div>

            {/* Investment Tiers */}
            <div>
              <label className="text-xs font-mono text-white/70 uppercase tracking-[0.15em] block mb-3">
                Estimated Production Investment (CAD):
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                {BUDGET_OPTIONS.map((item) => {
                  const active = formData.budget === item;
                  return (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setFormData({ ...formData, budget: item })}
                      className={`p-3.5 rounded-xs text-xs font-mono tracking-wider transition-all text-left border flex items-center justify-between ${
                        active
                          ? "border-[#19BDF2] bg-[#19BDF2]/15 text-white shadow-[0_0_15px_rgba(25,189,242,0.15)]"
                          : "border-white/[0.12] bg-white/[0.02] text-white/70 hover:border-white/30 hover:text-white"
                      }`}
                    >
                      <span>{item}</span>
                      {active && <Check className="w-3.5 h-3.5 text-[#19BDF2]" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Location */}
            <div>
              <label className="text-xs font-mono text-white/70 uppercase tracking-[0.15em] block mb-3">
                Project Location:
              </label>
              <div className="flex flex-wrap gap-2.5">
                {LOCATION_OPTIONS.map((item) => {
                  const active = formData.location === item;
                  return (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setFormData({ ...formData, location: item })}
                      className={`px-4 py-2.5 rounded-xs text-xs font-mono tracking-wider transition-all uppercase border ${
                        active
                          ? "border-[#19BDF2] bg-[#19BDF2]/15 text-white shadow-[0_0_15px_rgba(25,189,242,0.15)]"
                          : "border-white/[0.12] bg-white/[0.02] text-white/70 hover:border-white/30 hover:text-white"
                      }`}
                    >
                      {item}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* ================= STEP 4: Discovery & Notes ================= */}
        {currentStep === 4 && (
          <div className="space-y-8 animate-fadeIn">
            <div>
              <span className="text-xs font-mono text-[#19BDF2] tracking-[0.25em] uppercase block mb-2">
                05 → DISCOVERY & CONTEXT
              </span>
              <h2 className="font-[family-name:var(--font-inter-tight)] font-black text-2xl sm:text-3xl md:text-4xl text-white tracking-[-0.03em] uppercase leading-tight">
                How did you find Journey Studio?
              </h2>
            </div>

            {/* Discovery Options */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
              {DISCOVERY_OPTIONS.map((item) => {
                const active = formData.discovery === item;
                return (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setFormData({ ...formData, discovery: item })}
                    className={`p-3.5 rounded-xs text-xs font-mono tracking-wider transition-all text-left border flex items-center justify-between ${
                      active
                        ? "border-[#19BDF2] bg-[#19BDF2]/15 text-white shadow-[0_0_15px_rgba(25,189,242,0.15)]"
                        : "border-white/[0.12] bg-white/[0.02] text-white/70 hover:border-white/30 hover:text-white"
                    }`}
                  >
                    <span>{item}</span>
                    {active && <Check className="w-3.5 h-3.5 text-[#19BDF2]" />}
                  </button>
                );
              })}
            </div>

            {/* Additional Notes (Optional) */}
            <div>
              <label className="text-xs font-mono text-white/70 uppercase tracking-[0.15em] block mb-2">
                Anything else you would like to note? (Optional)
              </label>
              <textarea
                rows={3}
                value={formData.additionalNotes}
                onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                placeholder="Inspiration links, preferred start date, specific questions..."
                className="w-full bg-white/[0.03] border border-white/[0.15] text-white p-4 rounded-xs font-[family-name:var(--font-inter)] text-sm focus:border-[#19BDF2] focus:outline-none transition-all placeholder:text-white/25"
              />
            </div>
          </div>
        )}

        {/* ================= STEP 5: Contact Information (Final Step) ================= */}
        {currentStep === 5 && (
          <div className="space-y-6 animate-fadeIn">
            <div>
              <span className="text-xs font-mono text-[#19BDF2] tracking-[0.25em] uppercase block mb-2">
                06 → YOUR DETAILS
              </span>
              <h2 className="font-[family-name:var(--font-inter-tight)] font-black text-2xl sm:text-3xl md:text-4xl text-white tracking-[-0.03em] uppercase leading-tight">
                How should Maheen reach you?
              </h2>
              <p className="text-xs sm:text-sm text-[#A7B2BA] mt-2">
                Your inquiry will be delivered directly to Maheen with confirmation sent to your email.
              </p>
            </div>

            {/* Honeypot for spam bot detection */}
            <input
              type="text"
              name="company_website_hp"
              value={formData.honeypot}
              onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              {/* Name */}
              <div>
                <label className="text-xs font-mono text-white/70 uppercase tracking-[0.15em] block mb-1.5">
                  Your Name *
                </label>
                <input
                  ref={nameInputRef}
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => {
                    setFormData({ ...formData, firstName: e.target.value });
                    if (errors.firstName) setErrors({ ...errors, firstName: "" });
                  }}
                  placeholder="e.g. Alex Morgan"
                  className={`w-full bg-white/[0.03] border text-white p-3.5 rounded-xs font-[family-name:var(--font-inter)] text-sm focus:outline-none transition-all ${
                    errors.firstName
                      ? "border-rose-500 focus:border-rose-400"
                      : "border-white/[0.15] focus:border-[#19BDF2]"
                  }`}
                />
                {errors.firstName && (
                  <p className="text-[11px] font-mono text-rose-400 mt-1">{errors.firstName}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="text-xs font-mono text-white/70 uppercase tracking-[0.15em] block mb-1.5">
                  Email Address *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    if (errors.email) setErrors({ ...errors, email: "" });
                  }}
                  placeholder="alex@brand.com"
                  className={`w-full bg-white/[0.03] border text-white p-3.5 rounded-xs font-[family-name:var(--font-inter)] text-sm focus:outline-none transition-all ${
                    errors.email
                      ? "border-rose-500 focus:border-rose-400"
                      : "border-white/[0.15] focus:border-[#19BDF2]"
                  }`}
                />
                {errors.email && (
                  <p className="text-[11px] font-mono text-rose-400 mt-1">{errors.email}</p>
                )}
              </div>

              {/* Brand / Company */}
              <div>
                <label className="text-xs font-mono text-white/70 uppercase tracking-[0.15em] block mb-1.5">
                  Brand or Organization
                </label>
                <input
                  type="text"
                  value={formData.brand}
                  onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                  placeholder="e.g. Studio, Brand, Collective"
                  className="w-full bg-white/[0.03] border border-white/[0.15] text-white p-3.5 rounded-xs font-[family-name:var(--font-inter)] text-sm focus:border-[#19BDF2] focus:outline-none transition-all"
                />
              </div>

              {/* Role */}
              <div>
                <label className="text-xs font-mono text-white/70 uppercase tracking-[0.15em] block mb-1.5">
                  Role / Title
                </label>
                <input
                  type="text"
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  placeholder="e.g. Founder, Creative Director, Marketing"
                  className="w-full bg-white/[0.03] border border-white/[0.15] text-white p-3.5 rounded-xs font-[family-name:var(--font-inter)] text-sm focus:border-[#19BDF2] focus:outline-none transition-all"
                />
              </div>

              {/* Website or Social */}
              <div className="md:col-span-2">
                <label className="text-xs font-mono text-white/70 uppercase tracking-[0.15em] block mb-1.5">
                  Website or Instagram Handle
                </label>
                <input
                  type="text"
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  placeholder="https://... or @brand"
                  className="w-full bg-white/[0.03] border border-white/[0.15] text-white p-3.5 rounded-xs font-[family-name:var(--font-inter)] text-sm focus:border-[#19BDF2] focus:outline-none transition-all"
                />
              </div>
            </div>

            {submitError && (
              <div className="p-4 rounded-xs border border-rose-500/30 bg-rose-500/10 text-rose-300 text-xs font-mono flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{submitError}</span>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Bottom Sticky Action Bar */}
      <div className="pt-8 mt-6 border-t border-white/[0.08] flex items-center justify-between">
        {/* Left: Back Button */}
        <div>
          {currentStep > 0 && (
            <button
              type="button"
              onClick={handlePrev}
              disabled={isSubmitting}
              className="inline-flex items-center gap-2 text-xs font-mono text-white/60 hover:text-white uppercase tracking-wider py-2 transition-colors disabled:opacity-40"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back</span>
            </button>
          )}
        </div>

        {/* Right: Next / Submit Button + Shortcut helper */}
        <div className="flex items-center gap-4">
          <span className="hidden sm:inline text-[11px] font-mono text-white/40">
            Press <span className="text-white">Enter ↵</span>
          </span>

          {currentStep < totalSteps - 1 ? (
            <button
              type="button"
              onClick={handleNext}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#19BDF2] text-[#050708] font-[family-name:var(--font-inter-tight)] font-bold text-xs tracking-wider uppercase hover:bg-[#41D7FF] transition-all shadow-[0_0_20px_rgba(25,189,242,0.3)] hover:shadow-[0_0_25px_rgba(25,189,242,0.5)] cursor-pointer"
            >
              <span>Continue</span>
              <CornerDownLeft className="w-3.5 h-3.5" />
            </button>
          ) : (
            <button
              type="button"
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#19BDF2] text-[#050708] font-[family-name:var(--font-inter-tight)] font-black text-xs tracking-wider uppercase hover:bg-[#41D7FF] transition-all shadow-[0_0_25px_rgba(25,189,242,0.4)] disabled:opacity-50 cursor-pointer"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  <span>Connecting & Sending...</span>
                </>
              ) : (
                <>
                  <span>Submit Inquiry</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
