'use client';

const ImpactSection = () => {
  return (
    <section
      className="mt-20 max-w-6xl mx-auto rounded-3xl p-10 text-center"
      style={{
        background: 'linear-gradient(94.87deg, #242243 24.19%, #0BB453 98.65%)',
      }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        Delivering <span className="text-[#0BB453]">Measurable Impact</span>
      </h2>

      <p className="text-white text-lg max-w-2xl mx-auto mb-6 font-poppins">
        Ready to transform your ideas into scalable reality? We deliver
        end-to-end digital transformation with technical precision.
      </p>

      <button className="px-8 py-3 bg-transparent text-white font-poppins rounded-full border border-gray-400 hover:bg-green-800 transition cursor-pointer">
        Start Your Project Today
      </button>
    </section>
  );
};

export default ImpactSection;
