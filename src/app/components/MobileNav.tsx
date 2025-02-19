import React from 'react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';
import NavItems from './navitem';
import Link from 'next/link';
import { AlignJustify } from 'lucide-react';

const MobileNav = () => {
  return (
    <nav className='md:hidden'>
      <Sheet>
        <SheetTrigger className='align-middle'>
        <AlignJustify />
        </SheetTrigger>
        <SheetContent className='flex flex-col gap-6 bg-white md:hidden'>
          <div className="flex flex-col items-center">
            <Link href="/">
              <img 
                src="/Screenshot_2024-12-29_161320-removebg-preview.png" 
                alt="Logo" 
                className='w-[8rem] h-[6rem] ml-7' 
              />
            </Link>
            <h1 className='text-2xl font-semibold text-center mt-2'>House Of Pulses</h1>
          </div>

          <Separator className='border border-gray-50' />

          {/* Wrap NavItems in a flex-col layout */}
          <div className="flex flex-col items-center gap-4">
            <NavItems />
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
