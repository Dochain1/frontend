import React from 'react';
import Link from 'next/link';
import logo from '../../public/logo.png';
import LoginButton from '../LoginButton';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav">
        <img src={logo} size="8" alt="logo" />
        <li>
          <Link href="/">Inicio</Link>
        </li>
        <li>
          <Link href="/cases">Casos</Link>
        </li>
        <LoginButton />
      </ul>
    </nav>
  );
};

export default Navbar;
