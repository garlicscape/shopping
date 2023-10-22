import React from 'react';
import useProducts from '../../hook/useProducts';
import Loading from '../../components/ui/Loading';
import Products from '../../components/Products';

export default function Shoes() {
  const {
    productsQuery: { isLoading, error, data: products },
  } = useProducts('신발');

  return (
    <>
      {error && <p>{error}</p>}
      <h2 className='my-6 text-2xl font-bold text-center'>신발</h2>
      {isLoading && <Loading />}
      {products && <Products products={products} />}
    </>
  );
}
