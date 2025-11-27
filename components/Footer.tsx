import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';
import images from '@/public/images/images';

const Footer = () => {
  return (
    <footer className="bg-[#010E06] text-white pt-16 pb-8 relative before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-px before:bg-gradient-to-r before:from-[#010A04] before:via-[#518369] before:to-[#010A04] before:opacity-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1.5fr] lg:grid-cols-[1fr_auto_1.5fr_1.5fr] gap-6">
          {/* Column 1: About and Contact */}
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="sr-only">Athera Solutions</span>
              <div className="relative w-32 h-10">
                <Image
                  src={images.logo}
                  alt="Athera Solutions"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-gray-400">
              We bridge ideas and execution with smart, scalable digital
              solutions that move businesses forward.
            </p>
            <div className="space-y-3 pt-2">
              <div className="flex items-start space-x-3">
                <div className="bg-[#00A651] rounded-full p-1.5 flex-shrink-0">
                  <Mail className="h-4 w-4 text-white" />
                </div>
                <a
                  href="mailto:faithisaacojo97@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors relative group"
                >
                  faithisaacojo97@gmail.com
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-[#00A651] rounded-full p-1.5 flex-shrink-0">
                  <Phone className="h-4 w-4 text-white" />
                </div>
                <a
                  href="tel:+2348120407160"
                  className="text-gray-400 hover:text-white transition-colors relative group"
                >
                  +234 812 040 7160
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-[#00A651] rounded-full p-1.5 flex-shrink-0">
                  <MapPin className="h-4 w-4 text-white" />
                </div>
                <span className="text-gray-400">Lagos, Nigeria</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4 p-4 w-48">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors relative group"
                >
                  About Us
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-white transition-colors relative group"
                >
                  Services
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-gray-400 hover:text-white transition-colors relative group"
                >
                  Careers
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white transition-colors relative group"
                >
                  Contact Us
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="space-y-4 flex-1">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services/software-app-development"
                  className="text-gray-400 hover:text-white transition-colors relative group"
                >
                  Software & App development
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services/digital-transformation"
                  className="text-gray-400 hover:text-white transition-colors relative group"
                >
                  Digital Transformation Consulting
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services/website-design"
                  className="text-gray-400 hover:text-white transition-colors relative group"
                >
                  Website Design
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services/product-strategy"
                  className="text-gray-400 hover:text-white transition-colors relative group"
                >
                  Product Strategy & Innovation
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services/digital-marketing"
                  className="text-gray-400 hover:text-white transition-colors relative group"
                >
                  Digital Marketing
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services/backend-development"
                  className="text-gray-400 hover:text-white transition-colors relative group"
                >
                  Backend Development
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="space-y-4 flex-1">
            <h3 className="text-lg font-semibold">Stay Updated</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our Newsletter for the latest tech insights and
              project updates.
            </p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Email"
                className="flex-1 px-4 py-2 bg-transparent border border-[#E6E7E8] text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-white rounded-sm"
              />
              <button className="bg-[#00A651] text-white py-2 px-4 rounded-sm hover:bg-opacity-90 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <div className="flex items-center space-x-6 pt-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors flex items-center justify-center w-10 h-10"
              >
                <Image
                  src={images.fb}
                  alt="Facebook"
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors flex items-center justify-center w-10 h-10"
              >
                <Image
                  src={images.tw}
                  alt="Twitter"
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors flex items-center justify-center w-10 h-10"
              >
                <Image
                  src={images.ig}
                  alt="Instagram"
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors flex items-center justify-center w-10 h-10"
              >
                <Image
                  src={images.linkedin}
                  alt="LinkedIn"
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[1px solid #E6E7E8] mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © {new Date().getFullYear()} Athera Solutions. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="/privacy"
              className="text-gray-300 hover:text-white text-sm relative group"
            >
              Privacy Policy
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/terms"
              className="text-gray-300 hover:text-white text-sm relative group"
            >
              Terms of Service
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
