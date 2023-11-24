'use client';
import { jobsInfo } from '@/constants/data';
import { ChangeAction, SearchContextProps, JobInfo, StateI } from '@/types';
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
    state: StateI,
    { type, payload }: ChangeAction
  ): StateI => {
    console.log(payload);

    switch (type) {
      case 'location':
        return {
          ...state,
          search: { ...state.search, [type]: payload as string },
        };
      case 'position':
        return {
          ...state,
          search: { ...state.search, [type]: payload as string },
        };
      case 'contract':
        if (state.search.contract === 'Full Time') {
          return {
            ...state,
            search: {
              ...state.search,
              contract: '',
            },
          };
        } else {
          return {
            ...state,
            search: {
              ...state.search,
              contract: 'Full Time',
            },
          };
        }

      case 'search':
        return {
          ...state,
          data: genericFilter(jobsInfo, state.search),
        };
      default:
        return {
          data: jobsInfo,
          search: {
            location: '',
            position: '',
            contract: '',
          },
        };
    }
  };

  const [state, dispatch] = useReducer(handleChange, {
    data: jobsInfo,
    search: {
      location: '',
      position: '',
      contract: '',
    },
  });

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
