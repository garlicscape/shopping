import React from 'react';
import { Link } from 'react-router-dom';

export default function NavbarDropMenu({ dropMenus }) {
  return (
    <div className='hidden py-2 sm:absolute z-10 w-28 bg-white bg-opacity-90 text-base top-full left-1/2 -translate-x-1/2 rounded-b-sm animate-appear-menu'>
      {dropMenus.map((menu, index) => (
        <Link
          to={menu.address}
          key={index}
          className='my-1 cursor-pointer text-black hover:text-sky-900 hover:font-bold flex flex-col'
        >
          {menu.name}
        </Link>
      ))}
    </div>
  );
}
