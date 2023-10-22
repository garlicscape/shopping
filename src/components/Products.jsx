import React from 'react';
import ProductCard from './ProductCard';

export default function Products({ products }) {
  return (
    <ul className='grid grid-cols-2 gap-10 my-6 md:grid-cols-3 xl:grid-cols-4'>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ul>
  );
}
