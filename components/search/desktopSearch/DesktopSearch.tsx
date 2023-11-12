import React from 'react';
import { Input } from '@/components/input/Input';
import { Button } from '@/components/shared/button/Button';
import { filterInputsDesktop } from '@/constants/data';
import { useSearchContext } from '@/context/SearchContext';

export const DesktopSearch = () => {
  const { dispatch } = useSearchContext();
  return (
    <div
      className="flex items-center h-20 gap-5 
    pl-6 pr-6 background-white_veryDarkBlue 
    rounded-md absolute right-2/4 left-2/4 transform -translate-x-1/2 -translate-y-1/2 
    min-w-[689px] lg:min-w-[1110px] lg:gap-8"
    >
      {filterInputsDesktop.map((input) => (
        <React.Fragment key={input.id}>
          <Input
            className={`max-w-[145px] lg:max-w-full ${input.className}`}
            placeholder={input.placeholder}
            icon={input.icon}
            alt={input.alt}
            height={input.height}
            width={input.width}
            onChange={(e) =>
              dispatch({ type: input.type, payload: e.target.value })
            }
          />
          <div className="w-[1px] bg-secondary-darkGrey opacity-30 h-full" />
        </React.Fragment>
      ))}
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
