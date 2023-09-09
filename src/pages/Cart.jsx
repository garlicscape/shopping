import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useAuthContext } from '../components/context/AuthContext';
import { getCart } from '../api/firebase';
import CartItem from '../components/CartItem';

export default function Cart() {
  const { user } = useAuthContext();

  const { isLoading, data: products } = useQuery(['carts'], () =>
    getCart(user.uid)
  );

  console.log(products);
  if (isLoading) <p>Loading...</p>;
  return (
    <ul>
      {products &&
        products.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
    </ul>
  );
}
