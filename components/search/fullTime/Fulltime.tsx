import { useSearchContext } from '@/context/SearchContext';
import { ChangeAction } from '@/types';
import Image from 'next/image';
import React, { useMemo } from 'react';

interface Props {
  mobile?: boolean;
}

const Fulltime = ({ mobile }: Props) => {
  const {
    dispatch,
    state: {
      search: { contract },
    },
  } = useSearchContext();

  const isChecked = useMemo(() => contract === 'Full Time', [contract]);
  return (
    <div
      className="flex items-center gap-4 cursor-pointer"
      onClick={() => dispatch({ type: 'contract' })}
    >
      <div
        className={`w-6 h-6 rounded flex items-center justify-center ${
          isChecked ? 'bg-primary-violet' : 'bg-secondary-lightGrey'
        }`}
      >
        {isChecked && (
          <Image
            src={'assets/desktop/icon-check.svg'}
            alt="check"
            width={12}
            height={9}
          />
        )}
      </div>
      {!mobile && (
        <span className="text-veryDarkBlue_white paragraph-semibold lg:hidden">
          Full Time
        </span>
      )}
      <span
        className={`text-veryDarkBlue_white paragraph-semibold ${
          mobile ? '' : ' hidden lg:flex'
        }`}
      >
        Full Time Only
      </span>
    </div>
  );
};

export default Fulltime;
