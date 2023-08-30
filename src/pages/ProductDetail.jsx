import React from 'react';
import { useLocation } from 'react-router-dom';

export default function ProductDetail() {
  const {
    state: {
      product: { title, image, price, size, description, color },
    },
  } = useLocation();
  return (
    <section>
      <div>
        <img src={image} alt={title} />
      </div>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>₩{price}</p>
        <div>
          <label htmlFor='color'>Color: </label>
          <select id='color'>
            {color &&
              color.map((color, index) => <option key={index}>{color}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor='size'>Size: </label>
          <select id='size'>
            {size &&
              size.map((size, index) => <option key={index}>{size}</option>)}
          </select>
        </div>
      </div>
    </section>
  );
}
