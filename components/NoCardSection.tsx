import SectionHeader from './SectionHeader';

interface NoCardSectionProps {
  header: string;
  description: string;
}

const NoCardSection = ({ header, description }: NoCardSectionProps) => {
  return (
    <section className="mb-40 gap-10">
      <SectionHeader header={header} />
      <div className="flex flex-col gap-8">
        <hr className="h-0.5  border-0 bg-linear-to-r from-[rgba(1,10,4,0.3)] via-[rgba(160,251,205,0.3)] to-[rgba(1,10,4,0.3)]" />
        <div className="text-[16px] tracking-[-0.8px] leading-[160%] text-center">
          {description}
        </div>
        <hr className="h-0.5 border-0 bg-linear-to-r from-[rgba(1,10,4,0.3)] via-[rgba(160,251,205,0.3)] to-[rgba(1,10,4,0.3)]" />
      </div>
    </section>
  );
};

export default NoCardSection;
