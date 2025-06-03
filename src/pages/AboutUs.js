import React from "react";
// components
import { HeaderSection } from "../components/aboutus/HeaderSection";
import { AboutUsSection } from "../components/aboutus/AboutUsSection";
import { StatsSection } from "../components/aboutus/StatsSection";
import { TeamSection } from "../components/aboutus/TeamSection";
import { GroupSection } from "../components/aboutus/GroupSection";

function AboutUs() {
  return (
    <div>
      {/* Header Section */}
      <HeaderSection />

      {/* About Us Section */}
      <AboutUsSection />

      {/* Stats Section */}
      <StatsSection />

      {/* Team Section */}
      <TeamSection />

      {/* KPV Groups Section */}
      <GroupSection />
    </div>
  );
}

export default AboutUs;
