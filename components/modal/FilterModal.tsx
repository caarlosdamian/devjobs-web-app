'use client';
import React from 'react';
import Wrapper from './Wrapper';
import { Input } from '../input/Input';
import Fulltime from '../search/fullTime/Fulltime';
import { FilterModalProps } from '@/types';
import { Button } from '../shared/button/Button';
import { useSearch } from '@/hooks/useSearch';
import { useSearchContext } from '@/context/SearchContext';

const FilterModal = ({ onCancel, ...props }: FilterModalProps) => {
  const { handleSearch } = useSearch();
  const {
    dispatch,
    state: {
      search: { location },
    },
  } = useSearchContext();
  return (
    <Wrapper handleClosed={onCancel}>
      <div className="background-white_veryDarkBlue h-[217px] w-[327px] absolute top-[225px] left-0 right-0 mx-auto z-[99999] rounded-md flex flex-col">
        <div className="p-6 border-b border-secondary-darkGrey border-opacity-[.2]">
          <Input
            className={`max-w-[145px] lg:max-w-full`}
            placeholder="Filter by location…"
            icon="/assets/desktop/icon-location.svg"
            alt="location"
            height={24}
            width={16}
            value={location}
            onChange={(e) =>
              dispatch({ type: 'location', payload: e.target.value })
            }
          />
        </div>
        <div className="p-6 flex flex-col gap-6">
          <Fulltime mobile />
          <Button
            label="Search"
            className="btn w-full px-[14px] py-4 text-white lg:px-9"
            onClick={handleSearch}
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default FilterModal;
