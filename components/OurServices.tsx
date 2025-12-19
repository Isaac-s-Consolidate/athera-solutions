import images from '@/public/images/images';
import Image from 'next/image';
import SectionHeader from './SectionHeader';
import CardSection from './CardSection';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => (
  <div className="relative group border-gradient w-full h-full">
    {/* Inner content container */}
    <div className="relative rounded-[14px] overflow-hidden bg-[#0A0A0A] h-full">
      {/* Content */}
      <div className="relative z-10 p-6 sm:p-8 flex flex-col items-center text-center gap-6 h-full">
        {/* Icon container */}
        <div className="p-3 bg-white/5 rounded-xl group-hover:bg-[#0BB453]/20 transition-all duration-700">
          <Image
            src={icon}
            alt={title}
            width={40}
            height={40}
            className="w-10 h-10"
          />
        </div>

        {/* Text content */}
        <div className="font-inter flex flex-col gap-3 flex-grow">
          <h2 className="font-bold text-lg sm:text-xl leading-tight text-white">
            {title}
          </h2>
          <p className="text-base sm:text-[17px] leading-relaxed text-[#E6E7E8]">
            {description}
          </p>
        </div>
      </div>
    </div>
  </div>
);

const OurServices = () => {
  const services = [
    {
      icon: images.brackets,
      title: 'Digital transformation',
      description:
        'We help modernize your operations through smart technology and seamless system integration.',
    },
    {
      icon: images.cloud,
      title: 'Software & app development',
      description:
        'We build robust software and mobile apps that scale seamlessly and deliver real business value.',
    },
    {
      icon: images.ht,
      title: 'Website design',
      description:
        'We craft stunning, high-performing websites that reflect your brand and drive engagement.',
    },
    {
      icon: images.mentoring,
      title: 'Product strategy',
      description:
        'We guide you from concept to launch with strategy that aligns vision, market, and execution.',
    },
    {
      icon: images.group,
      title: 'Backend development',
      description:
        'We engineer reliable, secure backends that keep your products fast, stable, and scalable.',
    },
  ];

  return (
    <>
      <CardSection
        header="Our Services"
        description="We deliver end-to-end digital services designed to help businesses innovate, optimize and scale with confidence."
        cards={services}
      />
    </>
  );
};

export default OurServices;
