import React, { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { TfiClose } from 'react-icons/tfi';

export default function SelectedOptionList({ options, title, price }) {
  const { color, size } = options;
  const [quantity, setQuantity] = useState(1);

  const handlePlus = () => {
    setQuantity(quantity + 1);
  };

  const handleMinus = () => {
    if (quantity >= 2) setQuantity(quantity - 1);
  };
  return (
    <li className='p-3 border-b-2 border-gray-300 grid grid-cols-10 gap-3 items-center'>
      <div className='col-span-4'>
        <h3 className='mb-1 text-lg font-bold '>{title}</h3>
        <span className='text-lg'>{`- ${color} [${size}]`}</span>
      </div>
      <div className='flex items-center col-span-3'>
        <AiOutlinePlus
          onClick={handlePlus}
          className='cursor-pointer mr-2 text-lg bg-sky-600 text-white rounded-sm'
        />
        {quantity}
        <AiOutlineMinus
          onClick={handleMinus}
          className='cursor-pointer ml-2 text-lg bg-sky-600 text-white rounded-sm'
        />
      </div>
      <p className='font-bold text-lg col-span-2'>{`₩${price * quantity}`}</p>
      <TfiClose className='cursor-pointer col-span-1 place-self-end self-center ' />
    </li>
  );
}
