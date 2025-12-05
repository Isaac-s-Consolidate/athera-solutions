import Image from 'next/image';
import SectionHeader from './SectionHeader';

export interface Card {
  icon?: string;
  title: string;
  description?: string;
}

interface CardSectionProps {
  header: string;
  cards: Card[];
}

const CardSection = ({ header, cards }: CardSectionProps) => {
  return (
    <section className="mt-20 mb-20 w-full flex flex-col items-center justify-center gap-10">
      {/* Header Image */}
      <SectionHeader header={header} />

      {/* Cards Grid */}
      <div
        className={`grid ${cards.length === 1 ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'} max-w-[1201px] px-5 xl:px-0 justify-items-center gap-8`}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className="border-gradient w-full max-w-[385px] h-full"
          >
            {/* Inner Content */}
            <div className="flex flex-col items-center justify-center gap-4 px-10 py-14 text-[#E6E7E8] bg-radial-green rounded-[20px]">
              {/* Card icon  */}
              {card.icon && (
                <div className="self-start">
                  <Image src={card.icon} alt={card.title} width={29} />
                </div>
              )}
              {/* Card title */}
              <div className="text-[18px] leading-[150%] font-bold self-start">
                {card.title}
              </div>

              {/* Card body */}
              {card.description && (
                <div className="text-[16px] leading-[160%]">
                  {card.description}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardSection;
