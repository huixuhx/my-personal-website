"use client";
import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaCode,
} from "react-icons/fa";
import { HiArrowUpRight } from "react-icons/hi2";

import InViewAnimateWrapper from "./InViewAnimateWrapper";
import { FOOTER } from "@/app/const";
export default function MyFooter() {
  return (
    <footer className=" pt-12 mt-20">
      {/* ✅ Layout Layer: Ensures full-width structure */}
      <div className="w-full flex flex-col justify-center">
        {/* ✅ Container Layer: Centers content & sets max width */}
        <div className="w-full flex justify-center py-24 bg-gray-100 shadow-sm">
          <div className="flex flex-col items-center w-full gap-6">
            {/* ✅ Content Wrapper: Groups heading & text */}
            <InViewAnimateWrapper
              animate="float-up"
              options={{ threshold: 0.5, triggerOnce: false }}
            >
              <div className="text-center">
                <h1 className="text-[6vw] font-bold">Let&apos;s Work Together!</h1>
              </div>
            </InViewAnimateWrapper>
            <InViewAnimateWrapper
              animate="float-up-text"
              options={{ threshold: 0.5, triggerOnce: false }}
            >
              <div className="container mx-auto  max-w-4xl">
                <p className="common-text text-center">
               {FOOTER.CONTENT}
                </p>
              </div>
            </InViewAnimateWrapper>
            {/* ✅ Button Section */}
            <div className="flex justify-center">
              <button
                onClick={() =>
                  (window.location.href =
                    "mailto:huixuhx@outlook.com?subject=Hiring Inquiry&body=Hi, I’d like to discuss a job opportunity.")
                }
                className="flex items-center justify-center gap-2 px-6 py-3 bg-black text-white text-lg font-semibold rounded-full shadow-md hover:scale-110 transition-all duration-300"
              >
                Hire Me
                <span className="text-xl">→</span>
              </button>
            </div>
          </div>
        </div>

        <div className="container mx-auto flex flex-col items-center py-16 gap-4">
          <a href="mailto:huixuhx@outlook.com">
            <div className="flex flex gap-1">
              <h2 className="text-xl font-medium text-center">
                huixuhx@outlook.com
              </h2>
              <HiArrowUpRight strokeWidth={1.5} />
            </div>
          </a>
          <p className="common-text w-[50%] text-center">
           {FOOTER.REACHOUT}
          </p>
          <div className="flex flex gap-6">
            <Link href="https://github.com/huixuhx" passHref legacyBehavior>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center text-2xl text-gray-500 hover:text-black hover:scale-120 transition-transform transform-gpu duration-200"
              >
                <FaGithub />
              </a>
            </Link>
            <Link
              href="https://www.linkedin.com/in/huixuhx"
              passHref
              legacyBehavior
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center text-2xl text-gray-500 hover:text-black hover:scale-120 transition-transform transform-gpu duration-200"
              >
                <FaLinkedin />
              </a>
            </Link>
            <a
              href="mailto:huixuhx@outlook.com"
              className="inline-flex items-center justify-center text-2xl text-gray-500 hover:text-black hover:scale-120 transition-transform transform-gpu duration-200 pointer-events-auto"
            >
              <FaEnvelope />
            </a>
            <Link
              href="https://leetcode.cn/u/bravado-9"
              passHref
              legacyBehavior
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center text-2xl text-gray-500 hover:text-black hover:scale-120 transition-transform transform-gpu duration-200"
              >
                <FaCode />
              </a>
            </Link>
          </div>
          <p className="common-text text-center mt-4">
            Designed by{" "}
            <Link href="/">
              <span className="underline">Hui Xu</span>
            </Link>
          </p>{" "}
          <div className="flex justify-between gap-4 common-text">
            <Link href="/">
              <p>Home</p>
            </Link>
            <Link href="/about">
              <p>About Me</p>
            </Link>
            <Link href="/services">
              <p>Services</p>
            </Link>
            <Link href="/projects">
              <p>Projects</p>
            </Link>
            <Link href="/blog">
              <p>Blog</p>
            </Link>
          </div>
          <div>
            <p className="common-text text-center">
              © {new Date().getFullYear()} Hui Xu. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
