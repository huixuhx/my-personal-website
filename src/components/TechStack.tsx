"use client";
import React from "react";
import dynamic from "next/dynamic";
import InViewAnimateWrapper from "./InViewAnimateWrapper";

// Dynamically import icons to prevent hydration mismatches
const FaPython = dynamic(() => import("react-icons/fa").then((mod) => mod.FaPython), { ssr: false });
const FaJava = dynamic(() => import("react-icons/fa").then((mod) => mod.FaJava), { ssr: false });
const FaAws = dynamic(() => import("react-icons/fa").then((mod) => mod.FaAws), { ssr: false });
const FaUnity = dynamic(() => import("react-icons/fa").then((mod) => mod.FaUnity), { ssr: false });

const SiDotnet = dynamic(() => import("react-icons/si").then((mod) => mod.SiDotnet), { ssr: false });
const SiCplusplus = dynamic(() => import("react-icons/si").then((mod) => mod.SiCplusplus), { ssr: false });
const SiNginx = dynamic(() => import("react-icons/si").then((mod) => mod.SiNginx), { ssr: false });
const SiJavascript = dynamic(() => import("react-icons/si").then((mod) => mod.SiJavascript), { ssr: false });
const SiSpringboot = dynamic(() => import("react-icons/si").then((mod) => mod.SiSpringboot), { ssr: false });
const SiHibernate = dynamic(() => import("react-icons/si").then((mod) => mod.SiHibernate), { ssr: false });
const SiGraphql = dynamic(() => import("react-icons/si").then((mod) => mod.SiGraphql), { ssr: false });
const SiMysql = dynamic(() => import("react-icons/si").then((mod) => mod.SiMysql), { ssr: false });
const SiPostgresql = dynamic(() => import("react-icons/si").then((mod) => mod.SiPostgresql), { ssr: false });
const SiApachekafka = dynamic(() => import("react-icons/si").then((mod) => mod.SiApachekafka), { ssr: false });
const SiRedis = dynamic(() => import("react-icons/si").then((mod) => mod.SiRedis), { ssr: false });
const SiReact = dynamic(() => import("react-icons/si").then((mod) => mod.SiReact), { ssr: false });
const SiNextdotjs = dynamic(() => import("react-icons/si").then((mod) => mod.SiNextdotjs), { ssr: false });
const SiTypescript = dynamic(() => import("react-icons/si").then((mod) => mod.SiTypescript), { ssr: false });
const SiTailwindcss = dynamic(() => import("react-icons/si").then((mod) => mod.SiTailwindcss), { ssr: false });
const SiSass = dynamic(() => import("react-icons/si").then((mod) => mod.SiSass), { ssr: false });
const SiBootstrap = dynamic(() => import("react-icons/si").then((mod) => mod.SiBootstrap), { ssr: false });
const SiDocker = dynamic(() => import("react-icons/si").then((mod) => mod.SiDocker), { ssr: false });
const SiKubernetes = dynamic(() => import("react-icons/si").then((mod) => mod.SiKubernetes), { ssr: false });
const SiTerraform = dynamic(() => import("react-icons/si").then((mod) => mod.SiTerraform), { ssr: false });
const SiGithubactions = dynamic(() => import("react-icons/si").then((mod) => mod.SiGithubactions), { ssr: false });
const SiJenkins = dynamic(() => import("react-icons/si").then((mod) => mod.SiJenkins), { ssr: false });

const techStack = [
  { name: "Python", icon: <FaPython className="text-black" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-black" /> },
  { name: "Java", icon: <FaJava className="text-black" /> },
  { name: "AWS", icon: <FaAws className="text-black" /> },
  { name: ".NET", icon: <SiDotnet className="text-black" /> },
  { name: "C#", icon: <SiDotnet className="text-black" /> },
  { name: "C++", icon: <SiCplusplus className="text-black" /> },
  { name: "Unity", icon: <FaUnity className="text-black" /> },
  { name: "Nginx", icon: <SiNginx className="text-black" /> },
  { name: "Spring Boot", icon: <SiSpringboot className="text-black" /> },
  { name: "Hibernate", icon: <SiHibernate className="text-black" /> },
  { name: "GraphQL", icon: <SiGraphql className="text-black" /> },
  { name: "MySQL", icon: <SiMysql className="text-black" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-black" /> },
  { name: "Kafka", icon: <SiApachekafka className="text-black" /> },
  { name: "Redis", icon: <SiRedis className="text-black" /> },
  { name: "React.js", icon: <SiReact className="text-black" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-black" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-black" /> },
  { name: "SCSS", icon: <SiSass className="text-black" /> },
  { name: "Bootstrap", icon: <SiBootstrap className="text-black" /> },
  { name: "Docker", icon: <SiDocker className="text-black" /> },
  { name: "Kubernetes", icon: <SiKubernetes className="text-black" /> },
  { name: "Terraform", icon: <SiTerraform className="text-black" /> },
  { name: "GitHub Actions", icon: <SiGithubactions className="text-black" /> },
  { name: "Jenkins", icon: <SiJenkins className="text-black" /> },
];

export default function TechStack() {
  return (
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Title */}
        <InViewAnimateWrapper animate="float-up" options={{threshold:0.2,triggerOnce: true}}>


        <h2 className="common-title">Tech Stack</h2>
        <p className="commen-text  mt-3">
          Technologies I work with to build scalable and high-performance applications.
        </p>
    

        {/* Tech Stack Grid */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="flex items-center justify-start border border-gray-300 p-4 gap-2 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 bg-white"
            >
              <span className="text-3xl">{tech.icon}</span>
              <span className="text-md font-semibold">{tech.name}</span>
            </div>
          ))}
        </div>
        </InViewAnimateWrapper>
      </div>

  );
}