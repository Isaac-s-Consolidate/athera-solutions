import images from '@/public/images/images';
import ASButton from '../ASButton';
import CardSection, { Card } from '../CardSection';
import ContactForm from '../ContactForm';
import ImpactCard from '../ImpactCard';
import NoCardSection from '../NoCardSection';

// HERO SECTION
const CareersHero = () => {
  return (
    // Hero section
    <section className="flex items-center justify-center w-full min-h-[650px] relative">
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

// WHY WORK WITH US SECTION
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
    <section className="mb-50">
      <CardSection header="Why Work With Us" cards={cardsData} />
    </section>
  );
};

// CAREER OPPORTUNITIES SECTION
const CareerOpportunities = () => {
  return (
    <>
      <NoCardSection
        header="Career Opportunities"
        description="No available positions"
      />
    </>
  );
};

// HOW TO APPLY SECTION
const HowToApply = () => {
  return (
    <>
      <NoCardSection
        header="How to Apply"
        description="Send your CV to careers@atherasolutions.com"
      />
    </>
  );
};

// GROWTH AND PERKS SECTION
const GrowthAndPerks = () => {
  const cardsData: Card[] = [
    {
      icon: images.brackets, // Using brackets.svg as a replacement
      title: 'Remote-friendly work options',
    },
    {
      icon: images.cloud, // Using cloud.svg as a replacement
      title: 'Learning and mentorship programs',
    },
    {
      icon: images.send, // Using send.svg as a replacement
      title: 'Flexible shcedules',
    },
    {
      icon: images.ht, // Using heartrate.svg as a replacement
      title: 'Project bonuses',
    },
    {
      icon: images.group, // Using group.svg as a replacement
      title: 'Career advancement opportunities',
    },
  ];

  return (
    <section className="mb-50">
      <CardSection header="Growth & Perks" cards={cardsData} />
      <div className="flex flex-col justify-center items-center gap-8 text-[#E6E7E8] px-5">
        <div className="text-center text-[24px]">
          We’re always looking for curious, creative, and driven minds. Ready to
          build the future with us?
        </div>
        <ASButton text="Join our Team" />
      </div>
    </section>
  );
};

// MAIN PAGE COMPONENT
const CareersPage = () => {
  return (
    <>
      <CareersHero />
      <WhyWorkWithUs />
      <CareerOpportunities />
      <HowToApply />
      <GrowthAndPerks />
      <ImpactCard />
      <ContactForm />
    </>
  );
};

export default CareersPage;
