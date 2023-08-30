import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProductCard({
  product,
  product: { id, image, title, description, price },
}) {
  const navigate = useNavigate();

  return (
    <li
      className='cursor-pointer'
      onClick={() => navigate(`/products/${id}`, { state: { product } })}
    >
      <img src={image} alt={title} className='rounded-sm hover:opacity-70' />
      <div className='mt-2'>
        <h3 className='text-lg font-bold'>{title}</h3>
        <span className='text-lg'>{`₩${price}`}</span>
        <div className='text-sm text-gray-500'>{description}</div>
      </div>
    </li>
  );
}
