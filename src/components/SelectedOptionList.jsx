import React from 'react';

export default function SelectedOptionList({ options, title, price }) {
  const { color, size } = options;
  return (
    <li className='p-3 border-b-2 border-gray-300'>
      <h3 className='mb-1 text-lg font-bold'>{title}</h3>
      <span className='text-lg'>{`- ${color} [${size}]`}</span>
    </li>
  );
}
