import React from "react";
import HeroSection from "@/components/home/HeroSection";
import CollaborationsSection from "@/components/home/CollaborationsSection";
import MeetMaheenSection from "@/components/home/MeetMaheenSection";
import ServicesRowsSection from "@/components/home/ServicesRowsSection";
import FeaturedWorkSection from "@/components/home/FeaturedWorkSection";
import ClosingInviteSection from "@/components/home/ClosingInviteSection";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full bg-[#050708]">
      {/* 01 Navigation & Hero */}
      <HeroSection />

      {/* 02 Selected Collaborations */}
      <CollaborationsSection />

      {/* 03 Meet Maheen */}
      <MeetMaheenSection />

      {/* 04 Work with Journey Studio (4 Horizontal Rows) */}
      <ServicesRowsSection />

      {/* 05 Selected Work (3 Featured Projects) */}
      <FeaturedWorkSection />

      {/* 06 Closing Invitation */}
      <ClosingInviteSection />
    </div>
  );
}
