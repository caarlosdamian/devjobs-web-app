import React from 'react';
import { Input } from '@/components/input/Input';
import { Button } from '@/components/shared/button/Button';
import { filterInputsDesktop } from '@/constants/data';
import { useSearchContext } from '@/context/SearchContext';
import Fulltime from '../fullTime/Fulltime';
import { useSearch } from '@/hooks/useSearch';

export const DesktopSearch = () => {
  const { dispatch } = useSearchContext();
  const { handleSearch } = useSearch();

  return (
    <div
      className="w-full flex justify-between h-20 gap-5 
    px-3 xl:px-6 background-white_veryDarkBlue 
    rounded-md lg:gap-8 min-w-[720px] max-sm:hidden"
    >
      {filterInputsDesktop.map((input) => (
        <div
          className="flex items-center justify-between flex-1"
          key={input.id}
        >
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
        </div>
      ))}
      <div className="flex items-center justify-between gap-7 w-full flex-1">
        <Fulltime />
        <Button
          label="Search"
          className="btn px-[14px] py-4 text-white xl:px-9"
          onClick={handleSearch}
        />
      </div>
    </div>
  );
};
