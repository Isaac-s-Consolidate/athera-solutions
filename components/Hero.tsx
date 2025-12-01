'use client';

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const sentence = [
  {
    text: 'Bridging',
    className:
      'bg-gradient-to-r from-green-600 to-green-300 bg-clip-text text-transparent',
  },
  { text: 'the', className: '' },
  { text: 'Gap', className: '' },
  { text: 'Between', className: '' },
  {
    text: 'Ideas',
    className:
      'bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent',
  },
  { text: 'and', className: '' },
];

const line2 = [
  {
    text: 'Execution',
    className:
      'bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent',
  },
];

// ANIMATION SETTINGS
const container = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.25 }, // Slow word-by-word animation
  },
};

const child = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

export default function Hero() {
  // Calculate proper delay: (number of words × stagger time) + small buffer
  const line2Delay = sentence.length * 0.25 + 0.3;

  return (
    <section className="relative w-full min-h-[90vh] md:min-h-[100vh] flex items-center justify-center overflow-hidden bg-black">
      {/* Background Wrapper */}
      <div className="absolute inset-0 z-0">
        {/* Hero Image */}
        <Image
          src="/images/hero-bg.png"
          alt="Hero background"
          fill
          priority
          quality={100}
          className="object-cover opacity-50"
        />

        {/* Replicating Figma's top green gradient border */}
        <div
          className="absolute top-0 left-0 w-full h-[2px]
            bg-gradient-to-r from-[#010A04] via-[#294637] to-[#010A04]"
        />

        {/* Drop-shadow Figma uses */}
        <div className="absolute inset-0 shadow-[0_4px_4px_rgba(0,0,0,0.25)] pointer-events-none" />
      </div>

      <div className="px-4 text-center max-w-5xl mx-auto mt-20">
        {/* COMBINED HEADING - Both lines together for better control */}
        <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
          {/* LINE 1 */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-wrap justify-center gap-2 mb-2"
          >
            {sentence.map((word, i) => (
              <motion.span key={i} variants={child} className={word.className}>
                {word.text}
              </motion.span>
            ))}
          </motion.div>

          {/* LINE 2 - Properly delayed */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            transition={{ delay: line2Delay }}
            className="flex flex-wrap justify-center"
          >
            {line2.map((word, i) => (
              <motion.span key={i} variants={child} className={word.className}>
                {word.text}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* SUBTEXT */}
        <p className="text-gray-300 mt-6 text-lg md:text-xl leading-relaxed px-4">
          Digital Innovation Simplified. Athera Solutions is the technology arm
          of Isaac Consolidated, we help individuals, startups, and
          organizations achieve measurable impact through smart, efficient, and
          scalable technology.
        </p>

        {/* BUTTON */}
        <div className="flex justify-center mt-6 sm:mt-5 md:mt-4">
          <button
            className="w-[90%] max-w-[461px] h-[60px] rounded-full border border-white/40 text-white font-semibold 
            hover:bg-[#0BB453] transition-all backdrop-blur-md shadow-[0_0_20px_rgba(255,255,255,0.15)]"
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}
