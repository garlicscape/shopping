import React from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { TfiClose } from 'react-icons/tfi';

export default function SelectedOptionList({
  list,
  title,
  price,
  onPlus,
  onMinus,
  onDelete,
}) {
  const { options, quantity } = list;

  const handlePlus = () => onPlus(list);
  const handleMinus = () => {
    if (quantity >= 2) onMinus(list);
  };
  const handleDelete = () => onDelete(list);

  return (
    <li className='p-3 border-b-2 border-gray-300 grid grid-cols-10 gap-3 items-center'>
      <div className='col-span-4'>
        <h3 className='mb-1 text-lg font-bold '>{title}</h3>
        <span className='text-lg'>{`- ${options.color} [${options.size}]`}</span>
      </div>
      <div className='flex items-center col-span-3 text-lg '>
        <AiOutlineMinus
          onClick={handleMinus}
          className='cursor-pointer mr-2 bg-sky-600 text-white rounded-sm'
        />
        {quantity}
        <AiOutlinePlus
          onClick={handlePlus}
          className='cursor-pointer ml-2 bg-sky-600 text-white rounded-sm'
        />
      </div>
      <p className='font-bold text-lg col-span-2'>{`₩${price * quantity}`}</p>
      <TfiClose
        onClick={handleDelete}
        className='cursor-pointer col-span-1 place-self-end self-center '
      />
    </li>
  );
}
