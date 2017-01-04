import React from 'react';
import { Link } from 'react-router';

const Navbar = () => (
  <div className="navbar">
    <ul>
      <li>
        <Link to="/">App</Link>
      </li>
      <li>
        <Link to="/a">A</Link>
      </li>
      <li>
        <Link to="/b">B</Link>
      </li>
    </ul>
    <hr />
  </div>
);
export default Navbar;
