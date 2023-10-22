import React from 'react';
import useProducts from '../../../hook/useProducts';
import Loading from '../../../components/ui/Loading';
import SubmenusInPage from '../../../components/SubmenusInPage';
import Products from '../../../components/Products';

export default function Shorts() {
  const {
    productsQuery: { isLoading, error, data: products },
  } = useProducts('바지', '반바지');

  return (
    <>
      {error && <p>{error}</p>}
      <SubmenusInPage menuName='팬츠' clickedsubMenu='반바지' />
      {isLoading && <Loading />}
      {products && <Products products={products} />}
    </>
  );
}
