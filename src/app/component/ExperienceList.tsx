"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import ListSection from "./ListSection";
export default function ExperienceList() {
  const experience = [
    {
      position: "Software Developer Volunteer",
      organization: "Mental Health Society of Greater Victoria (Volunteer)",
      time: "Feb, 2025 - Current",
      location:"Canada"
    },
    {
        position: "Software Developer",
        organization: "Via Fleet (Volunteer)",
        time: "Feb, 2025 - Current",
        location:"Canada"
    },
    {
      position: "Software Engineer",
      organization: "China Merchants Bank",
      time: "Jan, 2022 - Apr, 2023",
      location:"China"
    },
    {
      position: "Software Developer",
      organization: "Fucunbao",
      time: "Jul, 2019 - Dec, 2019",
      location:"China"
    },
  ];
  const education = [
    {
      degree: "Master of Engineering in Applied Data Science",
      university: "University of Victoria",
      graduate_date: "Sep 2024",
      location:"Canada"
    },
    {
      degree: "Master of Science in Computer Science",
      university: "University of Southern California",
      graduate_date: "Dec 2021",
      location:"USA"
    },
    {
      degree: "Bachelor of Science in Computer Science",
      university: "Nanjing University of Posts and Telecommunications",
      graduate_date: "Jun 2019",
      location:"China"
    },
  ];
  return (
    <div className="flex flex-col items-center w-full  mx-auto md:w-[60%] lg:w-[50%] space-y-8">
    {/* 渲染 Experience */}
    <ListSection title="Experience" data={experience} primaryKey="position" />

    {/* 渲染 Education */}
    <ListSection title="Education" data={education} primaryKey="degree" />
  </div>
  );
}
