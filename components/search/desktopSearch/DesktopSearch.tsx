import { Input } from '@/components/input/Input';
import { Button } from '@/components/shared/button/Button';
import React from 'react';

export const DesktopSearch = () => {
  return (
    <div
      className="flex items-center h-20 gap-5 
    pl-6 pr-6 background-white_veryDarkBlue 
    rounded-md absolute right-2/4 left-2/4 transform -translate-x-1/2 -translate-y-1/2 
    min-w-[689px] lg:min-w-[1110px] lg:gap-8"
    >
      <Input
        className="max-w-[145px] lg:max-w-full lg:w-[308px]"
        placeholder="Filter by title..."
        icon="/assets/desktop/icon-search.svg"
        alt="search"
        height={24}
        width={24}
      />
      <div className="w-[1px] bg-secondary-darkGrey opacity-30 h-full"></div>
      <Input
        className="max-w-[145px] lg:max-w-full lg:w-[280px]"
        placeholder="Filter by location..."
        icon="/assets/desktop/icon-location.svg"
        alt="location"
        width={16}
        height={24}
      />
      <div className="w-[1px] bg-secondary-darkGrey opacity-30 h-full"></div>
      <div className="flex items-center gap-7 w-full justify-between">
        <div className="flex items-center gap-4 cursor-pointer">
          <div className="w-6 h-6 bg-secondary-lightGrey"></div>
          <span className="text-veryDarkBlue_white paragraph-semibold lg:hidden">
            Full Time
          </span>
          <span className="text-veryDarkBlue_white paragraph-semibold hidden lg:flex">
            Full Time Only
          </span>
        </div>
        <Button
          label="Search"
          className="btn px-[14px] py-4 text-white lg:px-9"
        />
      </div>
    </div>
  );
};
