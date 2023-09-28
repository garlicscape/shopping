import React from 'react';
import { getProducts } from '../../api/firebase';
import { useQuery } from '@tanstack/react-query';
import ProductCard from '../../components/ProductCard';
import { loadSomeDropmenu } from '../../api/menu';
import CategoriesInMainPage from '../../components/CategoriesInMainPage';

export default function Outer() {
  const categories = loadSomeDropmenu('아우터');
  const {
    isLoading,
    error,
    data: products,
  } = useQuery(['products'], () => getProducts('아우터'));
  return (
    <>
      {isLoading && <p>loading...</p>}
      {error && <p>{error}</p>}
      <h2 className='my-6 text-2xl font-bold text-center'>아우터</h2>
      <CategoriesInMainPage categories={categories} />
      <ul className='grid grid-cols-1 gap-10 my-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </ul>
    </>
  );
}