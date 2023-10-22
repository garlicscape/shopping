import React from 'react';
import useProducts from '../../../hook/useProducts';
import Loading from '../../../components/ui/Loading';
import SubmenusInPage from '../../../components/SubmenusInPage';
import Products from '../../../components/Products';

export default function Glasses() {
  const {
    productsQuery: { isLoading, error, data: products },
  } = useProducts('액세사리', '안경');

  return (
    <>
      {error && <p>{error}</p>}
      <SubmenusInPage menuName='액세사리' clickedsubMenu='안경' />
      {isLoading && <Loading />}
      {products && <Products products={products} />}
    </>
  );
}
