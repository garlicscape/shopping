import React from 'react';
import Products from '../../components/Products';
import SubmenusInPage from '../../components/SubmenusInPage';
import useProducts from '../../hook/useProducts';
import Loading from '../../components/ui/Loading';

export default function Top() {
  const {
    productsQuery: { isLoading, error, data: products },
  } = useProducts('상의');

  return (
    <>
      {error && <p>{error}</p>}
      <SubmenusInPage menuName='상의' />
      {isLoading && <Loading />}
      {products && <Products products={products} />}
    </>
  );
}
