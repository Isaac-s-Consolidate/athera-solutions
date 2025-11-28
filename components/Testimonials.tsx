'use client';

import Image, { StaticImageData } from 'next/image';
import leftArrow from '@/app/assets/left.png';
import rightArrow from '@/app/assets/right.png';
import user1 from '@/app/assets/users/user1.png';
import user2 from '@/app/assets/users/user3.png';
import user3 from '@/app/assets/users/user2.png';
import user4 from '@/app/assets/users/user2.png';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  country: string;
  stars: number;
  message: string;
  avatar: StaticImageData;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'John Doe',
    role: 'CEO, Acme Corp',
    country: 'USA',
    stars: 5,
    message:
      'Athera didn’t just build our system — they understood our goals and translated them into a product that exceeded expectations.',
    avatar: user1,
  },
  {
    id: 2,
    name: 'Jane Smith',
    role: 'CTO, BetaTech',
    country: 'UK',
    stars: 4,
    message:
      'Athera Solutions completely transformed our digital operations. Their expertise and attention to detail helped us achieve seamless efficiency.',
    avatar: user2,
  },
  {
    id: 3,
    name: 'Samuel Green',
    role: 'Product Manager, TechSolutions',
    country: 'Canada',
    stars: 5,
    message:
      'Athera Solutions delivered a platform that exceeded our expectations. Their team’s creativity and commitment to quality made the entire process seamless.',
    avatar: user3,
  },
  {
    id: 4,
    name: 'Linda Brown',
    role: 'Marketing Head, Creative Co.',
    country: 'Nigeria',
    stars: 4,
    message:
      'From strategy to execution, Athera Solutions brought our ideas to life through smart design and powerful development. Truly a partner in innovation.',
    avatar: user4,
  },
];

export default function Testimonials() {
  return (
    <div className="relative py-20 px-4 bg-[#010A04]">
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-12 flex items-center justify-center gap-4">
        <Image src={leftArrow} alt="Left" width={30} height={30} />
        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#0BB453] to-[#041f12]">
          Testimonials
        </h2>
        <Image src={rightArrow} alt="Right" width={30} height={30} />
      </div>
      <p className="text-center text-gray-300 text-lg mb-16 mt-[-36]">
        Here’s what some of our clients have to say about working with Athera
        Solutions.
      </p>

      {/* Cards container */}
      <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-8 max-w-5xl mx-auto">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="cursor-pointer p-6 rounded-2xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl hover:-translate-y-2"
            style={{
              maxWidth: '480px',
              background:
                'radial-gradient(96% 96% at 50% 7.5%, rgba(0, 80, 0, 0.15) 0%, rgba(0, 80, 0, 0) 100%)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            {/* avatar */}
            <div className="flex items-center gap-4 mb-4">
              <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-green-500 shrink-0">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-left">
                <h3 className="text-white font-semibold">{t.name}</h3>
                <p className="text-gray-300 text-sm">{t.role}</p>
                <p className="text-gray-400 text-xs">{t.country}</p>
                <div className="flex gap-1 mt-1">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <span key={i} className="text-yellow-400">
                      ★
                    </span>
                  ))}
                  {Array.from({ length: 5 - t.stars }).map((_, i) => (
                    <span key={i} className="text-gray-500">
                      ★
                    </span>
                  ))}
                </div>
              </div>
            </div>
            {/* Testimonial text */}
            <p className="text-lg font-medium text-center text-white">
              '{t.message}'
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
