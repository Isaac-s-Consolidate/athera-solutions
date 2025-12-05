'use client';

import images from '@/public/images/images';
import Image from 'next/image';
import { useState } from 'react';
import ContactForm from '@/components/ContactForm';
import { ChevronDown, ChevronUp } from 'lucide-react';
import leftArrow from '@/app/assets/left.png';
import rightArrow from '@/app/assets/right.png';
import Delivering from '@/components/Delivering';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

/* -----------------------------------------
   SERVICE CARD
------------------------------------------ */
const ServiceCard = ({
  icon,
  title,
  description,
  features,
}: ServiceCardProps) => (
  <div className="relative group border-gradient w-full h-full">

    {/* Inner content */}
    <div className="relative rounded-2xl overflow-hidden bg-[#0A0A0A] h-full">
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{
          background:
            'linear-gradient(282.33deg, rgba(255,255,255,0) 4%, rgba(255,255,255,0.04) 95%)',
        }}
      />

      <div className="relative z-10 p-6 sm:p-8 flex flex-col gap-6">
        <div className="p-3 bg-white/5 rounded-xl group-hover:bg-[#0BB453]/20 transition-all duration-700 flex justify-center">
          <Image src={icon} alt={title} width={40} height={40} />
        </div>

        <h2 className="font-bold text-lg sm:text-xl text-white text-center">
          {title}
        </h2>
        <p className="text-base sm:text-[17px] text-[#E6E7E8] text-center">
          {description}
        </p>

        {/* Features */}
        <ul className="flex flex-col gap-2 mt-2">
          {features.map((f, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-[#E6E7E8] text-sm"
            >
              <span className="w-2 h-2 rounded-full bg-[#0BB453] mt-1"></span>
              {f}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

/* -----------------------------------------
   FAQ ITEM
------------------------------------------ */
const FAQItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative group rounded-xl p-[2px] mb-4 border border-[#0BB453]">
      {/* Hover animated glow */}
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[#0BB453]/30" />
        <div
          className="absolute inset-0 animate-border-flow"
          style={{
            background: `conic-gradient(from 210deg, #0BB453, #033020, #02281A, #0BB453)`,
          }}
        />
      </div>

      {/* Inner box */}
      <div className="relative bg-inherit rounded-xl py-4 px-5">
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex justify-between items-center text-left text-white text-lg cursor-pointer"
        >
          {q}

          {open ? (
            <ChevronUp
              size={22}
              className="transition-transform duration-300"
            />
          ) : (
            <ChevronDown
              size={22}
              className="transition-transform duration-300"
            />
          )}
        </button>

        {open && (
          <p className="mt-3 text-[#E6E7E8] text-base leading-relaxed">{a}</p>
        )}
      </div>
    </div>
  );
};

/* -----------------------------------------
   MAIN PAGE
------------------------------------------ */
const ServicesPage = () => {
  const cards = [
    {
      icon: images.brackets,
      title: 'Custom Software',
      description: 'Tailored solutions built to scale.',
      features: [
        'End-to-end engineering',
        'Performance optimized',
        'Enterprise-grade security',
        'API-ready architectures',
      ],
    },
    {
      icon: images.cloud,
      title: 'Cloud Systems',
      description: 'Reliable, fault-tolerant cloud deployments.',
      features: [
        'AWS / GCP / Azure',
        'Horizontal scaling',
        'Load-balanced systems',
        '24/7 uptime focus',
      ],
    },
    {
      icon: images.ht,
      title: 'UI/UX Design',
      description: 'Human-centered interfaces that convert.',
      features: [
        'User flows',
        'High-fidelity mockups',
        'Design systems',
        'Interactive prototypes',
      ],
    },
    {
      icon: images.group,
      title: 'Product Strategy',
      description: 'From concept to market-ready execution.',
      features: [
        'Roadmapping',
        'Market alignment',
        'Go-to-market planning',
        'Launch readiness',
      ],
    },
    {
      icon: images.mentoring,
      title: 'Automation & AI',
      description: 'Smarter workflows, better decisions.',
      features: [
        'AI chatbots',
        'Process automation',
        'ML-powered insights',
        'Task orchestration',
      ],
    },
  ];

  const faqs = [
    {
      q: 'How long does a typical project take?',
      a: 'Most products take 4–12 weeks depending on complexity.',
    },
    {
      q: 'Do you work with startups?',
      a: 'Yes, we help early-stage teams move fast.',
    },
    {
      q: 'Can you maintain my existing system?',
      a: 'We handle refactors, upgrades, and ongoing support.',
    },
    {
      q: 'What tech stacks do you use?',
      a: 'React, Next.js, Node, Go, Docker, AWS, microservices.',
    },
    {
      q: 'Do you offer design-only projects?',
      a: 'Yes, you can hire us for UI/UX alone.',
    },
    {
      q: 'Do you provide support after launch?',
      a: 'We offer long-term maintenance plans.',
    },
    {
      q: 'What makes Athera different?',
      a: 'Scalability, precision, and human-centered product thinking.',
    },
  ];

  return (
    <div className="w-full bg-[#010A04] text-white py-20 px-6 flex flex-col items-center gap-14">
      {/* HEADER */}
      <div className="mt-10 mb-6 px-6 py-3 border border-[#E6E7E8]/40 rounded-2xl bg-[#010A04]/40 backdrop-blur-md shadow-lg">
        <h1 className="text-3xl font-semibold text-[#E6E7E8]">Our Services</h1>
      </div>

      <div className="max-w-[900px] text-center flex flex-col gap-4">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white">
          Scalable & Human Centered & Bridging Ideas
        </h2>
        <p className="text-lg text-[#E6E7E8] leading-relaxed mt-9">
          At Athera, we design and build digital solutions that work beautifully
          and perform flawlessly. Whether you are a startup or a large business,
          we turn vision into tangible results.
        </p>
      </div>

      {/* SERVICE CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-[1200px]">
        {cards.map((c, i) => (
          <ServiceCard key={i} {...c} />
        ))}
      </div>

      {/* FAQ SECTION */}
      <div className="max-w-[800px] w-full mt-10 mx-auto text-center">
        <div className="text-center mb-10 sm:mb-16">
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4">
            <Image
              src={leftArrow}
              alt=""
              width={24}
              height={24}
              className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
              aria-hidden="true"
            />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#0BB453] to-[#041f12]">
              Frequently Asked Questions
            </h2>
            <Image
              src={rightArrow}
              alt=""
              width={24}
              height={24}
              className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
              aria-hidden="true"
            />
          </div>
        </div>

        <div className="mt-6">
          {faqs.map((f, i) => (
            <FAQItem key={i} {...f} />
          ))}
        </div>
      </div>

      {/* CTA */}
      <p className="max-w-[700px] text-center text-sm text-[#E6E7E8] mt-10">
        Ready to turn your idea into a powerful digital product?
      </p>

      <button className="px-8 py-3 bg-transparent text-white rounded-full border border-gray-400 hover:bg-green-800 transition cursor-pointer">
        Start Your Project Today
      </button>
      <Delivering />
      <ContactForm />
    </div>
  );
};

export default ServicesPage;
