import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  //   const [isActive, setIsActive] = useState<boolean>(false);
  //   const btnHome = document.querySelector('.header-item__home');
  //   const btnAbout = document.querySelector('.header-item__about');
  //   btnHome?.classList.add('active-link');

  //   btnAbout?.addEventListener('click', () => {
  //     btnHome?.classList.remove('active-link');
  //     btnAbout?.classList.add('active-link');
  //   });

  //   const addActiveHome = () => {
  //     btnHome?.classList.add('active-link');
  //     btnAbout?.classList.remove('active-link');
  //   };
  //   const addActiveAbout = () => {
  //     btnHome?.classList.remove('active-link');
  //     btnAbout?.classList.add('active-link');
  //   };
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
