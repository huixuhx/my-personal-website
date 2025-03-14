"use client";


import { useInView } from "react-intersection-observer";
import RollingCounter from "@/components/RollingCounter";
import IconRenderer from "@/components/IconRenderer";
import {ABOUT} from"@/app/const"
const ExperienceCounter=() => {

  const counter = ABOUT.COUNTER
  const { ref, inView } = useInView({
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