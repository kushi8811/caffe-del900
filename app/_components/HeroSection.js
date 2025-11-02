"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Roboto } from "next/font/google";

import React from "react";
import pizza from "@/public/caffe-images/pizzaBig.png";
import pizzaBg from "@/public/caffe-images/pizza.jpg"; // Background Image

// Load Space Grotesk Font
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["500"],
});

const HeroSection = () => {
  return (
    <div className="relative flex items-center justify-center h-[400px] text-primary-700 sm:text-3xl font-extrabold">
      {/* Background Pizza Image with Opacity */}
      <div className="absolute top-1/2 left-0 w-full h-[400px] -translate-y-1/2">
        <Image
          src={pizzaBg}
          alt="Pizza Background"
          fill
          className="object-cover opacity-40 h-auto" // Adjust opacity
        />
      </div>

      {/* Pizzeria Name (Revealed when pizza splits) */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.3 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className={`${roboto.className} absolute text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold z-10`}
      >
        PIZZERIA DEL 900
      </motion.h1>

      {/* Pizza Wrapper */}
      <div className="relative w-72 md:w-96 h-72 md:h-96">
        {/* Left Half of Pizza */}
        <motion.div
          initial={{ x: 0, opacity: 0.6 }}
          animate={{ x: -100, opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute w-full h-full"
        >
          <Image
            src={pizza}
            alt="Pizza Left"
            fill
            className="w-full h-full object-cover"
            style={{ clipPath: "polygon(0 0, 50% 0, 50% 100%, 0 100%)" }}
          />
        </motion.div>

        {/* Right Half of Pizza */}
        <motion.div
          initial={{ x: 0, opacity: 0.6 }}
          animate={{ x: 100, opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute w-full h-full"
        >
          <Image
            src={pizza}
            alt="Pizza Right"
            fill
            className="w-full h-full object-cover"
            style={{ clipPath: "polygon(50% 0, 100% 0, 100% 100%, 50% 100%)" }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
