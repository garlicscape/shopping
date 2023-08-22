import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosBasket } from 'react-icons/io';
import { BsCart } from 'react-icons/bs';

export default function Header() {
  return (
    <header className='my-2 flex '>
      <Link to='/' className='flex items-center m-auto'>
        <IoIosBasket className='text-sky-950 text-5xl mr-1' />
        <h3 className='text-sky-900 text-4xl font-bold'>SHOP</h3>
        <h3 className='text-sky-600 text-4xl font-bold'>US</h3>
      </Link>
      <nav className='flex items-center gap-3 font-bold'>
        <Link to='/cart' className='text-2xl'>
          <BsCart />
        </Link>
        <button className='text-xl'>Login</button>
      </nav>
    </header>
  );
}
