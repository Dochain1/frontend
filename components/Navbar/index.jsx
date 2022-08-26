import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='navbar' >
      <ul className='nav'>
        <li>
          <Link href="/">Inicio</Link>
        </li>
        <li>
          <Link href="/cases">Casos</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
