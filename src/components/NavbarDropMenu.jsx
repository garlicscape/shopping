import React from 'react';

export default function NavbarDropMenu({ dropMenus }) {
  return (
    <ul
      className={`hidden sm:absolute z-10 w-24 p-4 bg-white text-sm bg-opacity-70 top-full left-1/2 -translate-x-1/2`}
    >
      {dropMenus.map((menu) => (
        <li className='mb-1 cursor-pointer hover:text-sky-500'>{menu}</li>
      ))}
    </ul>
  );
}
