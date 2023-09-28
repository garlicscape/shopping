import React from 'react';

export default function UserAvatar({ user: { photoURL, displayName } }) {
  return (
    <div className='flex items-center'>
      <img src={photoURL} alt='avatar' className='w-8 rounded-full' />
      <span className='hidden text-sm mx-1 font-normal sm:inline'>
        {displayName}
      </span>
    </div>
  );
}
