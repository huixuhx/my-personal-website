import Image from "next/image";

import ExperienceCounter from "@/app/component/ExperienceCounter";
import ExperienceList from "@/app/component/ExperienceList";
import AboutMeHeroSection from "../component/AboutMeHeroSection";
import TechStack from "../component/TechStack";
import SkillsSection from "../component/SkillsSeaction";
import SkillsExpertiseSection from "../component/SkillsExpertiseSection";
export default function about() {
  const inView = true;
  return (
    <>
      <AboutMeHeroSection />
      <ExperienceCounter />

      <div className="experience-section">
        <ExperienceList />
      </div>
      <div className="experience-section">
      <SkillsExpertiseSection />
      <TechStack />
      </div>
    </>
  );
}
