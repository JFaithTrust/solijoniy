"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import { navItems } from "@/constants";
import { FaDiscord, FaTelegramPlane } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

const Navbar = () => {
  const [active, setActive] = useState("");

  return (
    <nav className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <Link
          href="#about"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/logo.svg"
            alt="logo"
            width={46}
            height={46}
            className="cursor-pointer hover:animate-slowspin"
          />
        </Link>
        <div className="w-[500px] h-full sm:flex hidden flex-row items-center justify-between ml-20">
          <ul className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            {navItems.map((nav) => (
              <li
                key={nav.id}
                className={`${
                  active === nav.title ? "text-white" : "text-secondary"
                } hover:text-white font-medium cursor-pointer`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-row gap-2">
            <div className="rounded-full p-2 bg-[#7289da] cursor-pointer">
              <a href="https://discord.com/users/971467894342959167" target="_blank">
                <FaDiscord color="#fff" />
              </a>
            </div>
            <div className="rounded-full p-2 bg-[#229ED9] cursor-pointer">
              <a href="https://t.me/JFaithTrust" target="_blank">
                <FaTelegramPlane color="#fff" />
              </a>
            </div>
            <div className="rounded-full p-2 bg-[#0A66C2] cursor-pointer">
              <a href="https://www.linkedin.com/in/jahongir-solijoniy-2a5722293/" target="_blank">
                <FaLinkedinIn color="#fff" />
              </a>
            </div>
          </div>
      </div>
    </nav>
  );
};

export default Navbar;
