import React from 'react';
import { Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';

export default function Navbar() {
  return (
    <div className='text-xl flex justify-between border-b-2'>
      <nav className='my-1'>
        <Link to='/products'>Products</Link>
      </nav>
      <form action=''>
        <input type='text' placeholder='search..' className='outline-none' />
        <button>
          <FiSearch />
        </button>
      </form>
    </div>
  );
}
