import Image from 'next/image';
import images from '@/public/images/images';
import React from 'react';

const CareersHero = () => {
  return (
    // Hero section
    <section className="flex items-center justify-center w-full min-h-[650px] relative">
      <Image
        src={images.chero}
        alt="Careers Hero"
        fill
        // added top border for design accuracy
        className="object-cover opacity-40 md:border-t-80 border-t-60  border-black-700"
      />

      <div className="absolute flex flex-col items-center text-[#E6E7E8] gap-7">
        <button className="w-[178px] max-h-[53px] flex items-center justify-center p-4 font-bold  text-[22px] border text-[#E6E7E8] border-[#E6E7E8] rounded-[50px] hover:bg-[#0BB453] hover:border-[#0BB453] transition duration-300">
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

const CareersPage = () => {
  return <CareersHero />;
};

export default CareersPage;
