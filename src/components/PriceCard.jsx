import React from 'react';

export default function PriceCard({ text, price }) {
  return (
    <div>
      <p className='mb-1 text-xl'>{text}</p>
      <p className='text-2xl font-bold'>{`₩${price}`}</p>
    </div>
  );
}
