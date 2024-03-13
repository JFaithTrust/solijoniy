"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
  staggerContainer,
  textVariant,
} from "@/utils/motion.js";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Button from "./button/Button";
const Spline = React.lazy(() => import("@splinetool/react-spline"));

const HeroContent = () => {
  const text = "Welcome to my portfolio :)";
  return (
    <motion.div
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="flex lg:flex-row flex-col items-center justify-center sm:px-20 px-10 sm:mt-40 mt-20 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
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
          className="flex flex-col gap-6 mt-6 sm:text-6xl text-4xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Hi there! I&apos;m
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Solijoniy Jahongir{" "}
            </span>
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.7)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I&apos;m a skilled front end developer with experience in JavaScript
          and Typescript, and expertise in frameworks like React, Next js and Three.js.
          I am a fast learner and work well with a team. Check out my projects
          and skills.
        </motion.p>
        <motion.div variants={slideInFromLeft(0.9)}>
          <Button />
        </motion.div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="flex justify-center items-center md:w-[700px] sm:w-[640px] w-[360px] h-[650px]"
      >
        <Spline scene="https://prod.spline.design/TWpb5hCLAll88iFI/scene.splinecode" />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
