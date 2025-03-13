"use client"
import React from "react";
import { motion } from "framer-motion";

interface RollingCounterProps {
  targetNumber: number;
  duration?: number; 
  inView:boolean// Optional prop to control animation speed (in ms)
  //   className?: string; // Optional className for styling
}

const RollingCounter: React.FC<RollingCounterProps> = ({
  targetNumber,
  duration = 100,
  inView =false
}) => {

  duration = duration / 1000;
  return (
    // <div className="overflow-hidden flex items-center h-full">
    <motion.div
      // ref={ref}
      initial={{ y: "-500%", opacity: 0 }}
      animate={
        inView
          ? { opacity: 1, y: `-${targetNumber * 100}%` }
          : { y: "-500%", opacity: 0 }
      }
      // animate={{opacity:1, y:`-${targetNumber * 100}%`}}

      transition={{ duration: duration, ease: "easeInOut" }}
      viewport={{ once: true, amount: 0.5 }}
      className="flex flex-col h-full"
    >
      {[...Array.from({ length: 10 }, (_, i) => i), "+"].map((item, index) => (
        <h2
          key={index}
          className="flex items-center justify-center w-full h-full counter-item-num"
        >
          {item}
        </h2>
      ))}
    </motion.div>
    // </div>
  );
};

export default RollingCounter;
