import images from '@/public/images/images';
import Image from 'next/image';

const OurServices = () => {
  return (
    <section className="w-full flex items-center justify-center py-20 px-4">
      <div className="flex max-w-[1200px] flex-col items-center gap-6">
        <Image src={images.os} alt="Our Services" width={337} height={60} />
        <p className="text-center max-w-6xl font-poppins w-fit md:text-[24px] text-[22px] tracking-normal leading-relaxed">
          We deliver end-to-end digital services designed to help businesses
          innovate, optimize and scale with confidence.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1 mt-3">
          {/* Service items will go here */}
          {/* Service */}
          <div className="rounded-2xl bg-linear-to-l from-transparent">
            <div className="bg-background rounded-2xl py-[30px] px-12 bg-radial-[at_25%_25%] from-[#0050004D] to-[#00500000] to-90% flex flex-col gap-8">
              <Image
                src={images.brackets}
                alt="Brackets"
                width={50}
                height={50}
              />
              <div className="font-inter flex flex-col gap-4">
                <h2 className=" font-bold text-[18px] leading-[150%]">
                  Digital transformation
                </h2>
                <p className="text-[18px] leading-[160%]">
                  We help mordernize your operations through smart technology
                  and seamless system integration.
                </p>
              </div>
            </div>
          </div>
          {/* Service */}
          <div className="rounded-2xl bg-linear-to-l from-transparent">
            <div className="bg-background rounded-2xl py-[30px] px-12 bg-radial-[at_25%_25%] from-[#0050004D] to-[#00500000] to-90% flex flex-col gap-8">
              <Image src={images.cloud} alt="Brackets" width={50} height={50} />
              <div className="font-inter flex flex-col gap-4">
                <h2 className=" font-bold text-[18px] leading-[150%]">
                  Software & app development
                </h2>
                <p className="text-[18px] leading-[160%]">
                  We build robust software and mobile apps that scale seamlessly
                  and deliver real business value.
                </p>
              </div>
            </div>
          </div>
          {/* Service */}
          <div className="rounded-2xl bg-linear-to-l from-transparent">
            <div className="bg-background rounded-2xl py-[30px] px-12 bg-radial-[at_25%_25%] from-[#0050004D] to-[#00500000] to-90% flex flex-col gap-8">
              <Image src={images.ht} alt="Brackets" width={50} height={50} />
              <div className="font-inter flex flex-col gap-4">
                <h2 className=" font-bold text-[18px] leading-[150%]">
                  Website design
                </h2>
                <p className="text-[18px] leading-[160%]">
                  We craft stunning, high-performing websites that reflect your
                  brand and drive engagement.
                </p>
              </div>
            </div>
          </div>
          {/* Service */}
          <div className="rounded-2xl bg-linear-to-l from-transparent">
            <div className="bg-background rounded-2xl py-[30px] px-12 bg-radial-[at_25%_25%] from-[#0050004D] to-[#00500000] to-90% flex flex-col gap-8">
              <Image
                src={images.mentoring}
                alt="Brackets"
                width={50}
                height={50}
              />
              <div className="font-inter flex flex-col gap-4">
                <h2 className=" font-bold text-[18px] leading-[150%]">
                  Product strategy
                </h2>
                <p className="text-[18px] leading-[160%]">
                  We guide you from concept to launch with strategy that aligns
                  vision, market, and execution.
                </p>
              </div>
            </div>
          </div>
          {/* Service */}
          <div className="rounded-2xl bg-linear-to-l from-transparent">
            <div className="bg-background rounded-2xl py-[30px] px-12 bg-radial-[at_25%_25%] from-[#0050004D] to-[#00500000] to-90% flex flex-col gap-8">
              <Image src={images.group} alt="Brackets" width={50} height={50} />
              <div className="font-inter flex flex-col gap-4">
                <h2 className=" font-bold text-[18px] leading-[150%]">
                  Backend development
                </h2>
                <p className="text-[18px] leading-[160%]">
                  We engineer reliable, secure backends that keep your products
                  fast, stable, and scalable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
