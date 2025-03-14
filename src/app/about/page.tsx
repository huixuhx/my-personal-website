import ExperienceCounter from "@/components/ExperienceCounter";
import ExperienceList from "@/components/ExperienceList"
import AboutMeHeroSection from "@/components/AboutMeHeroSection";
import TechStack from "@/components/TechStack";
import SkillsExpertiseSection from "@/components/SkillsExpertiseSection";
export default function About() {
  return (
    <>
      <AboutMeHeroSection />
      <ExperienceCounter />
      <div className="experience-section">
        <ExperienceList />
      </div>
      <div className="experience-section">
        <SkillsExpertiseSection />
      </div>
      <section className="container mx-auto">
        <TechStack />
      </section>
    </>
  );
}
