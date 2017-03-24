import React from 'react';
import { Link } from 'react-router-dom';

const Nav = (props) => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link replace to="/contact">Contact</Link>
  </nav>
)

export default Nav;
