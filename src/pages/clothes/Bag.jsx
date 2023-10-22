import React from 'react';
import useProducts from '../../hook/useProducts';
import Loading from '../../components/ui/Loading';
import Products from '../../components/Products';

export default function Bag() {
  const {
    productsQuery: { isLoading, error, data: products },
  } = useProducts('가방');

  return (
    <>
      {error && <p>{error}</p>}
      <h2 className='my-6 text-2xl font-bold text-center'>가방</h2>
      {isLoading && <Loading />}
      {products && <Products products={products} />}
    </>
  );
}
