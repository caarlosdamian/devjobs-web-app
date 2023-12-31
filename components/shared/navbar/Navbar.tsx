import React from 'react';
import Image from 'next/image';
import { Theme } from '../theme/Theme';
import Link from 'next/link';

export const Navbar = () => {
  return (
    <div className="bg-headerMobile md:bg-headerTablet lg:bg-headerDesktop h-[136px] md:h-[160px] w-screen bg-cover bg-no-repeat px-6 py-8 md:px-10 md:py-[42px] lg:px-40 lg:py-12 flex justify-between items-start">
      <Link href='/'>
      <Image src="assets/desktop/logo.svg" alt="logo" width={115} height={32} /></Link>
      <Theme />
    </div>
  );
};
