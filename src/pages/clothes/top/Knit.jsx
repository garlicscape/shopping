import React from 'react';
import useProducts from '../../../hook/useProducts';
import Loading from '../../../components/ui/Loading';
import SubmenusInPage from '../../../components/SubmenusInPage';
import Products from '../../../components/Products';

export default function Knit() {
  const {
    productsQuery: { isLoading, error, data: products },
  } = useProducts('상의', '니트');

  return (
    <>
      {error && <p>{error}</p>}
      <SubmenusInPage menuName='상의' clickedsubMenu='니트' />
      {isLoading && <Loading />}
      {products && <Products products={products} />}
    </>
  );
}
