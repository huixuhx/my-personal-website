"use client";
import React from "react";
import { ABOUT } from "@/app/const";
const skills = ABOUT.EXPERTISE_CONTENT;

export default function SkillsSection() {
  return (
      <div className="mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 gap-12 text-center">
        {skills.map((skill, index) => (
          <div key={index}>
            <h3 className="text-2xl font-bold text-gray-900">{skill.category}</h3>
            <p className="commen-text">{skill.items.join(" / ")}</p>
          </div>
        ))}
      </div>
  );
}