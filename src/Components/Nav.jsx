import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className='navbar navbar-expand-lg'>
      <Link className='nav-link' to='/'>
        Home
      </Link>
      <Link className='nav-link' to='/articles'>
        Articles
      </Link>
      <Link className='nav-link' to='/topics'>
        Topics
      </Link>
      <Link className='nav-link' to='/login'>
        Log in
      </Link>
    </nav>
  );
};

export default Nav;
