import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  return (
    <div className="header">
      <nav className="header-nav">
        <NavLink exact activeClassName="active-link" className="header-link__home" to="/">
          Home
        </NavLink>
        <NavLink
          activeClassName="active-link"
          className="header-link__about header-item__about"
          to="/about"
        >
          About
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
