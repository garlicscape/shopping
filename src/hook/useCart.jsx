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

  const putProductsOnCart = useMutation(
    (productToCart) => {
      const { product, selectedOption } = productToCart;
      addProductToCart(user.uid, product, selectedOption);
    },
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
    (productToControl) => {
      const { id, product, quantity } = productToControl;
      updateCartItem(user.uid, id, product, quantity);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['carts', user.uid]);
      },
    }
  );

  return { cartQuery, putProductsOnCart, removeProduct, updateProductQuantity };
}
