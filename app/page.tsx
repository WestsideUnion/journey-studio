import React from "react";
import HeroSection from "@/components/home/HeroSection";
import ApproachSection from "@/components/home/ApproachSection";
import ServicesSection from "@/components/home/ServicesSection";
import SelectedWorkSection from "@/components/home/SelectedWorkSection";
import WhoWeWorkWithSection from "@/components/home/WhoWeWorkWithSection";
import BrandsSection from "@/components/home/BrandsSection";
import ArtPrintsSection from "@/components/home/ArtPrintsSection";
import JournalSection from "@/components/home/JournalSection";
import InquirySection from "@/components/home/InquirySection";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full bg-[#050708]">
      {/* 01 Hero Section */}
      <HeroSection />

      {/* 02 Our Approach */}
      <ApproachSection />

      {/* 03 Services */}
      <ServicesSection />

      {/* 04 Selected Work */}
      <SelectedWorkSection />

      {/* 05 Who We Work With & Ideas Are Better Together Feature */}
      <WhoWeWorkWithSection />

      {/* 06 Brands, People, Places, Communities */}
      <BrandsSection />

      {/* 07 Art & Prints */}
      <ArtPrintsSection />

      {/* 08 Journal */}
      <JournalSection />

      {/* 09 Project Inquiry */}
      <InquirySection />
    </div>
  );
}
