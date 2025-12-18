'use client';

import Image, { StaticImageData } from 'next/image';
import leftArrow from '@/app/assets/left.png';
import rightArrow from '@/app/assets/right.png';
import user1 from '@/app/assets/users/user1.png';
import user2 from '@/app/assets/users/user3.png';
import user3 from '@/app/assets/users/user2.png';
import user4 from '@/app/assets/users/user2.png';
import ImpactCard from './ImpactCard';

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
      'Athera didnt just build our system — they understood our goals and translated them into a product that exceeded expectations.',
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
    <div className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#010A04]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4">
            <Image
              src={leftArrow}
              alt=""
              width={24}
              height={24}
              className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
              aria-hidden="true"
            />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0BB453] to-[#041f12]">
              Testimonials
            </h2>
            <Image
              src={rightArrow}
              alt=""
              width={24}
              height={24}
              className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
              aria-hidden="true"
            />
          </div>
          <p className="text-gray-300 text-base sm:text-lg max-w-3xl mx-auto px-4">
            Here&apos;s what some of our clients have to say about working with
            Athera Solutions.
          </p>
        </div>

        {/* Cards container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="border-gradient w-full h-full rounded-2xl"
              style={{ maxWidth: '100%' }}
            >
              {/* Inner content container */}
              <div className="relative rounded-[14px] overflow-hidden bg-[#0A0A0A] h-full p-6 sm:p-8">
                <div className="relative z-10 p-4 sm:p-5 md:p-6">
                  {/* Avatar and user info */}
                  <div className="flex items-start sm:items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-green-500 shrink-0">
                      <Image
                        src={t.avatar}
                        alt={t.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 639px) 48px, (max-width: 767px) 56px, 64px"
                        quality={85}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-white font-medium text-base sm:text-lg truncate">
                        {t.name}
                      </h3>
                      <p className="text-gray-400 text-xs sm:text-sm truncate">
                        {t.role} • {t.country}
                      </p>
                      <div className="flex mt-1">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${
                              i < t.stars ? 'text-yellow-400' : 'text-gray-600'
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            aria-hidden="true"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Testimonial text */}
                  <blockquote className="text-gray-300 text-sm sm:text-[15px] leading-relaxed mb-5">
                    <p className="relative before:content-['\0022'] before:text-3xl sm:before:text-4xl before:absolute before:-left-1 sm:before:-left-2 before:-top-3 sm:before:-top-4 before:opacity-20 before:font-serif">
                      {t.message}
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-15">
          <ImpactCard />
        </div>
      </div>
    </div>
  );
}
