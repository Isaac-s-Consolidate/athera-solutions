import Image from 'next/image';
import images from '@/public/images/images';

const WhoWeAre = () => {
  return (
    <section className="w-full flex items-center justify-center py-20 px-4">
      <div className="flex max-w-[987px] flex-col items-center gap-6">
        {/* Header image */}
        <Image src={images.wwa} alt="Who We Are" width={337} height={60} />
        <p className="text-center font-poppins w-fit lg:text-[22px] text-[19px] tracking-normal">
          We merge creativity, structure and technical precision to design,
          build and optimize digital products that actually work and work well.
          From building software systems and executing agile projects to
          mentoring aspiring tech professionals, we deliver end-to-end digital
          transformation with measurable impact.
        </p>
        {/* Stats */}
        <div className="font-inter flex flex-col md:flex-row gap-10 md:gap-0 justify-between w-full">
          {/* Stat */}
          <div className="flex flex-col items-center gap-0.5">
            <p className="font-bold text-4xl text-main text-[#0BB453]">20+</p>
            <p className="font-semibold text-xl lg:text-2xl leading-[160%] tracking-[0.8px]">
              Successful Projects
            </p>
          </div>

          {/* Stat */}
          <div className="flex flex-col items-center gap-0.5">
            <p className="font-bold text-4xl text-main text-[#0BB453]">98%</p>
            <p className="font-semibold text-xl lg:text-2xl leading-[160%] tracking-[0.8px]">
              Satisfied Clients
            </p>
          </div>

          {/* Stat */}
          <div className="flex flex-col items-center gap-0.5">
            <p className="font-bold text-4xl text-main text-[#0BB453]">15+</p>
            <p className="font-semibold text-xl lg:text-2xl leading-[160%] tracking-[0.8px]">
              Expert engineers and designers
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
