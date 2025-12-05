'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { images } from '@/public/images/images';
import CoreValues from '../ourCoreValues';
import ContactForm from '@/components/ContactForm';
import Delivering from '@/components/Delivering';

const teamMembers = [
  {
    name: 'Mr. Isaac Ojo',
    title: 'CEO',
    image: images.isaac,
    linkedin: '#',
  },
  {
    name: 'Ms. Olivia',
    title: 'Lead, Community',
    image: images.olivia,
    linkedin: '#',
  },
  {
    name: 'Mr. Emene Odinaka',
    title: 'Lead, Project Manager',
    image: images.emma,
    linkedin: '#',
  },
  {
    name: 'Mr. Abel',
    title: 'Lead, Product Designer',
    image: images.abel,
    linkedin: '#',
  },
  {
    name: 'Mr. Collins',
    title: 'Lead, Software Engineer',
    image: images.collins,
    linkedin: '#',
  },
  {
    name: 'Ms. Jessica',
    title: 'Product Designer',
    image: images.jessica,
    linkedin: '#',
  },
  {
    name: 'Ms. Favour',
    title: 'Product Designer',
    image: images.favor,
    linkedin: '#',
  },
  {
    name: 'Ms. Victoria',
    title: 'Virtual Assistant',
    image: images.victoria,
    linkedin: '#',
  },
  {
    name: 'Mr. Cole',
    title: 'Graphic Designer',
    image: images.cole,
    linkedin: '#',
  },
];

// Separate Team Component
const TeamSection = () => {
  return (
    <section className="relative w-full py-16 md:py-24 bg-[#010A04] px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="w-full max-w-4xl mx-auto mb-16">
          <h2 className="flex items-center justify-center text-4xl font-semibold mb-14 gap-6">
            <Image
              src={images.toplift}
              alt=""
              aria-hidden="true"
              className="w-10 h-10 opacity-80"
              width={40}
              height={40}
            />
            <span className="bg-gradient-to-r from-[#0BB453] to-[#242243] bg-clip-text text-transparent">
              Team
            </span>
            <Image
              src={images.topright}
              alt=""
              aria-hidden="true"
              className="w-10 h-10 opacity-80"
              width={40}
              height={40}
            />
          </h2>
        </div>

        {/* CEO - Larger Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-16"
        >
          <div className="text-center">
            {/* Image container with gradient border */}
            <div className="relative w-40 h-40 md:w-48 md:h-48 mx-auto mb-4 group">
              {/* Gradient border - always visible on hover */}
              <div
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(135deg, #0daa52 0%, #242243 100%)',
                  padding: '2px',
                  WebkitMask:
                    'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                }}
              ></div>

              {/* Image with zoom effect */}
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <Image
                  src={teamMembers[0].image}
                  alt={teamMembers[0].name}
                  fill
                  className="rounded-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>

            <h3 className="text-xl md:text-2xl font-semibold text-white mb-1">
              {teamMembers[0].name}
            </h3>
            <p className="text-gray-400 mb-2">{teamMembers[0].title}</p>
            <a
              href={teamMembers[0].linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-500/10 hover:bg-green-500/20 transition-colors"
            >
              <Image
                src={images.linkedin}
                alt="LinkedIn"
                width={16}
                height={16}
                className="w-4 h-4"
              />
            </a>
          </div>
        </motion.div>

        {/* Rest of Team - Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {teamMembers.slice(1).map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              {/* Image container with gradient border */}
              <div className="relative w-28 h-28 md:w-32 md:h-32 mx-auto mb-3 group">
                {/* Gradient border - always visible on hover */}
                <div
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none"
                  style={{
                    background:
                      'linear-gradient(135deg, #0daa52 0%, #242243 100%)',
                    padding: '2px',
                    WebkitMask:
                      'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                  }}
                ></div>

                {/* Image with zoom effect */}
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="rounded-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>

              <h3 className="text-base md:text-lg font-semibold text-white mb-1">
                {member.name}
              </h3>
              <p className="text-sm text-gray-400 mb-2">{member.title}</p>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-green-500/10 hover:bg-green-500/20 transition-colors"
              >
                <Image
                  src={images.linkedin}
                  alt="LinkedIn"
                  width={14}
                  height={14}
                  className="w-3.5 h-3.5"
                />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutUsPage = () => {
  return (
    <main className="w-full min-h-screen bg-[#010A04] text-white pt-28">
      {/* ---------------- SECTION 1 — OUR STORY ---------------- */}
      <section className="w-full px-6 md:px-12 lg:px-20 text-center mb-24">
        <button className="border border-[#e2e7ec] text-white px-6 py-2 rounded-full text-sm hover:bg-[#0BB453] transition-all backdrop-blur-md shadow-[0_0_20px_rgba(255,255,255,0.15)]">
          Our Story
        </button>

        <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold mt-6">
          Transforming Ideas Into Impactful Digital Solutions.
        </h1>

        <p className="max-w-2xl mx-auto mt-6 text-sm md:text-base text-gray-300 leading-relaxed">
          Athera Solutions was born from a simple belief – that technology
          should make life and work easier, not harder. We started as a small
          team with a big dream: to create solutions that empower people,
          connect businesses, and inspire change.
        </p>
      </section>

      {/* ---------------- SECTION 2 — OUR MISSION & VISION ---------------- */}
      <section className="w-full px-6 md:px-12 lg:px-20 mb-24">
        {/* Header */}
        <div className="w-full max-w-4xl mx-auto mb-16">
          <h2 className="flex items-center justify-center text-4xl font-semibold mb-14 gap-6">
            <Image
              src={images.toplift}
              alt=""
              aria-hidden="true"
              className="w-10 h-10 opacity-80"
              width={40}
              height={40}
            />
            <span className="bg-gradient-to-r from-[#0BB453] to-[#242243] bg-clip-text text-transparent">
              Our Mission & Vision
            </span>
            <Image
              src={images.topright}
              alt=""
              aria-hidden="true"
              className="w-10 h-10 opacity-80"
              width={40}
              height={40}
            />
          </h2>
        </div>

        <div className="max-w-7xl mx-auto space-y-8">
          {/* Vision Card - LEFT SIDE */}
          <div className="relative group border-gradient w-full md:max-w-3xl">
            {/* Real card content */}
            <div className="relative rounded-xl bg-[#0A1A12] border border-[#0F2E1F]/50 p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-left">
                Our Vision
              </h3>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed text-left">
                To be a trusted leader in digital transformation – helping
                businesses harness the power of technology to achieve lasting
                success.
              </p>
            </div>
          </div>

          {/* Mission Card - RIGHT SIDE */}
          <div className="relative group border-gradient w-full md:max-w-3xl md:ml-auto">
            <div className="relative rounded-xl bg-[#0A1A12] border border-[#0F2E1F]/50 p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-left">
                Our Mission
              </h3>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed text-left">
                To make digital transformation accessible, efficient, and
                sustainable for individuals and organizations across Africa and
                beyond — empowering them to build, launch, and scale with
                confidence.
              </p>
            </div>
          </div>

          {/* Promise Card - LEFT SIDE WITH GREEN CORNER */}
          <div className="relative group border-gradient w-full md:max-w-3xl">
            <div className="relative rounded-xl bg-[#0A1A12] border border-[#0F2E1F]/50 p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-left">
                Our Promise
              </h3>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed text-left">
                At Athera Solutions, we don&apos;t just write code — we engineer
                possibilities.
              </p>

              {/* Green Corner Accent - Bottom Right */}
            </div>
          </div>
        </div>
      </section>

      <CoreValues />

      {/* ---------------- SECTION 3 — TEAM ---------------- */}
      <TeamSection />
      {/* CTA */}
      <Delivering />
      <ContactForm />
    </main>
  );
};

export default AboutUsPage;
