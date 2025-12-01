'use client';

import Image from 'next/image';
import leftArrow from '@/app/assets/left.png';
import rightArrow from '@/app/assets/right.png';

const tags = [
  'Rapid prototyping',
  'Agile delivery',
  'Full-stack',
  'Design to deployment',
  'Continuous shipping',
  'End-to-end builds',
  'Scalable systems',
  'Launched on time',
];

const Build = () => {
  return (
    <div
      className="relative w-full h-[400px] px-6 text-white overflow-hidden flex items-center justify-center"
      style={{
        background: `
            radial-gradient(
            140.77% 69.5% at 50% 44.94%,
            rgba(144, 248, 189, 0.15) 0%,
            #0BB453 40%,
            rgba(11, 180, 83, 0.15) 100%
            ),
            #010A04
        `,
        backgroundBlendMode: 'overlay',
      }}
    >
      {/* TOP MARQUEE */}
      <div className="absolute top-10 left-0 w-full overflow-hidden">
        <div className="whitespace-nowrap flex animate-marquee-left gap-6">
          {[...tags, ...tags].map((t, i) => (
            <span
              key={`top-${i}`}
              className="px-4 py-2 rounded-full text-sm border border-white/20 bg-white/5 backdrop-blur-sm inline-block"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* PERFECT CENTER CONTENT */}
      <div className="flex items-center justify-center gap-6 pointer-events-none">
        <Image src={leftArrow} alt="Left" width={30} height={30} />

        <h1
          className="text-center font-semibold max-w-5xl leading-none"
          style={{
            fontFamily: 'Poppins',
            fontWeight: 600,
            fontStyle: 'normal',
            fontSize: '40px',
            lineHeight: '100%',
            letterSpacing: '0',
            background: 'linear-gradient(90deg, #0BB453 0%, #242243 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Built fast. Delivered right. Every time.
        </h1>

        <Image src={rightArrow} alt="Right" width={30} height={30} />
      </div>

      {/* BOTTOM MARQUEE */}
      <div className="absolute bottom-10 left-0 w-full overflow-hidden">
        <div className="whitespace-nowrap flex animate-marquee-right gap-6">
          {[...tags, ...tags].map((t, i) => (
            <span
              key={`bottom-${i}`}
              className="px-4 py-2 rounded-full text-sm border border-white/20 bg-white/5 backdrop-blur-sm inline-block"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* KEYFRAMES */}
      <style jsx>{`
        .animate-marquee-left {
          animation: marquee-left 28s linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right 28s linear infinite;
        }

        @keyframes marquee-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        @keyframes marquee-right {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0%);
          }
        }
      `}</style>
    </div>
  );
};

export default Build;
