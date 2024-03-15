"use client";

import { projects } from "@/constants";
import React from "react";
import ProjectCard from "../sub/ProjectCard";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  staggerContainer,
  textVariant,
} from "@/utils/motion.js";
import { SparklesIcon } from "@heroicons/react/24/solid";

const Projects = () => {
  const text = "Fall seven times and stand up eight.";
  return (
    <div
      className="flex flex-col items-center justify-center py-20 relative z-20"
      id="projects"
    >
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <div className="w-full h-auto flex flex-col items-center justify-center">
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
            My Projects.
          </motion.div>
          <motion.div
            variants={slideInFromRight(0.8)}
            className="cursive text-[20px] text-gray-200 mb-10 mt-[10px] text-center"
          >
            May I present to you my projects?
          </motion.div>
        </div>
        <div className="h-full w-full grid 2xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 px-10 gap-7">
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
