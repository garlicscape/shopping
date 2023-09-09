import React from 'react';
import { TfiClose } from 'react-icons/tfi';
import { removeItemInCart, updateCartItem } from '../api/firebase';
import { useAuthContext } from './context/AuthContext';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

export default function CartItem({
  product,
  product: { id, title, image, price, size, color, quantity },
}) {
  const { user } = useAuthContext();

  const handleClick = () => {
    removeItemInCart(user.uid, id);
  };

  const handleMinus = () => {
    if (quantity < 2) return;
    updateCartItem(user.uid, id, product, quantity - 1);
  };

  const handlePlus = () => {
    updateCartItem(user.uid, id, product, quantity + 1);
  };
  return (
    <>
      <li className='flex'>
        <img className='w-60' src={image} alt={title} />
        <div>
          <h2>{title}</h2>
          <p>{price * quantity}</p>
          <p>{color}</p>
          <p>{size}</p>
          <div className='flex'>
            <AiOutlineMinus onClick={handleMinus} className='cursor-pointer' />
            {quantity}
            <AiOutlinePlus onClick={handlePlus} className='cursor-pointer' />
          </div>
          <p>{quantity}</p>
          <TfiClose onClick={handleClick} className='cursor-pointer' />
        </div>
      </li>
    </>
  );
}
