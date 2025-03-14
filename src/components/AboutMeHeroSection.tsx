"use client"
import Image from "next/image";
import React from "react";

import {HERO,ABOUT} from "@/app/const"
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
            src={HERO.HERO_IMAGE}
            alt="photo"
            fill
            className="object-cover" // Makes sure the image covers the full grid area
          />
        </div>
      </div>
      <div ref={aboutRef} className="about-section w-full flex justify-center pl-[20px] pr-[20px]">
        <h2 className={`container px-4 about-title text-left ${aboutInView?"float-up-text":"opacity-0"}`} >
        {ABOUT.ABOUT_CONTENT}
        </h2>
      </div>
    </div>
  );
}
