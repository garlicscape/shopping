import React from 'react';
import { Link } from 'react-router-dom';

export default function CategoriesInMainPage({ categories }) {
  return (
    <div className='flex justify-center'>
      {categories.map((category) => (
        <Link to={category.address} className='mx-7 cursor-pointer'>
          {category.name}
        </Link>
      ))}
    </div>
  );
}
