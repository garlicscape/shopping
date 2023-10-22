import React from 'react';
import useProducts from '../../../hook/useProducts';
import Loading from '../../../components/ui/Loading';
import SubmenusInPage from '../../../components/SubmenusInPage';
import Products from '../../../components/Products';

export default function Belt() {
  const {
    productsQuery: { isLoading, error, data: products },
  } = useProducts('액세사리', '벨트');

  return (
    <>
      {error && <p>{error}</p>}
      <SubmenusInPage menuName='액세사리' clickedsubMenu='벨트' />
      {isLoading && <Loading />}
      {products && <Products products={products} />}
    </>
  );
}
