import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoIosBasket } from 'react-icons/io';
import { BsCart } from 'react-icons/bs';
import Button from '../components/ui/Button';
import UserAvatar from './UserAvatar';
import { BiPencil } from 'react-icons/bi';
import { useAuthContext } from './context/AuthContext';
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';

export default function Header() {
  const { user, login, logout } = useAuthContext();
  const [toggle, setToggle] = useState(false);
  const [slideToggle, setSlideToggle] = useState(false);

  useEffect(() => {
    if (toggle) {
      setSlideToggle(true);
    } else {
      setTimeout(() => {
        setSlideToggle(false);
      }, 200);
    }
  }, [toggle]);

  return (
    <header className='my-6 flex max-[767px]:justify-between'>
      <Link to='/' className='flex items-center text-4xl md:m-auto sm:text-5xl'>
        <IoIosBasket className='text-sky-950 mr-1 ' />
        <h3 className='text-sky-900 font-bold'>SHOP</h3>
        <h3 className='text-sky-600 font-bold'>US</h3>
      </Link>
      <nav className='flex items-center font-bold gap-2 max-[639px]:relative md:gap-3'>
        {user && <UserAvatar user={user} />}
        {user &&
          (toggle ? (
            <RiArrowUpSLine
              className='text-xl cursor-pointer sm:hidden animate-rotate-half'
              onClick={() => setToggle(!toggle)}
            />
          ) : (
            <RiArrowDownSLine
              className='text-xl cursor-pointer sm:hidden animate-rotate-half'
              onClick={() => setToggle(!toggle)}
            />
          ))}
        <div
          className={`
          ${slideToggle ? 'block' : 'hidden'}               
          ${toggle ? 'animate-slide-down' : 'animate-slide-up'}
          max-[639px]:absolute max-[639px]:top-11 max-[639px]:right-0 max-[639px]:z-10 
          max-[639px]:rounded-b-md max-[639px]:w-28 max-[639px]:h-[7.25rem] max-[639px]:bg-white max-[639px]:shadow-xl max-[639px]:flex-col
          text-lg flex
          sm:text-2xl sm:gap-2 sm:items-center sm:flex
          md:gap-3`}
        >
          {user && (
            <Link
              to='/carts'
              className='max-[639px]:pt-4 group max-[639px]:flex max-[639px]:justify-center max-[639px]:relative'
            >
              <BsCart className='z-10' />
              <p className='ml-1 z-10 text-sm inline sm:hidden'>장바구니</p>
              <span className='inline absolute h-10 top-1 w-0 left-0 bg-slate-100 transition-all duration-300  group-hover:w-full sm:hidden'></span>
            </Link>
          )}
          {user && user.isAdmin && (
            <Link
              to='/products/new'
              className='max-[639px]:py-2 max-[639px]:pt-4 group max-[639px]:flex max-[639px]:justify-center max-[639px]:relative'
            >
              <BiPencil className='z-10' />
              <p className='ml-1 z-10 text-sm inline sm:hidden'>상품등록</p>
              <span className='inline absolute h-9 top-2 w-0 left-0 bg-slate-100 transition-all duration-300 group-hover:w-full sm:hidden'></span>
            </Link>
          )}
          {!user && <Button text='Login' onClick={login} />}
          {user && <Button text='Logout' onClick={logout} />}
        </div>
      </nav>
    </header>
  );
}
