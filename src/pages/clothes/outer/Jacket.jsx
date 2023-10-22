import React from 'react';
import useProducts from '../../../hook/useProducts';
import Loading from '../../../components/ui/Loading';
import SubmenusInPage from '../../../components/SubmenusInPage';
import Products from '../../../components/Products';

export default function Jacket() {
  const {
    productsQuery: { isLoading, error, data: products },
  } = useProducts('아우터', '자켓');

  return (
    <>
      {error && <p>{error}</p>}
      <SubmenusInPage menuName='아우터' clickedsubMenu='자켓' />
      {isLoading && <Loading />}
      {products && <Products products={products} />}
    </>
  );
}
