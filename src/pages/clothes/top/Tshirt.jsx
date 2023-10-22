import React from 'react';
import useProducts from '../../../hook/useProducts';
import Loading from '../../../components/ui/Loading';
import SubmenusInPage from '../../../components/SubmenusInPage';
import Products from '../../../components/Products';

export default function Tshirt() {
  const {
    productsQuery: { isLoading, error, data: products },
  } = useProducts('상의', '티셔츠');

  return (
    <>
      {error && <p>{error}</p>}
      <SubmenusInPage menuName='상의' clickedsubMenu='티셔츠' />
      {isLoading && <Loading />}
      {products && <Products products={products} />}
    </>
  );
}
