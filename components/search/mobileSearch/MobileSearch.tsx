'use client';
import { Input } from '@/components/input/Input';
import { Button } from '@/components/shared/button/Button';
import { useSearchContext } from '@/context/SearchContext';
import { useTheme } from '@/context/ThemeContext';
import { ActionType } from '@/types';
import Image from 'next/image';
import React, { useState } from 'react';

export const MobileSearch = () => {
  const { mode } = useTheme();
  const [filter, setFilter] = useState<ActionType>('title'); // esto se cambiara con el modal cambiando el filtrado
  const { dispatch } = useSearchContext();
  return (
    <section className="flex-between rounded-md background-white_veryDarkBlue px-6 py-8 min-w-[328px] h-20 absolute right-2/4 left-2/4 transform -translate-x-1/2 -translate-y-1/2 text-white">
      <Input
        placeholder={`Filter by ${filter}`}
        onChange={(e) => dispatch({ type: filter, payload: e.target.value })}
      />
      <div className="flex-between gap-6">
        <Image
          src={`${
            mode === 'dark'
              ? 'assets/mobile/icon-filter-white.svg'
              : 'assets/mobile/icon-filter.svg'
          }`}
          alt="filter"
          width={20}
          height={20}
        />
        <Button className="btn p-4">
          <Image
            src="assets/desktop/icon-search-white.svg"
            alt="search"
            width={20}
            height={20}
          />
        </Button>
      </div>
    </section>
  );
};
