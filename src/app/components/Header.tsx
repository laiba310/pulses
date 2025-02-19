import Link from 'next/link';
import React from 'react';
import MobileNav from './MobileNav';
import NavItems from './navitem';

const Header = () => {
  return (
    <header className="w-full border-b shadow-md">
      <div className="wrapper flex items-center justify-between px-6 py-4 md:px-10">
        
        {/* Left side: Logo and Text */}
        <div className="flex items-center gap-3 md:gap-6">
          <Link href="/">
            <img
              src="/Screenshot_2024-12-29_161320-removebg-preview.png"
              alt="Hanif Traders"
              className="w-[6rem] h-[5rem] object-contain hover:scale-105 transition-transform"
            />
          </Link>
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-[#4A3F35] tracking-wide">
              Hanif Traders
            </h1>
            <h2 className="text-lg md:text-xl text-[#5A4B3B]">
              House of Pulses
            </h2>
          </div>
        </div>

        {/* Navigation Items (Desktop) */}
        <nav className="hidden md:flex space-x-6">
          <NavItems />
        </nav>

        {/* Mobile Navigation Icon */}
        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
