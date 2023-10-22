import React from 'react';
import useProducts from '../../../hook/useProducts';
import Loading from '../../../components/ui/Loading';
import SubmenusInPage from '../../../components/SubmenusInPage';
import Products from '../../../components/Products';

export default function Hat() {
  const {
    productsQuery: { isLoading, error, data: products },
  } = useProducts('액세사리', '모자');

  return (
    <>
      {error && <p>{error}</p>}
      <SubmenusInPage menuName='액세사리' clickedsubMenu='모자' />
      {isLoading && <Loading />}
      {products && <Products products={products} />}
    </>
  );
}
