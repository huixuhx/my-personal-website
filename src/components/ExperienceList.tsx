"use client";
import ListSection from "./ListSection";
import { ABOUT } from "@/app/const";
export default function ExperienceList() {
  const experience = ABOUT.EXPERIENCE;
  const education = ABOUT.EDUCATION;
  return (
    <div className="flex flex-col items-center w-full  mx-auto md:w-[60%] lg:w-[50%] space-y-8">
    {/* 渲染 Experience */}
    <ListSection title="Experience" data={experience} primaryKey="position" />

    {/* 渲染 Education */}
    <ListSection title="Education" data={education} primaryKey="degree" />
  </div>
  );
}
