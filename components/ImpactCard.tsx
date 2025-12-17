import ASButton from './ASButton';

const ImpactCard = () => {
  return (
    <div className=" flex justify-center items-center mb-30 sm:px-10 px-50">
      <div className="flex flex-col items-center justify-center max-w-[1200px] py-15  md:px-30 px-10 rounded-[20px] gap-8 text-[#E6E7E8] bg-[linear-gradient(94.87deg,#242243_24.19%,#0BB453_98.65%)]">
        <div className="font-semibold md:text-[40px] text-[35px] text-center leading-[100%]">
          Delivering <span className="text-[#0BB453]">Measurable Impact</span>
        </div>
        <div className="md:text-[24px] text-[20px] text-center">
          Ready to transform your ideas into scalable reality? We deliver
          end-to-end digital transformation with technical precision
        </div>

        <ASButton text="Start Your Project Today" />
      </div>
    </div>
  );
};

export default ImpactCard;
