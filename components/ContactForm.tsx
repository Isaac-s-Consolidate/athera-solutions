'use client';

import { useState } from 'react';
import Image from 'next/image';
import images from '@/public/images/images';

interface ContactFormProps {
  showTopBorder?: boolean;
}

export default function ContactSection({
  showTopBorder = true,
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    projectDetails: '',
  });

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
    alert('Message sent! (This is a demo)');
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="relative py-25 px-4">
      {showTopBorder && (
        <div
          className="absolute top-0 left-0 right-0 h-[1px]"
          style={{
            background:
              'linear-gradient(90deg, #010A04 1.84%, #518369 51.52%, #010A04 100%)',
          }}
        ></div>
      )}
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Get In Touch
          </h1>
          <p className="text-gray-300 text-lg">
            Ready to start your next project? Let&apos;s discuss how we can
            bring your ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-white">
              Let&apos;s start a conversation
            </h2>
            <p className="text-gray-300 mb-12">
              We&apos;re here to listen, strategize and build solutions that
              move your business forward. Reach out - your next big idea starts
              here
            </p>

            {/* Contact Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              <div className="bg-white/5 p-6 rounded-xl backdrop-blur-sm border border-white/10">
                <div className="flex items-start gap-4">
                  <div className="relative w-10 h-10">
                    <Image
                      src={images.email}
                      alt="Email"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white/90">Email Us</h3>
                    <p className="text-gray-300 text-sm mt-1">
                      faithisaacojo97@gmail.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 p-6 rounded-xl backdrop-blur-sm border border-white/10">
                <div className="flex items-start gap-4">
                  <div className="relative w-10 h-10">
                    <Image
                      src={images.call}
                      alt="Phone"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white/90">Call Us</h3>
                    <p className="text-gray-300 text-sm mt-1">
                      +234 812 040 7160
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 p-6 rounded-xl backdrop-blur-sm border border-white/10">
                <div className="flex items-start gap-4">
                  <div className="relative w-10 h-10">
                    <Image
                      src={images.visit}
                      alt="Location"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white/90">Visit Us</h3>
                    <p className="text-gray-300 text-sm mt-1">Lagos, Nigeria</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 p-6 rounded-xl backdrop-blur-sm border border-white/10">
                <div className="flex items-start gap-4">
                  <div className="relative w-10 h-10">
                    <Image
                      src={images.workH}
                      alt="Working Hours"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white/90">
                      Working Hours
                    </h3>
                    <p className="text-gray-300 text-sm mt-1">
                      Mon-Fri, 9AM-5PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Choose Section */}
            <div className="bg-[#294635] rounded-2xl p-6 border border-[#3a5a47] shadow-lg w-full max-w-md">
              <h3 className="text-2xl font-bold mb-6 text-white">
                Why Choose Athera Solutions?
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-100">Innovation at the core</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-100">
                    Transparent pricing with no hidden fee
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-100">
                    Strategic partnership approach
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-100">
                    Proven expertise across industries
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-transparent rounded-2xl p-6 border border-[#E6E7E8] w-full max-w-md">
            <div className="space-y-16">
              <div>
                <label className="block text-sm font-medium mb-2 text-white">
                  Full name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-green-500 transition-colors text-gray-900 placeholder-gray-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-white">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-green-500 transition-colors text-gray-900 placeholder-gray-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-white">
                  Project Details <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="projectDetails"
                  value={formData.projectDetails}
                  onChange={handleChange}
                  placeholder="tell us about your project, timeline, budgets.."
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-green-500 transition-colors text-gray-900 placeholder-gray-400 resize-none"
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full text-white font-semibold py-4 rounded-lg transition-all flex items-center justify-center gap-2 group"
                style={{
                  background: '#4FAA76',
                  boxShadow: '0px 0px 4px 0px #00000040',
                }}
              >
                Send Message
                <div className="relative w-5 h-5 group-hover:translate-x-1 transition-transform">
                  <Image
                    src={images.send}
                    alt="Send"
                    fill
                    className="object-contain"
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
