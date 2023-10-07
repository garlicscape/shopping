import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import { getSearchedItem } from '../api/firebase';
import ProductCard from '../components/ProductCard';

export default function Search() {
  const { searchText } = useParams();
  const trimedSearchText = searchText.trim();
  const {
    isLoading,
    error,
    data: products,
  } = useQuery(['products'], () => getSearchedItem(trimedSearchText));

  return (
    <>
      {isLoading && <p>loading...</p>}
      {error && <p>{error}</p>}
      <h2 className='my-6 text-2xl font-bold text-center'>
        '{trimedSearchText}' 검색결과
      </h2>
      {!products.length && (
        <p className='text-center'> 검색결과가 없습니다. </p>
      )}
      {products && (
        <ul className='grid grid-cols-2 gap-10 my-6 md:grid-cols-3 xl:grid-cols-4'>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul>
      )}
    </>
  );
}
