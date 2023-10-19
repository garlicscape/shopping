import React from 'react';
import ProductCard from '../../components/ProductCard';
import SubmenusInPage from '../../components/SubmenusInPage';
import useProducts from '../../hook/useProducts';
import Loading from '../../components/ui/Loading';

export default function Outer() {
  const {
    productsQuery: { isLoading, error, data: products },
  } = useProducts('아우터', '');

  return (
    <>
      {error && <p>{error}</p>}
      <SubmenusInPage menuName='아우터' />
      {isLoading && <Loading />}
      <ul className='grid grid-cols-1 gap-10 my-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </ul>
    </>
  );
}
