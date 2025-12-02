import Image from 'next/image';
import images from '@/public/images/images';
import leftArrow from '@/app/assets/left.png';
import rightArrow from '@/app/assets/right.png';
import React from 'react';

// Reusable Components - can be extracted to separate files later---

interface Card {
  icon?: string;
  title: string;
  description?: string;
}

interface CardSectionProps {
  header: string;
  cards: Card[];
}

interface SectionHeaderProps {
  header: string;
}

const SectionHeader = ({ header }: SectionHeaderProps) => (
  <div className="mb-10 flex items-center">
    <Image
      src={leftArrow}
      width={42}
      height={20.5}
      alt="arrow icon_l"
      className="shrink-0"
    />
    <div className="text-gradient-green-purple text-[35px] md:text-[40px] font-semibold text-center">
      {header}
    </div>
    <Image
      src={rightArrow}
      width={42}
      height={20.5}
      alt="arrow icon_r"
      className="shrink-0"
    />
  </div>
);

const CardSection = ({ header, cards }: CardSectionProps) => {
  return (
    <section className="mt-20 mb-20 w-full flex flex-col items-center justify-center gap-10">
      {/* Header Image */}
      <SectionHeader header={header} />

      {/* Cards Grid */}
      <div
        className={`grid ${cards.length === 1 ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'} max-w-[1201px] px-5 xl:px-0 justify-items-center`}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className="border-gradient w-full max-w-[385px] py-14"
          >
            {/* Inner Content */}
            <div className="flex flex-col items-center justify-center gap-4 px-10 text-[#E6E7E8] bg-radial-green rounded-[20px]">
              {/* Card icon  */}
              {card.icon && (
                <div className="self-start">
                  <Image src={card.icon} alt={card.title} width={29} />
                </div>
              )}
              {/* Card title */}
              <div className="text-[18px] leading-[150%] font-bold self-start">
                {card.title}
              </div>

              {/* Card body */}
              {card.description && (
                <div className="text-[16px] leading-[160%]">
                  {card.description}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Reusable Components - can be extracted to separate files later---

// Careers page components---
const CareersHero = () => {
  return (
    // Hero section
    <section className="flex items-center justify-center w-full min-h-[650px] relative">
      <Image
        src={images.chero}
        alt="Careers Hero"
        fill
        // added top border for design accuracy
        className="object-cover opacity-40 md:border-t-80 border-t-60 border-black-700"
      />

      <div className="absolute flex flex-col items-center text-[#E6E7E8] gap-7">
        <button className="w-[178px] max-h-[53px] flex items-center justify-center p-4 font-bold text-[22px] border text-[#E6E7E8] border-[#E6E7E8] rounded-[50px] hover:bg-[#0BB453] hover:border-[#0BB453] transition duration-300">
          Careers
        </button>

        <div className="flex uppercase font-semibold text-4xl md:text-[40px] text-center">
          BRIDGE THE GAP. BUILD YOUR LEGACY.
        </div>

        <div className="text-xl max-w-[978px] text-center md:text-[22px] px-5">
          Join the team that engineers digital clarity. We are looking for
          architects, strategists, and problem solvers ready to define the
          future of technology.
        </div>
      </div>
    </section>
  );
};

const WhyWorkWithUs = () => {
  const cardsData: Card[] = [
    {
      title: 'We value creativity, clarity, and efficiency',
      description:
        'At Athera, ideas matter. We encourage innovation and smart problem-solving while keeping things clear and organized so your creativity actually makes an impact. ',
    },
    {
      title: 'We encourage learning and innovation',
      description:
        'We believe growth never stops. Team members get opportunities to learn new tools, experiment with new ideas, and grow their skills through mentorship and projects.',
    },
    {
      title: 'We believe in teamwork, flexibility, and growth.',
      description:
        'Everyone’s voice is heard here. Whether you work remotely or on-site, collaboration and mutual respect drive everything we do.',
    },
    // Add more cards here
  ];
  return (
    <>
      <CardSection header="Why Work With Us" cards={cardsData} />
    </>
  );
};

const GrowthAndPerks = () => {
  const cardsData: Card[] = [
    {
      icon: images.rbrackets,
      title: 'Remote-friendly work options',
    },
    {
      icon: images.globe,
      title: 'Learning and mentorship programs',
    },
    {
      icon: images.check,
      title: 'Flexible shcedules',
    },
    {
      icon: images.cash,
      title: 'Project bonuses',
    },
    {
      icon: images.graph,
      title: 'Career advancement opportunities',
    },
  ];

  return (
    <>
      <CardSection header="Growth & Perks" cards={cardsData} />
    </>
  );
};
const CareersPage = () => {
  return (
    <>
      <CareersHero />
      <WhyWorkWithUs />
      <GrowthAndPerks />
    </>
  );
};

export default CareersPage;
