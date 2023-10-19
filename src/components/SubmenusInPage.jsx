import React from 'react';
import { Link } from 'react-router-dom';
import { loadSomeDropmenu } from '../api/menu';

export default function SubmenusInPage({ menuName, clickedsubMenu }) {
  const dropMenus = loadSomeDropmenu(menuName);
  return (
    <>
      <h2 className='my-8 text-2xl font-bold text-center'>{menuName}</h2>
      <div className='flex justify-center'>
        {dropMenus.map((menu) => (
          <Link
            key={menu.name}
            to={menu.address}
            className={`mx-7 cursor-pointer ${
              menu.name === clickedsubMenu
                ? 'relative before:absolute before:w-full before:-bottom-1 before:h-1 before:bg-sky-600 font-bold'
                : 'hover:text-gray-500'
            }`}
          >
            {menu.name}
          </Link>
        ))}
      </div>
    </>
  );
}
