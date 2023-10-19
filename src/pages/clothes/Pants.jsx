import React from 'react';
import ProductCard from '../../components/ProductCard';
import { loadSomeDropmenu } from '../../api/menu';
import CategoriesInMainPage from '../../components/CategoriesInMainPage';
import useProducts from '../../hook/useProducts';
import Loading from '../../components/ui/Loading';

export default function Pants() {
  const categories = loadSomeDropmenu('팬츠');
  const {
    productsQuery: { isLoading, error, data: products },
  } = useProducts('바지');

  return (
    <>
      {error && <p>{error}</p>}
      <h2 className='my-6 text-2xl font-bold text-center'>팬츠</h2>
      {isLoading && <Loading />}
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
