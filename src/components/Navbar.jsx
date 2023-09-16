import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import NavbarDropMenu from './NavbarDropMenu';
import { BiMenu } from 'react-icons/bi';

export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  const navbarInfo = [
    { address: '/products', menu: '전체상품' },
    {
      address: '/products/outer',
      menu: '아우터',
      dropMenus: ['자켓', '코트', '가디건'],
    },
    {
      address: '/products/top',
      menu: '상의',
      dropMenus: ['반팔', '후드티', '티셔츠', '니트'],
    },
    {
      address: '/products/pants',
      menu: '팬츠',
      dropMenus: ['청바지', '반바지', '슬랙스'],
    },
    {
      address: '/products/accessory',
      menu: '액세사리',
      dropMenus: ['모자', '벨트', '안경'],
    },
    { address: '/products/bag', menu: '가방' },
    { address: '/products/shoes', menu: '신발' },
  ];

  return (
    <>
      <div className='max-[639px]:relative flex justify-between border-b-2 sm:items-center'>
        <BiMenu
          className='sm:hidden text-2xl cursor-pointer'
          onClick={() => setToggle(!toggle)}
        />
        <nav
          className={` bg-white w-full max-[639px]:absolute max-[639px]:top-4 max-[639px]:z-10
                     my-1 text-lg ${toggle ? ' block' : 'hidden'}
                     sm:flex`}
        >
          {navbarInfo.map((navbar) => (
            <div
              className={`text-center sm:block sm:[&>ul]:hover:block sm:mr-5 sm:relative`}
            >
              <Link
                to={navbar.address}
                className='hover:text-gray-400'
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
          <button className='text-xl hover:scale-105 transition-all ease-out duration-300'>
            <FiSearch />
          </button>
        </form>
      </div>
    </>
  );
}
