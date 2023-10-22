import React from 'react';
import CategoriesInMainPage from '../../components/SubmenusInPage';
import useProducts from '../../hook/useProducts';
import Loading from '../../components/ui/Loading';
import Products from '../../components/Products';

export default function Accessory() {
  const {
    productsQuery: { isLoading, error, data: products },
  } = useProducts('액세사리');

  return (
    <>
      {error && <p>{error}</p>}
      <CategoriesInMainPage menuName='액세사리' />
      {isLoading && <Loading />}
      {products && <Products products={products} />}
    </>
  );
}
