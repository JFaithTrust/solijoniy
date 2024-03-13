"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  textVariant,
} from "@/utils/motion.js";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { staggerContainer } from "@/utils/motion.js";

const SkillText = () => {
  const text = "Always learning, always growing";

  return (
    <motion.div
      className="w-full h-auto flex flex-col items-center justify-center"
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <motion.div
        variants={textVariant()}
        className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
      >
        <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
        {text.split("").map((char, i) => (
          <motion.h1
            key={i}
            variants={textVariant(i)}
            className="text-[13px] Welcome-text"
            style={{ transformOrigin: "50% 50%" }}
          >
            {char === " " ? <span>&nbsp;</span> : char}
          </motion.h1>
        ))}
      </motion.div>
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]"
      >
        Making apps with modern technologies
      </motion.div>
      <motion.div
        variants={slideInFromRight(0.85)}
        className="cursive text-[20px] text-gray-200 mb-10 mt-[10px] text-center"
      >
        Never miss a task, deadline or idea
      </motion.div>
    </motion.div>
  );
};

export default SkillText;
