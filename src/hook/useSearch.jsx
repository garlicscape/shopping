import { getSearchedItem } from '../api/firebase';
import { useQuery } from '@tanstack/react-query';

export default function useSearch(searchText) {
  const searchQuery = useQuery(['products', searchText], () => {
    return getSearchedItem(searchText);
  });
  return { searchQuery };
}
