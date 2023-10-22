import React from 'react';
import useProducts from '../../../hook/useProducts';
import Loading from '../../../components/ui/Loading';
import SubmenusInPage from '../../../components/SubmenusInPage';
import Products from '../../../components/Products';

export default function Coat() {
  const {
    productsQuery: { isLoading, error, data: products },
  } = useProducts('아우터', '코트');

  return (
    <>
      {error && <p>{error}</p>}
      <SubmenusInPage menuName='아우터' clickedsubMenu='코트' />
      {isLoading && <Loading />}
      {products && <Products products={products} />}
    </>
  );
}
