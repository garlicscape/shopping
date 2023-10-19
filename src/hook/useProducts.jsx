import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { addNewProduct, getProducts } from '../api/firebase';

export default function useProducts(mainMenu = '', subMenu = '') {
  const queryClient = useQueryClient();

  const productsQuery = useQuery(
    ['products', { mainMenu, subMenu }],
    () => {
      return getProducts(mainMenu, subMenu);
    },
    {
      staleTime: 1000 * 60,
    }
  );

  const addProduct = useMutation(
    ({ product, url }) => addNewProduct(product, url),
    {
      onSuccess: () => queryClient.invalidateQueries(['ptoducts']),
    }
  );
  return { productsQuery, addProduct };
}
