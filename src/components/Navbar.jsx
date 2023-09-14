import React from 'react';
import { Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';

export default function Navbar() {
  return (
    <div className='flex justify-between items-center border-b-2'>
      <nav className='my-1 text-lg hover:[&>*]:text-gray-600 [&>*]:mr-4 '>
        <Link to='/products'>전체상품</Link>
        <Link to='/products/outer'>아우터</Link>
        <Link to='/products/top'>상의</Link>
        <Link to='/products/pants'>팬츠</Link>
        <Link to='/products/accessory'>액세사리</Link>
        <Link to='/products/bag'>가방</Link>
        <Link to='/products/shoes'>신발</Link>
      </nav>
      <form action=''>
        <input
          type='text'
          placeholder='search..'
          className='outline-none hidden md:inline'
        />
        <button className='text-xl hover:scale-105 transition-all ease-out duration-300'>
          <FiSearch />
        </button>
      </form>
    </div>
  );
}
