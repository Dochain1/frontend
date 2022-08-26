import React from 'react';
import Link from 'next/link';
import logo from '../../public/logo.png';

const Navbar = () => {
  return (
    <nav className='navbar' >
      <ul className='nav'>
        <img src={logo} size='8' alt='logo' />
        <li>
          <Link href="/">Inicio</Link>
        </li>
        <li>
          <Link href="/cases">Casos</Link>
        </li>
      <button className='wallet-connect'>
        Conectar wallet
      </button>
       </ul>
    </nav>
  );
};

export default Navbar;
