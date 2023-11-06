'use client';
import { useTheme } from '@/context/ThemeContext';
import Image from 'next/image';
import React, { useState } from 'react';

export const Theme = () => {
  const { mode, setMode } = useTheme();

  const handletheme = () => {
    const modeUpdate = mode === 'dark' ? 'light' : 'dark'
    setMode(modeUpdate);
    localStorage.theme = modeUpdate;
  };

  return (
    <div className="flex items-center gap-4">
      <Image
        src="assets/desktop/icon-sun.svg"
        alt="logo"
        width={20}
        height={20}
      />
      <div
        className="bg-white rounded-xl h-6 w-12 p-1 relative"
        onClick={handletheme}
      >
        <div
          className={`absolute left-1 top-1 h-[15px] w-[15px] bg-primary-violet rounded-2xl ease-in-out duration-300 transition-all  ${
            mode === 'dark' && 'translate-x-6'
          }`}
        ></div>
      </div>
      <Image
        src="assets/desktop/icon-moon.svg"
        alt="logo"
        width={20}
        height={20}
      />
    </div>
  );
};
