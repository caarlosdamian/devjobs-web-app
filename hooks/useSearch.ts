import { useSearchContext } from '@/context/SearchContext';

export const useSearch = () => {
  const { dispatch } = useSearchContext();
  const handleSearch = () => {
    dispatch({ type: 'search', payload: null });
  };
  return { handleSearch };
};
