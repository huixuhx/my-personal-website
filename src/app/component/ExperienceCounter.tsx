"use client";


import { useInView } from "react-intersection-observer";
import RollingCounter from "@/app/component/RollingCounter";
import { useState, useEffect } from "react";
import IconRenderer from "@/app/component/IconRenderer";

const ExperienceCounter=() => {

  const counter = [
    { title: "Years Experience", digit: [2, 10], icon: "bag" },
    { title: "Projects Completed", digit: [3, 0, 10], icon: "smile" },
    { title: "Different Industry", digit: [4, 10], icon: "database" },
    { title: "People Worked With", digit: [1, 0, 0, 10], icon: "handshake" },
  ];
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.3,
    triggerOnce:true,
  });

  // const inView=true;
  return (
    <div 
    ref={ref} 
    className="count-section flex justify-center">
      <div className="grid grid-cols-2 gap-x-24 gap-y-8 pr-4 pl-4 w-full lg:w-[70%]">
        {counter.map((item, index) => {
         
          return (<div
            key={index}
            className="container flex flex-col justify-between gap-4 items-center col-span-full sm:col-span-1 border-b border-gray-200"
          >
            <h2 className="counter-title text-left w-full">{item.title}</h2>

            <div className="flex items-center justify-between w-full h-10 lg:h-20">
             <IconRenderer name={item.icon} className="h-10 w-10" /> 
              <div className="scroll-container flex overflow-hidden items-center justify-end w-full h-full">
                {item.digit?.map((num, i) => (
                  <RollingCounter
                    key={i}
                    inView={inView}
                    targetNumber={num}
                    duration={2000}
                  />
                ))}
              </div>
            </div>
          </div>)

})}
      </div>
    </div>
  );
}
export default ExperienceCounter