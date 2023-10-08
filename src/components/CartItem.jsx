import React from 'react';
import { TfiClose } from 'react-icons/tfi';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import useCart from '../hook/useCart';

export default function CartItem({
  product,
  product: { id, title, image, price, size, color, quantity },
}) {
  const { removeProduct, updateProductQuantity } = useCart();

  const handleClick = () => {
    removeProduct.mutate(id);
  };

  const handleMinus = () => {
    if (quantity < 2) return;
    updateProductQuantity.mutate(id, product, quantity - 1);
  };

  const handlePlus = () => {
    updateProductQuantity.mutate(id, product, quantity + 1);
  };
  return (
    <>
      <li className='flex shadow-md'>
        <img className='w-60 rounded-l-md' src={image} alt={title} />
        <div
          className=' grid grid-rows-9 px-3 pb-3 pt-8 w-64 hover:w-72 hover:scale-x-105"
         bg-neutral-50  rounded-r-sm transition-all ease-in-out duration-300
         ml:w-44 ml:hover:w-52'
        >
          <h2 className='text-xl font-bold row-span-4 truncate hover:text-clip'>
            {title}
          </h2>
          <div className='flex flex-col row-span-4 items-center'>
            <p className='text-lg'>{`${color}[${size}]`}</p>
            <div className='mt-2 w-28 flex justify-between items-center border bg-white'>
              <AiOutlineMinus
                onClick={handleMinus}
                className='cursor-pointer mr-1 p-1 w-6 h-full  text-white bg-sky-600 hover:bg-sky-900'
              />
              <p className='text-lg'>{`${quantity}개`}</p>
              <AiOutlinePlus
                onClick={handlePlus}
                className='cursor-pointer ml-1 p-1 w-6 h-full text-white bg-sky-600 hover:bg-sky-900'
              />
            </div>
          </div>
          <p className='text-2xl font-bold self-end'>{`₩${
            price * quantity
          }`}</p>
          <TfiClose
            onClick={handleClick}
            className='cursor-pointer place-self-end text-gray-400 hover:text-gray-700'
          />
        </div>
      </li>
    </>
  );
}
