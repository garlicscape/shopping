import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoIosBasket } from 'react-icons/io';
import { BsCart } from 'react-icons/bs';
import UserAvatar from './UserAvatar';
import { BiPencil } from 'react-icons/bi';
import Button from '../components/ui/Button';
import { useAuthContext } from './context/AuthContext';
import { RiArrowDownSLine } from 'react-icons/ri';

export default function Header() {
  const { user, login, logout } = useAuthContext();
  const [toggle, setToggle] = useState(false);

  return (
    <header className='my-6 flex max-[767px]:justify-between'>
      <Link to='/' className='flex items-center text-4xl md:m-auto sm:text-5xl'>
        <IoIosBasket className='text-sky-950 mr-1 ' />
        <h3 className='text-sky-900 font-bold'>SHOP</h3>
        <h3 className='text-sky-600 font-bold'>US</h3>
      </Link>
      <nav className='flex items-center font-bold gap-2 max-[639px]:relative md:gap-3'>
        {user && <UserAvatar user={user} />}
        {user && (
          <RiArrowDownSLine
            className='text-xl cursor-pointer sm:hidden'
            onClick={() => setToggle(!toggle)}
          />
        )}
        <div
          className={`${
            toggle
              ? 'block absolute top-11 right-24 z-10 rounded-b-md bg-slate-200'
              : 'hidden'
          } sm:flex sm:gap-2 md:gap-3`}
        >
          {user && (
            <Link
              to='/carts'
              className='text-lg
               sm:text-2xl
               max-[639px]:px-3 max-[639px]:pt-4 max-[639px]:flex'
            >
              <BsCart />
              <p className='ml-1 text-sm inline sm:hidden'>장바구니</p>
            </Link>
          )}
          {user && user.isAdmin && (
            <Link
              to='/products/new'
              className='text-lg 
              sm:text-2xl 
              max-[639px]:px-3 max-[639px]:py-3 max-[639px]:flex'
            >
              <BiPencil />
              <p className='ml-1 text-sm inline sm:hidden'>상품등록</p>
            </Link>
          )}
        </div>
        {!user && <Button text='Login' onClick={login} />}
        {user && <Button text='Logout' onClick={logout} />}
      </nav>
    </header>
  );
}
