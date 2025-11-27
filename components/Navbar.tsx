'use client';

import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import images from '../public/images/images';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/careers', label: 'Careers' },
  { href: '/contact', label: 'Contact Us' },
];

export default function Navbar(): React.ReactElement {
  const [mobileOpen, setMobileOpen] = useState(false);
  const mobilePanelRef = useRef<HTMLDivElement | null>(null);

  // State to track active path
  const [activePath, setActivePath] = useState('/');

  // Set active path on mount and route change
  useLayoutEffect(() => {
    const updatePath = () => setActivePath(window.location.pathname);

    // Initial update
    updatePath();

    // Handle browser back/forward
    window.addEventListener('popstate', updatePath);

    // Cleanup
    return () => {
      window.removeEventListener('popstate', updatePath);
    };
  }, []);

  // Helper function to get active link class
  const getActiveClass = (href: string) => {
    const isActive =
      activePath === href || (activePath === '/' && href === '/');
    return isActive
      ? 'text-transparent bg-clip-text bg-gradient-to-b from-[#0CAB52] to-[#242243] font-semibold'
      : 'text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-b hover:from-[#0CAB52] hover:to-[#242243] transition-all duration-300';
  };

  const navbarStyle = {
    background:
      'linear-gradient(300.53deg, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.1) 100%)',
    boxShadow: [
      '0px 4px 6px -1px rgba(0, 0, 0, 0.1)',
      '0px 2px 4px -2px rgba(0, 0, 0, 0.1)',
      'inset 0px 0px 8px 0px rgba(255, 255, 255, 0.4)',
    ].join(','),
    backdropFilter: 'blur(40px)',
  };

  // Close on Esc
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setMobileOpen(false);
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // Close when clicking outside mobile panel and handle scroll
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      const target = e.target as HTMLElement;
      // Don't close if clicking on the menu button or its children
      const menuButton = document.querySelector('button[aria-label*="menu"]');
      if (
        menuButton &&
        (menuButton === target || menuButton.contains(target))
      ) {
        return;
      }

      if (!mobileOpen || !mobilePanelRef.current) return;
      if (!mobilePanelRef.current.contains(target)) {
        setMobileOpen(false);
      }
    }

    // Prevent scrolling when mobile menu is open
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('click', handleClickOutside);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('click', handleClickOutside);
    };
  }, [mobileOpen]);

  return (
    <nav className="fixed w-full z-50" style={navbarStyle}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3 md:py-4">
          {/* LEFT: Logo */}
          <div className="flex items-center gap-3">
            <Link href="/" className="inline-flex items-center">
              <span className="sr-only">Athera Solutions</span>
              <Image
                src={images.logo}
                alt="Athera logo"
                width={140}
                height={40}
                priority={false}
                className="block object-contain"
              />
            </Link>
          </div>

          {/* MIDDLE: Desktop nav links */}
          <div className="hidden md:flex md:gap-8">
            <ul className="flex items-center gap-10 text-sm font-medium">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`hover:opacity-80 transition-all font-medium ${getActiveClass(link.href)}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT: Actions */}
          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <Link
                href="/get-started"
                className="inline-flex items-center px-4 py-2 rounded-md border border-[#E6E7E8] text-[#E6E7E8] text-sm font-semibold hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setMobileOpen(!mobileOpen);
              }}
              className="md:hidden text-white p-2 hover:bg-white/10 rounded-md transition-colors"
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        ref={mobilePanelRef}
        className={`fixed inset-0 top-[72px] bg-[#010E06] transition-all duration-700 ease-[cubic-bezier(0.2, 0.8, 0.2, 1)] overflow-y-auto ${
          mobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        style={{
          zIndex: 50,
          height: mobileOpen ? 'calc(100vh - 72px)' : '0',
          willChange: 'opacity, height',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          className="w-full max-w-md px-4 py-8 transform transition-all duration-700 ease-out"
          style={{
            opacity: mobileOpen ? 1 : 0.5,
            transform: mobileOpen ? 'translateY(0)' : 'translateY(10px)',
          }}
        >
          <div className="flex flex-col items-center gap-6">
            {NAV_LINKS.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`text-2xl font-medium py-2 transition-all duration-500 transform hover:scale-105 ${getActiveClass(link.href)}`}
                style={{
                  transitionDelay: mobileOpen ? `${index * 150}ms` : '0ms',
                  opacity: mobileOpen ? 1 : 0,
                  transform: mobileOpen ? 'translateY(0)' : 'translateY(10px)',
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="mt-12 pt-6 border-t border-gray-700 flex justify-center">
            <Link
              href="/get-started"
              onClick={() => setMobileOpen(false)}
              className="text-2xl font-medium py-2 px-6 relative group text-white border border-[#E6E7E8] rounded-full"
              style={{
                transitionDelay: mobileOpen
                  ? `${NAV_LINKS.length * 150}ms`
                  : '0ms',
                opacity: mobileOpen ? 1 : 0,
                transform: mobileOpen ? 'translateY(0)' : 'translateY(10px)',
              }}
            >
              <span className="relative">
                Get Started
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
