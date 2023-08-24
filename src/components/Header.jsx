import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoIosBasket } from 'react-icons/io';
import { BsCart } from 'react-icons/bs';
import { login, logout, onUserStateChange } from '../api/firebase';
import UserAvatar from './UserAvatar';
import { BiPencil } from 'react-icons/bi';

export default function Header() {
  const [user, setUser] = useState();

  const handleLogin = () => {
    login().then(setUser);
  };
  const handleLogout = () => {
    logout().then(setUser);
  };

  useEffect(() => {
    onUserStateChange((user) => {
      setUser(user);
      console.log(user);
    });
  }, []);

  return (
    <header className='my-2 flex '>
      <Link to='/' className='flex items-center m-auto'>
        <IoIosBasket className='text-sky-950 text-5xl mr-1' />
        <h3 className='text-sky-900 text-4xl font-bold'>SHOP</h3>
        <h3 className='text-sky-600 text-4xl font-bold'>US</h3>
      </Link>
      <nav className='flex items-center gap-3 font-bold'>
        {user && <UserAvatar user={user} />}
        {user && (
          <Link to='/cart' className='text-2xl'>
            <BsCart />
          </Link>
        )}
        {user && (
          <Link to='/products/new' className='text-2xl'>
            <BiPencil />
          </Link>
        )}
        {!user && (
          <button className='text-xl' onClick={handleLogin}>
            Login
          </button>
        )}
        {user && (
          <button className='text-xl' onClick={handleLogout}>
            Logout
          </button>
        )}
      </nav>
    </header>
  );
}
