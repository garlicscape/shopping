import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { getCart } from '../api/firebase';
import { useAuthContext } from './context/AuthContext';

export default function CartStatus() {
  const { user } = useAuthContext();
  const { data: products } = useQuery(['carts'], () => getCart(user.uid));
  return (
    <>
      {products && (
        <p className='hidden sm:inline absolute -top-2 -right-2 w-5 h-5 leading-5 rounded-full bg-sky-600 text-white text-center text-sm'>
          {products.length}
        </p>
      )}
    </>
  );
}
