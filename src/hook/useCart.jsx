import { useAuthContext } from '../components/context/AuthContext';
import {
  addProductToCart,
  removeItemInCart,
  getCart,
  updateCartItem,
} from '../api/firebase';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

export default function useCart() {
  const { user } = useAuthContext();
  const queryClient = useQueryClient();

  const cartQuery = useQuery(
    ['carts', user.uid || ''],
    () => getCart(user.uid),
    {
      enabled: !!user.uid,
    }
  );

  const addProduct = useMutation(
    (product, selectedOptions) =>
      addProductToCart(user.uid, product, selectedOptions),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['carts', user.uid]);
      },
    }
  );

  const removeProduct = useMutation((id) => removeItemInCart(user.uid, id), {
    onSuccess: () => {
      queryClient.invalidateQueries(['carts', user.uid]);
    },
  });

  const updateProductQuantity = useMutation(
    (id, product, quantity) => updateCartItem(user.uid, id, product, quantity),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['carts', user.uid]);
      },
    }
  );

  return { cartQuery, addProduct, removeProduct, updateProductQuantity };
}
