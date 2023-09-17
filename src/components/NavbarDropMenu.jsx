import React from 'react';

export default function NavbarDropMenu({ dropMenus }) {
  return (
    <ul
      className={`hidden py-2 sm:absolute z-10 w-28 bg-white bg-opacity-90 text-base top-full left-1/2 -translate-x-1/2 rounded-b-sm animate-appear-menu`}
    >
      {dropMenus.map((menu) => (
        <li className='my-1 cursor-pointer text-black hover:text-sky-900 hover:font-bold '>
          {menu}
        </li>
      ))}
    </ul>
  );
}
