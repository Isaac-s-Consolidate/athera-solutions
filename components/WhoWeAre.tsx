import Image from 'next/image';
import images from '@/public/images/images';

const WhoWeAre = () => {
  return (
    <section className="w-full flex items-center justify-center py-12 md:py-20 px-4 sm:px-6">
      <div className="flex max-w-[987px] flex-col items-center gap-6 w-full">
        {/* Header image */}
        <div className="w-full max-w-[337px] px-4 sm:px-0">
          <Image
            src={images.wwa}
            alt="Who We Are"
            width={337}
            height={60}
            className="w-full h-auto"
            priority
          />
        </div>
        <p className="text-center font-poppins w-full px-4 sm:px-0 sm:w-4/5 md:w-full text-base sm:text-[19px] md:text-xl lg:text-[22px] leading-relaxed tracking-normal text-[#E6E7E8]">
          We merge creativity, structure and technical precision to design,
          build and optimize digital products that actually work and work well.
          From building software systems and executing agile projects to
          mentoring aspiring tech professionals, we deliver end-to-end digital
          transformation with measurable impact.
        </p>
        {/* Stats */}
        <div className="font-inter w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-6 md:gap-8 mt-4">
          {/* Stat */}
          <div className="flex flex-col items-center gap-1 sm:gap-2 p-4 sm:p-6 rounded-xl bg-white/5">
            <p className="font-bold text-3xl sm:text-4xl text-[#0BB453] transition-transform hover:scale-105">
              20+
            </p>
            <p className="font-semibold text-lg sm:text-xl lg:text-xl text-center leading-snug tracking-wide text-[#E6E7E8]">
              Successful Projects
            </p>
          </div>

          {/* Stat */}
          <div className="flex flex-col items-center gap-1 sm:gap-2 p-4 sm:p-6 rounded-xl bg-white/5">
            <p className="font-bold text-3xl sm:text-4xl text-[#0BB453] transition-transform hover:scale-105">
              98%
            </p>
            <p className="font-semibold text-lg sm:text-xl lg:text-xl text-center leading-snug tracking-wide text-[#E6E7E8]">
              Satisfied Clients
            </p>
          </div>

          {/* Stat */}
          <div className="flex flex-col items-center gap-1 sm:gap-2 p-4 sm:p-6 rounded-xl bg-white/5 sm:col-span-2 lg:col-span-1">
            <p className="font-bold text-3xl sm:text-4xl text-[#0BB453] transition-transform hover:scale-105">
              15+
            </p>
            <p className="font-semibold text-lg sm:text-xl lg:text-xl text-center leading-snug tracking-wide text-[#E6E7E8]">
              Expert engineers and designers
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
