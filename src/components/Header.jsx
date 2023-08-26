import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosBasket } from 'react-icons/io';
import { BsCart } from 'react-icons/bs';
import UserAvatar from './UserAvatar';
import { BiPencil } from 'react-icons/bi';
import Button from '../components/ui/Button';
import { useAuthContext } from './context/AuthContext';

export default function Header() {
  const { user, login, logout } = useAuthContext();

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
        {user && user.isAdmin && (
          <Link to='/products/new' className='text-2xl'>
            <BiPencil />
          </Link>
        )}
        {!user && <Button text='Login' onClick={login} />}
        {user && <Button text='Logout' onClick={logout} />}
      </nav>
    </header>
  );
}
