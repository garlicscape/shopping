import React from 'react';
import ProductCard from '../../../components/ProductCard';
import useProducts from '../../../hook/useProducts';
import Loading from '../../../components/ui/Loading';
import SubmenusInPage from '../../../components/SubmenusInPage';

export default function Belt() {
  const {
    productsQuery: { isLoading, error, data: products },
  } = useProducts('액세사리', '벨트');

  return (
    <>
      {error && <p>{error}</p>}
      <SubmenusInPage menuName='액세사리' clickedsubMenu='벨트' />
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
