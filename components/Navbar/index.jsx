import React from 'react';
import Link from 'next/link';
const Navbar = () => {
  return (
    <nav>
      <ul>
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
