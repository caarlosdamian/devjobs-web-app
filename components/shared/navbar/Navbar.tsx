import React from 'react';
import Image from 'next/image';
import { Theme } from '../theme/Theme';

export const Navbar = () => {
  return (
    <div className="bg-headerMobile md:bg-headerTablet lg:bg-headerDesktop h-[136px] md:h-[160px] w-screen bg-cover bg-no-repeat px-6 py-8 flex justify-between items-center">
      <Image src="assets/desktop/logo.svg" alt="logo" width={115} height={32} />
      <Theme />
    </div>
  );
};
