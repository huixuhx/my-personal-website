"use client"
import SkillsSection from "./SkillsSeaction";
import { useInView } from "react-intersection-observer";

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
          Over the years, I’ve honed a versatile skill set that bridges the gap
          between backend efficiency and frontend experience. My expertise lies
          in designing scalable, high-performance software solutions while
          ensuring seamless functionality
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
