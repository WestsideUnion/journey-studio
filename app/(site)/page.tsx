import React from "react";
import HeroSection from "@/components/home/HeroSection";
import CollaborationsSection from "@/components/home/CollaborationsSection";
import MeetMaheenSection from "@/components/home/MeetMaheenSection";
import ServicesRowsSection from "@/components/home/ServicesRowsSection";
import FeaturedWorkSection from "@/components/home/FeaturedWorkSection";
import ClosingInviteSection from "@/components/home/ClosingInviteSection";

import { getLandingPageVisuals } from "@/lib/data/landingPage";
import { getProjects } from "@/lib/data/projects";
import { getServices } from "@/lib/data/services";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const [visuals, projects, services] = await Promise.all([
    getLandingPageVisuals(),
    getProjects(),
    getServices(),
  ]);

  return (
    <div className="flex flex-col w-full bg-[#050708]">
      {/* 01 Navigation & Hero */}
      <HeroSection
        backgroundImage={visuals.heroBackground.url}
        altText={visuals.heroBackground.alt}
        opacity={visuals.heroBackground.opacity}
      />

      {/* 02 Selected Collaborations */}
      <CollaborationsSection />

      {/* 03 Meet Maheenblues */}
      <MeetMaheenSection
        imageSrc={visuals.meetMaheenImage.url}
        altText={visuals.meetMaheenImage.alt}
      />

      {/* 04 Work with Journey Studio (4 Horizontal Rows) */}
      <ServicesRowsSection services={services} />

      {/* 05 Selected Work (3 Featured Projects) */}
      <FeaturedWorkSection projects={projects} />

      {/* 06 Closing Invitation */}
      <ClosingInviteSection
        backgroundImage={visuals.closingBackground.url}
        altText={visuals.closingBackground.alt}
        opacity={visuals.closingBackground.opacity}
      />
    </div>
  );
}
