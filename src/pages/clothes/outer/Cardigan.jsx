import React from 'react';
import useProducts from '../../../hook/useProducts';
import Loading from '../../../components/ui/Loading';
import SubmenusInPage from '../../../components/SubmenusInPage';
import Products from '../../../components/Products';

export default function Cardigan() {
  const {
    productsQuery: { isLoading, error, data: products },
  } = useProducts('아우터', '가디건');

  return (
    <>
      {error && <p>{error}</p>}
      <SubmenusInPage menuName='아우터' clickedsubMenu='가디건' />
      {isLoading && <Loading />}
      {products && <Products products={products} />}
    </>
  );
}
