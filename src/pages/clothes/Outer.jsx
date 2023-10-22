import React from 'react';
import SubmenusInPage from '../../components/SubmenusInPage';
import useProducts from '../../hook/useProducts';
import Loading from '../../components/ui/Loading';
import Products from '../../components/Products';

export default function Outer() {
  const {
    productsQuery: { isLoading, error, data: products },
  } = useProducts('아우터', '');

  return (
    <>
      {error && <p>{error}</p>}
      <SubmenusInPage menuName='아우터' />
      {isLoading && <Loading />}
      {products && <Products products={products} />}
    </>
  );
}
