import React from 'react';
import useCart from '../hook/useCart';

export default function CartStatus() {
  const {
    cartQuery: { data: products },
  } = useCart();

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
