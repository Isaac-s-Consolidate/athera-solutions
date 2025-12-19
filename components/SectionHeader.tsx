import Image from 'next/image';
import leftArrow from '@/app/assets/left.png';
import rightArrow from '@/app/assets/right.png';

const SectionHeader = ({ header }: { header: string }) => (
  <div className="mb-2 flex items-center justify-center">
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
export default SectionHeader;
