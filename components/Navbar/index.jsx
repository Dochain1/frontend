import React from 'react';
import Link from 'next/link';
import logo from '../../public/images/logo.png';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className='text-black text-2xl' >
      <ul className='nav'>
        <Image src={logo} style={{height: '10px', width: '10px'}}  alt='logo' />
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
