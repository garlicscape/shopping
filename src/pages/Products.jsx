import React from 'react';
import ProductCard from '../components/ProductCard';
import useProducts from '../hook/useProducts';
import Loading from '../components/ui/Loading';

export default function Products() {
  const {
    productsQuery: { isLoading, error, data: products },
  } = useProducts();

  return (
    <>
      {error && <p>{error}</p>}
      <h2 className='my-6 text-2xl font-bold text-center'>전체 상품</h2>
      {isLoading && <Loading />}
      <ul className='grid grid-cols-2 gap-10 my-6 md:grid-cols-3 xl:grid-cols-4'>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </ul>
    </>
  );
}
