"use client";
import React from "react";
import { DM_Sans } from "next/font/google";
import { motion } from "framer-motion";

const DmSans = DM_Sans({
  subsets: ["latin"],
  weight: "500",
});

const About = () => {
  const Animation = {
    hidden: {
      y: -10,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={Animation}
      viewport={{
        once: true,
      }}
      transition={{
        staggerChildren: 0.2,
        duration: 0.4,
        ease: "easeInOut",
      }}
      className="about"
    >
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-6">
            <div className="power">
              <h2 className={DmSans.className}>
                Failure is The Power that Gives <span>Success</span>
              </h2>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="right-power-content">
              <p className={DmSans.className}>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
