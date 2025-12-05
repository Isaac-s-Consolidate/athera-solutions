// app/components/CoreValues.tsx

import Image from 'next/image';
import { images } from '@/public/images/images';

export default function CoreValues() {
  const values = [
    {
      title: 'Efficiency',
      description:
        'We work smart, delivering high-quality solutions quickly and effectively.',
      icon: images.effic,
    },

    {
      title: 'Clarity',
      description: 'We make technology simple, clear, and easy to understand.',
      icon: images.clarity,
    },

    {
      title: 'Creativity',
      description:
        'We blend innovation and design to create impactful digital experiences.',
      icon: images.creativity,
    },

    {
      title: 'Inclusiveness',
      description:
        'We value every voice and build solutions shaped by diverse perspectives.',
      icon: images.inclusive,
    },
  ];

  return (
    <section className="w-full py-20 bg-black text-white relative overflow-visible">
      {/* Decorative mid-left icon (efficiency) kept absolute; top decorations will sit inline with the heading */}

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Title with inline decorative images */}
        <h2 className="flex items-center justify-center text-4xl font-semibold mb-14 gap-6">
          <Image
            src={images.toplift}
            alt=""
            aria-hidden="true"
            className="w-10 h-10 opacity-80"
            width={40}
            height={40}
          />
          <span className="bg-gradient-to-r from-[#0BB453] to-[#242243] bg-clip-text text-transparent">
            Our Core Values
          </span>
          <Image
            src={images.topright}
            alt=""
            aria-hidden="true"
            className="w-10 h-10 opacity-80"
            width={40}
            height={40}
          />
        </h2>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((item) => (
            <div
              key={item.title}
              className="relative group border-gradient h-full"
            >
              <div className="bg-[#0e1412] p-8 rounded-2xl h-full">
                <div className="mb-4 flex justify-center">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={48}
                    height={48}
                  />
                </div>

                <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                <p className="text-white/70 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
