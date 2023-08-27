import React from 'react';

export default function ProductCard({ product: { id, image, title, price } }) {
  return (
    <li>
      <img src={image} alt={title} />
      <div>
        <h3>{title}</h3>
        <span>{`₩${price}`}</span>
      </div>
    </li>
  );
}
