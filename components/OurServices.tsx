import images from '@/public/images/images';
import Image from 'next/image';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => (
  <div className="relative group rounded-2xl p-[6px] transition-all duration-500">
    {/* Animated gradient border container */}
    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 overflow-hidden">
      {/* Base layers - stacked backgrounds */}
      <div className="absolute inset-0 bg-[#E6E7E8]" />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(96% 96% at 50% 7.5%, rgba(0, 80, 0, 0.15) 0%, rgba(0, 80, 0, 0) 100%)',
        }}
      />
      <div className="absolute inset-0 bg-[#0BB453]" />

      {/* Rotating conic gradient - creates the traveling border effect */}
      <div
        className="absolute inset-0 animate-border-flow"
        style={{
          background: `conic-gradient(from 225deg at 50% 50%, 
            /* ========== BOTTOM-LEFT CORNER ========== */
            /* Start with left border - fully visible */
            #0BB453 0deg,
            #0BB453 45deg,
            
            /* ========== LEFT LINE ========== */
            #0BB453 45deg,
            #0BB453 90deg,
            
            /* ========== TOP-LEFT CORNER ========== */
            /* Extend bright color slightly into top */
            #0BA44D 90deg,
            #0A9347 95deg,
            
            /* ========== TOP LINE ========== */
            /* Fade to dark green */
            #098241 95deg,
            #08713B 100deg,
            #076035 105deg,
            #06502F 110deg,
            #054029 120deg,
            #043A24 135deg,
            #033020 150deg,
            #02281A 180deg,
            
            /* ========== RIGHT AND BOTTOM LINES ========== */
            /* Right and bottom - dark green */
            #02281A 180deg,
            #022018 270deg,
            #022018 360deg
          )`,
        }}
      />
    </div>

    {/* Inner content container */}
    <div className="relative rounded-[14px] overflow-hidden bg-[#0A0A0A] h-full">
      {/* Linear gradient overlay on content */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{
          background:
            'linear-gradient(282.33deg, rgba(255, 255, 255, 0) 4.18%, rgba(255, 255, 255, 0.04) 95.82%)',
        }}
      />

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
    <section className="w-full flex items-center justify-center py-12 md:py-20 px-4 sm:px-6">
      <div className="flex max-w-[1200px] flex-col items-center gap-6 w-full">
        <div className="w-full max-w-[337px] px-4 sm:px-0">
          <Image
            src={images.os}
            alt="Our Services"
            width={337}
            height={60}
            className="w-full h-auto"
            priority
          />
        </div>

        <p className="text-center max-w-4xl font-poppins w-full px-4 sm:px-0 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed tracking-normal text-[#E6E7E8]">
          We deliver end-to-end digital services designed to help businesses
          innovate, optimize and scale with confidence.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full mt-2">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
