"use client";
import React from "react";
import { DM_Sans } from "next/font/google";
import Link from "next/link";
import { Open_Sans } from "next/font/google";
import { motion } from "framer-motion";
import { BsArrowUpRight } from "react-icons/bs";
import Behance from "@/svg/Behance";
import Dribble from "@/svg/Dribble";
import InstagramTwo from "@/svg/InstagramTwo";

const DmSans = DM_Sans({
  subsets: ["latin"],
  weight: "500",
});
const OpenSans = Open_Sans({
  subsets: ["latin"],
});

const HeroLeft = () => {
  return (
    <div className="hero-text">
      <h1 className={DmSans.className}>
        <span>Creative</span>
        <span>and Work</span>
        <span>Solution</span>
      </h1>
      <p className={DmSans.className}>
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered.
      </p>

      <div className="hero-buttons">
        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{
            type: "spring",
            stiffness: 200,
          }}
          className={OpenSans.className}
        >
          Say Hello
        </motion.button>
        <Link href="/" className={DmSans.className}>
          My Work
          <BsArrowUpRight />
        </Link>
      </div>
      <div className="social-icons-hero d-flex align-items-center gap-5">
        <span className={DmSans.className}>Follow Me On</span>
        <div className="hero-icons d-flex gap-3">
          <Link href="/">
            <Behance />
          </Link>
          <Link href="/">
            <Dribble />
          </Link>
          <Link href="/">
            <InstagramTwo />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroLeft;
