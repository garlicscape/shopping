import React from 'react';
import { useLocation } from 'react-router-dom';
import ReactiveButton from 'reactive-button';
import { AiFillTag } from 'react-icons/ai';

export default function ProductDetail() {
  const {
    state: {
      product: { title, image, price, size, description, color },
    },
  } = useLocation();
  return (
    <section className='mt-10 flex'>
      <div className='basis-7/12 '>
        <img src={image} alt={title} className='h-2/3 m-auto' />
      </div>
      <div className='basis-5/12 flex flex-col pr-8 mt-5 '>
        <h2 className='text-3xl font-bold'>{title}</h2>
        <p className='flex items-center border-b-2 text-sm py-4 text-gray-600'>
          <AiFillTag className='mr-1' /> {description}
        </p>
        <p className='font-bold text-2xl border-b-2 py-7'>₩{price}</p>
        <div className='flex items-center my-2 mt-9 px-1'>
          <label htmlFor='color' className='text-lg'>
            COLOR{' '}
          </label>
          <select
            id='color'
            className='w-full h-10 ml-10 pl-1 outline outline-1 rounded-sm'
            required
          >
            <option value='' disabled selected>
              -[필수] COLOR 선택-
            </option>
            {color &&
              color.map((color, index) => <option key={index}>{color}</option>)}
          </select>
        </div>
        <div className='flex items-center my-2 mb-8 px-1'>
          <label htmlFor='size' className='text-lg mr-1.5'>
            SIZE
          </label>
          <select
            name='[size]'
            id='size'
            className='w-full h-10 ml-14 pl-1 outline outline-1 rounded-sm'
            required
          >
            <option value='' disabled selected>
              -[필수] SIZE 선택-
            </option>
            {size &&
              size.map((size, index) => <option key={index}>{size}</option>)}
          </select>
        </div>
        <ReactiveButton
          idleText='장바구니에 추가'
          color='blue'
          style={{
            fontSize: '16px',
            fontWeight: 'bold',
            borderRadius: '2px',
            padding: '9px 0',
          }}
        />
      </div>
    </section>
  );
}
