import React from 'react';
import { TfiClose } from 'react-icons/tfi';
import { removeItemInCart } from '../api/firebase';
import { useAuthContext } from './context/AuthContext';

export default function CartItem({
  product: { id, title, image, price, size, color, quantity },
}) {
  const { user } = useAuthContext();

  const handleClick = () => {
    removeItemInCart(user.uid, id);
  };
  return (
    <>
      <li className='flex'>
        <img className='w-60' src={image} alt={title} />
        <div>
          <h2>{title}</h2>
          <p>{price}</p>
          <p>{color}</p>
          <p>{size}</p>
          <p>{quantity}</p>
          <TfiClose onClick={handleClick} className='cursor-pointer' />
        </div>
      </li>
    </>
  );
}
