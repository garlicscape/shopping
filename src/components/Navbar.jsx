import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import NavbarDropMenu from './NavbarDropMenu';
import { BiMenu } from 'react-icons/bi';
import { loadAllMenus } from '../api/menu';

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [slideToggle, setSlideToggle] = useState(false);
  const navbarInfo = loadAllMenus();

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
    <>
      <div className='max-[639px]:relative flex justify-between border-b-2 sm:items-center'>
        <BiMenu
          className='sm:hidden text-4xl cursor-pointer 
          hover:scale-x-110 transition-transform'
          onClick={() => setToggle(!toggle)}
        />
        <nav
          className={`bg-white w-full py-1 text-lg sm:flex
                    max-[639px]:absolute max-[639px]:top-7 max-[639px]:z-10
                    ${slideToggle ? 'block' : 'hidden'}               
                    ${toggle ? 'animate-slide-down' : 'animate-slide-up'}`}
        >
          {navbarInfo.map((navbar) => (
            <div
              className='text-center py-1
            max-[639px]:hover:text-amber-500 max-[639px]:hover:scale-105
              sm:block sm:[&>div]:hover:block sm:mr-5 sm:relative
              sm:before:w-full sm:before:h-1 sm:before:bg-sky-600 
              sm:before:duration-300 
              sm:before:absolute sm:before:bottom-0
              sm:before:scale-x-0 sm:before:origin-center 
              sm:hover:before:scale-x-100 sm:hover:before:origin-center
              transition-transform '
            >
              <Link
                to={navbar.address}
                className='font-bold'
                onClick={() => setToggle(false)}
              >
                {navbar.menu}
              </Link>
              {navbar.dropMenus && (
                <NavbarDropMenu dropMenus={navbar.dropMenus} />
              )}
            </div>
          ))}
        </nav>
        <form action=''>
          <button className='text-3xl sm:text-2xl hover:scale-105 transition-all ease-out duration-300'>
            <FiSearch />
          </button>
        </form>
      </div>
    </>
  );
}
