'use client';

import images from '@/public/images/images';
import Image from 'next/image';
import { useState } from 'react';
import ContactForm from '@/components/ContactForm';
import { ChevronDown, ChevronUp } from 'lucide-react';
import leftArrow from '@/app/assets/left.png';
import rightArrow from '@/app/assets/right.png';
import ImpactCard from '../ImpactCard';

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
    <div className="rounded-xl mb-4 border border-[#0BB453] transition-colors duration-300 hover:border-[#094e22]">
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
      title: 'Digital transformation',
      description:
        'We help modernize your operations through smart technology and seamless system integration.',
      features: [
        'Tech Strategy',
        'Code Review',
        'Digital Transformation',
        'Performance Audit',
      ],
    },
    {
      icon: images.cloud,
      title: 'Software & app development',
      description:
        'We build robust software and mobile apps that scale seamlessly and deliver real business value.',
      features: [
        'Responsive Design',
        'SEO Optimized',
        'React Native',
        'Flutter',
      ],
    },
    {
      icon: images.ht,
      title: 'Website design',
      description:
        'We craft stunning, high-performing websites that reflect your brand and drive engagement.',
      features: [
        'User Research',
        'Wire-framing',
        'Prototyping',
        'Design systems',
      ],
    },
    {
      icon: images.group,
      title: 'Product Strategy',
      description:
        'We guide you from concept to launch with strategy that aligns vision, market and execution.',
      features: [
        'Market Research',
        'Go-to- Market Strategy',
        'Product Road-mapping',
        'Continuous Innovation',
      ],
    },
    {
      icon: images.mentoring,
      title: 'Backend development',
      description:
        'We engineer reliable, secure backends that keep your products fast, stable and scalable.',
      features: [
        'System Integration',
        'Cloud-Based solutions Creation',
        'Performance Optimization',
        'API & database Architecture',
      ],
    },
  ];

  const faqs = [
    {
      q: 'What kind of businesses do you work with?',
      a: 'We collaborate with startups, small businesses, and established enterprises - helping them turn ideas into scalable digital solutions.',
    },
    {
      q: 'What services does Athera Solutions provide?',
      a: 'We offer end-to-end technology services including UI/UX design, software and web development, consulting and digital transformation.',
    },
    {
      q: 'How long does it take to complete a project?',
      a: 'Timelines depend on the project complexity, but our agile approach ensures consistent progress and on-time delivery.',
    },
    {
      q: 'Do you provide post-launch support?',
      a: 'Absolutely. We offer continuous product monitoring, updates and performance optimization to keep your systems running smoothly.',
    },
    {
      q: 'How do i get started?',
      a: 'Simply reach out through our contact form or click on the Book a Consultation. We will discuss your goals and tailor a plan for your project.',
    },
    {
      q: 'Do you offer remote or global services?',
      a: 'Yes, we collaborate with clients around the world using digital tools for seamless communication and project delivery.',
    },
    {
      q: 'Can you help improve an existing website?',
      a: 'Yes! We specialize in auditing, redesigning and optimizing products to enhance user experience and performance.',
    },
  ];

  return (
    <div className="w-full bg-[#010A04] text-white py-16 px-4 sm:px-6 flex flex-col gap-14">
      {/* HEADER */}
      <div className="flex justify-center mt-30 mb-6">
        <div className="inline-block border border-gray-600 rounded-full px-5 py-2 bg-[#010A04]/30 hover:bg-green-500 backdrop-blur-sm shadow-sm">
          <h1 className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-semibold  text-white tracking-tight">
            Our Services
          </h1>
        </div>
      </div>

      {/* INTRO TEXT */}
      <div className="w-full max-w-3xl mx-auto text-center px-4 sm:px-6 flex flex-col gap-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white leading-snug">
          Scalable & Human Centered & Bridging Ideas
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-[#E6E7E8] leading-relaxed mt-4 sm:mt-6">
          At Athera, we design and build digital solutions that work beautifully
          and perform flawlessly. Whether you are a startup or a large business,
          we turn vision into tangible results.
        </p>
      </div>

      {/* SERVICE CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-none sm:max-w-[1200px] mx-auto cursor-pointer">
        {cards.map((c, i) => (
          <ServiceCard key={i} {...c} />
        ))}
      </div>

      {/* FAQ SECTION */}
      <div className="w-full max-w-none sm:max-w-[800px] mx-auto mt-10">
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
      <div className="w-full flex flex-col items-center gap-4 mt-10 px-4 sm:px-6">
        <p className="text-center text-sm sm:text-base md:text-lg text-[#E6E7E8] max-w-xl">
          Ready to turn your idea into a powerful digital product?
        </p>

        <button className="px-6 sm:px-8 py-3 sm:py-4 bg-transparent text-white rounded-full border border-gray-600 hover:bg-green-400 cursor-pointer transition-colors duration-300 text-sm sm:text-base md:text-lg">
          Start Your Project Today
        </button>
      </div>
      <ImpactCard />
      <ContactForm />
    </div>
  );
};

export default ServicesPage;
