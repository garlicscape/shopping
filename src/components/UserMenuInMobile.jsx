import React from 'react';

export default function UserMenuInMobile({
  menuName,
  highlighterHeight,
  highlighterTop,
}) {
  return (
    <>
      <p className='ml-1 z-10 text-sm inline sm:hidden '>{menuName}</p>
      <span
        className={`inline absolute ${highlighterHeight} ${highlighterTop} w-0 left-0 rounded-b-sm
                    bg-slate-100 transition-all duration-300 group-hover:w-full 
                    sm:hidden`}
      ></span>
    </>
  );
}
