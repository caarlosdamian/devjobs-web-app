'use client';
import React from 'react';
import Wrapper from './Wrapper';
import { Input } from '../input/Input';

const FilterModal = ({ dispatch,onCancel, ...props }: any) => {

  return (
    <Wrapper handleClosed={onCancel}>
      <div className="background-white_veryDarkBlue h-[217px] w-[327px] absolute top-[225px] left-0 right-0 mx-auto p-6 z-[99999] rounded-md">
        <div className="">
          <Input
            className={`max-w-[145px] lg:max-w-full`}
            placeholder="Filter by location…"
            icon="/assets/desktop/icon-location.svg"
            alt="location"
            height={24}
            width={16}
            onChange={(e) =>
              dispatch({ type: 'location', payload: e.target.value })
            }
          />
        </div>
        <div className=""></div>
      </div>
    </Wrapper>
  );
};

export default FilterModal;
