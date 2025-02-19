'use client';

import Link from 'next/link';
import React from 'react';
import { HousePlus, ListCollapse, Map, Phone, TableOfContents } from 'lucide-react';


const NavItems = () => {
  return (
    <ul className="flex flex-col items-start gap-5 md:flex-row md:gap-6">
      <li className="flex flex-col md:flex-row gap-4 w-full">
        <Link href="/" className="text-black hover:text-blue-500 flex gap-2">
          <HousePlus />
          Home
        </Link>
        <Link href="/about" className="text-black hover:text-blue-500 flex gap-2">
        <ListCollapse />
          About
        </Link>
        <Link href="/product" className="text-black hover:text-blue-500 flex gap-2">
          <TableOfContents />
          Product
        </Link>
        <Link href="/mapp" className="text-black hover:text-blue-500 flex gap-2">
         
         <Map />
          Map
        </Link>
        <Link href="/Contactt" className="text-black hover:text-blue-500 flex gap-2">
         
         <Phone />
          Contact
        </Link>
      </li>
    </ul>
  );
};

export default NavItems;
