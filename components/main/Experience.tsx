"use client";

import { experiences } from "@/constants";
import {
  fadeIn,
  slideInFromLeft,
  slideInFromRight,
  textVariant,
} from "@/utils/motion.js";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { VerticalTimeline } from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import ExperienceCard from "../sub/ExperienceCard";
import { motion } from "framer-motion";
import { staggerContainer } from "@/utils/motion.js";

const Experience = () => {
  const text = "What I have done so far";

  return (
    <section
      id="work"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden z-20"
    >
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
          <SparklesIcon className="text-[#b49bff] mr-[5px] h-5 w-5" />
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
          Work Experience.
        </motion.div>
        <motion.div
          variants={slideInFromRight(0.8)}
          className="cursive text-[20px] text-gray-200 mb-10 mt-[10px] text-center"
        >
          Can you guess what I have done?
        </motion.div>
      </motion.div>
      <motion.div
        className="flex flex-col"
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </motion.div>
    </section>
  );
};

export default Experience;
