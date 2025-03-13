"use client"
import Image from "next/image";
import React, { useRef, useCallback } from "react";
import { useEffect } from "react";

import { useInView } from "react-intersection-observer";


export default function AboutMeHeroSection() {

    const { ref: titleRef, inView: titleInView } = useInView({ threshold: 0.5, triggerOnce: true });
    const { ref: imageRef, inView: imageInView } = useInView({ threshold: 0.1, triggerOnce: true });
    const { ref: aboutRef, inView: aboutInView } = useInView({ threshold: 0.2, triggerOnce: true });
  
  return (
    <div >
      <div className="hero-section flex flex-col gap-y-4">
        <h1 ref={titleRef} className={`hero-title p-4 text-center  ${titleInView ? "float-up":"opacity-0"}`}>About Me</h1>
        <div ref={imageRef} className={`relative w-full h-auto aspect-[16/9] ${imageInView ? "float-up-hero" : "opacity-0"}`}>
          <Image
            src="/hero-2.png"
            alt="photo"
            fill
            className="object-cover" // Makes sure the image covers the full grid area
          />
        </div>
      </div>
      <div ref={aboutRef} className="about-section w-full flex justify-center pl-[20px] pr-[20px]">
        <h2 className={`about-title text-left lg:w-[60%] ${aboutInView?"float-up-text":"opacity-0"}`} >
          Hi, I'm Hui—a passionate software engineer, developer, and
          problem-solver dedicated to crafting scalable, high-performance
          applications. With expertise in backend and full-stack development, I
          specialize in blending efficiency with functionality to build robust
          Spring Boot microservices, GraphQL APIs, and cloud-native solutions on
          AWS.
          {/* <br />
               My experience spans banking, data engineering, and distributed
               systems, where I have optimized high-traffic services, real-time log
               pipelines with Kafka, and scalable React applications. I thrive on
               solving complex challenges with clean architecture and cutting-edge
               technologies to create impactful, user-friendly solutions. */}
        </h2>
      </div>
    </div>
  );
}
