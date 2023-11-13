'use client';
import { jobsInfo } from '@/constants/data';
import { ChangeAction, SearchContextProps, JobInfo } from '@/types';
import { genericFilter } from '@/utils';
import { createContext, useContext, useReducer, ReactNode } from 'react';

export const SearchContext = createContext<SearchContextProps | undefined>(
  undefined
);

export const SearchContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const handleChange = (
    _: JobInfo[],
    { type, payload }: ChangeAction
  ): JobInfo[] => {
    console.log(payload);
    if (payload !== '') {
      switch (type) {
        case 'location':
          return genericFilter(jobsInfo, payload, 'location');
        case 'title':
          return genericFilter(jobsInfo, payload, 'position');
        case 'contract':
          return genericFilter(jobsInfo, 'Full Time', 'contract');
        default:
          return jobsInfo;
      }
    }

    return jobsInfo;
  };

  const [state, dispatch] = useReducer(handleChange, jobsInfo);

  return (
    <SearchContext.Provider value={{ state, dispatch }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = (): SearchContextProps => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error(
      'useSearchContext must be used within a SearchContextProvider'
    );
  }

  return context;
};
