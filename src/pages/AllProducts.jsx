import React from 'react';
import Products from '../components/Products';
import useProducts from '../hook/useProducts';
import Loading from '../components/ui/Loading';

export default function AllProducts() {
  const {
    productsQuery: { isLoading, error, data: products },
  } = useProducts();

  return (
    <>
      {error && <p>{error}</p>}
      <h2 className='my-6 text-2xl font-bold text-center'>전체 상품</h2>
      {isLoading && <Loading />}
      {products && <Products products={products} />}
    </>
  );
}
