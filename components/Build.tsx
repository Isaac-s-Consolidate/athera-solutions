'use client';

import Image from 'next/image';
import leftArrow from '@/app/assets/left.png';
import rightArrow from '@/app/assets/right.png';
import SectionHeader from './SectionHeader';

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
    <section className="py-30">
      {/* top border */}
      <hr className=" h-0.5 border-0 bg-linear-to-r from-[rgba(1,10,4,0.3)] via-[rgba(160,251,205,0.3)] to-[rgba(1,10,4,0.3)]" />

      {/* top radial gradient background */}
      <div
        className="w-full h-15 bg-radial-green"
        style={{
          background:
            'radial-gradient(40% 100% at 50% 9.5%, rgba(0, 80, 0, 0.3) 0%, rgba(0, 80, 0, 0) 100%)',
        }}
      />

      <div
        className="relative w-full h-[400px]  text-white overflow-hidden flex items-center justify-center"
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
        <SectionHeader header="Built fast. Delivered right. Every time." />

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

      {/* bottom radial gradient background */}
      <div
        className="w-full h-15 bg-radial-green"
        style={{
          background:
            'radial-gradient(40% 100% at 50% 90.5%, rgba(0, 80, 0, 0.3) 0%, rgba(0, 80, 0, 0) 100%)',
        }}
      />

      {/* bottom border */}
      <hr className="h-0.5  border-0 bg-linear-to-r from-[rgba(1,10,4,0.3)] via-[rgba(160,251,205,0.3)] to-[rgba(1,10,4,0.3)]" />
    </section>
  );
};

export default Build;
