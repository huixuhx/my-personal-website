"use client";
import React from "react";

const skills = [
  {
    category: "Backend Engineering",
    items: ["Microservices Architecture", "API Development", "Database Optimization"],
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS Cloud", "Docker & Kubernetes", "CI/CD Automation"],
  },
  {
    category: "Full-Stack Development",
    items: ["React & Next.js", "GraphQL & REST APIs", "Performance Optimization"],
  },
  {
    category: "Software Engineering Practices",
    items: ["System Design", "Security & Authentication", "Testing & Code Quality"],
  },
];

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