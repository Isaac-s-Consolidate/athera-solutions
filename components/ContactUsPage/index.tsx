'use client';
import React from 'react';
import { Phone } from 'lucide-react';
import ContactForm from '../ContactForm';
import Image from 'next/image';

// Image paths
const toplift = '/images/topleft.svg';
const topright = '/images/topright.svg';

const ContactUsPage = () => {
  return (
    <div className="text-white pt-24">
      <ContactForm />
      {/* Need Immediate Help Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl p-8 sm:p-12 text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <h1 className="flex items-center justify-center text-4xl font-semibold mb-14 gap-6">
                <Image
                  src={toplift}
                  alt=""
                  aria-hidden="true"
                  className="w-10 h-10 opacity-80"
                  width={40}
                  height={40}
                />
                <span className="bg-gradient-to-r from-[#0BB453] to-[#242243] bg-clip-text text-transparent">
                  Need Immediate Help
                </span>
                <Image
                  src={topright}
                  alt=""
                  aria-hidden="true"
                  className="w-10 h-10 opacity-80"
                  width={40}
                  height={40}
                />
              </h1>
            </div>

            <p className="text-[ #E6E7E8] mb-8 max-w-2xl mx-auto">
              For urgent inquiries, call us directly or schedule a consultation
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+1234567890"
                className="inline-flex items-center gap-2 bg-[#0DAA52] hover:bg-[#099d47] text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>

              <a
                href="#schedule"
                className="inline-flex items-center gap-2 bg-transparent hover:bg-gray-800 text-white font-semibold px-8 py-3 rounded-lg border border-gray-700 hover:border-[#0BB453] transition-all duration-300"
              >
                Schedule Call
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUsPage;
