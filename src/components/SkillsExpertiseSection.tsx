"use client"
import SkillsSection from "./SkillsSeaction";
import { useInView } from "react-intersection-observer";
import { ABOUT } from "@/app/const";
export default function SkillsExpertiseSection() {
  const { ref, inView } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });
  return (
    <>
      <div 
      ref={ref}
      className="mb-6 p-4">
        <h2
          className={`common-title text-center mb-4 ${
            inView ? "float-up" : "opacity-0"
          }`}
        >
          Skills & Expertise
        </h2>

        <p
          className={`common-text text-center md:w-[60%] mx-auto ${
            inView ? "float-up-text" : "opacity-0"
          }`}
        >
         {ABOUT.EXPERTISE_TEXT}
        </p>
      </div>
      <div 
          className={`common-text text-center md:w-[60%] mx-auto ${
            inView ? "float-up" : "opacity-0" }`}>
      <SkillsSection />
      </div>
    </>
  );
}
