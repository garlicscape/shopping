import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { getProducts } from '../../../api/firebase';
import ProductCard from '../../../components/ProductCard';

export default function Jeans() {
  const {
    isLoading,
    error,
    data: products,
  } = useQuery(['products'], () => getProducts('바지', '청바지'));
  return (
    <>
      {isLoading && <p>loading...</p>}
      {error && <p>{error}</p>}
      <h2 className='my-6 text-2xl font-bold text-center'>청바지</h2>
      <ul className='grid grid-cols-1 gap-10 my-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </ul>
    </>
  );
}
