import React from "react";
import SkillText from "../sub/SkillText";
import Image from "next/image";
import {
  Backend_skill,
  Frontend_skill,
  Skill_data,
} from "@/constants";
import SkillDataProvider from "../sub/SkillProvider";

const Skills = () => {
  return (
    <section
      id="skills"
      className="z-0 flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden sm:py-20 py-6"
      style={{ transform: "scale(0.9" }}
    >
      <SkillText />
      <div>
        <div className="grid sm:grid-cols-6 grid-cols-3 justify-center flex-wrap mt-4 gap-10 items-center">
          {Skill_data.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.Image}
              index={index}
              width={image.width}
              height={image.height}
            />
          ))}
        </div>

        <div className="grid sm:grid-cols-6 grid-cols-3 justify-center flex-wrap mt-4 gap-10 items-center">
          {Frontend_skill.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.Image}
              index={index}
              width={image.width}
              height={image.height}
            />
          ))}
        </div>
        <div className="grid sm:grid-cols-6 grid-cols-3 justify-center flex-wrap mt-4 gap-10 items-center">
          {Backend_skill.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.Image}
              index={index}
              width={image.width}
              height={image.height}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-row relative items-center justify-center w-full h-full">
      <div className="flex flex-row justify-around flex-wrap sm:mt-4 mt-0 gap-5 items-center sm:min-h-[700px] min-h-[300px]">
          <Image src="/bg.svg" alt="skill" fill />
        </div>
    </div>
      <div className="w-full h-full absolute sm:block hidden">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
