'use client';
import { useTheme } from '@/context/ThemeContext';
import Image from 'next/image';
import React, { useState } from 'react';

export const Theme = () => {
  const { mode, setMode } = useTheme();

  const handletheme = (newMode: string) => {
    setMode(newMode);
    localStorage.theme = newMode;
  };

  return (
    <div className="group flex items-center gap-4">
      <Image
        src="assets/desktop/icon-sun.svg"
        alt="logo"
        width={20}
        height={20}
        onClick={() => handletheme('light')}
        className="cursor-pointer"
      />
      <div
        className="bg-white rounded-xl h-6 w-12 p-1 relative cursor-pointer"
        onClick={() => handletheme(mode === 'dark' ? 'light' : 'dark')}
      >
        <div
          className={`group-hover:bg-primary-lightViolet absolute left-1 top-1 h-[15px] w-[15px] bg-primary-violet rounded-2xl ease-in-out duration-300 transition-all  ${
            mode === 'dark' && 'translate-x-6'
          }`}
        ></div>
      </div>
      <Image
        src="assets/desktop/icon-moon.svg"
        alt="logo"
        width={20}
        height={20}
        onClick={() => handletheme('dark')}
        className="cursor-pointer"
      />
    </div>
  );
};
