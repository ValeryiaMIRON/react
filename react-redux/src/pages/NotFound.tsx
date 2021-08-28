import React from 'react';
import { NavLink } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';
import './NotFound.scss';

const NotFound = () => {
  return (
    <div className="not-found">
      <div>
        <div className="h-404">404</div>
        <div className="eror-oops-title">Oops... you seem to be lost</div>

        <div className="error-subtitle">
          Just do not be discouraged, but there is no such page :(
          <div> We can offer you to return to the main page</div>
        </div>
      </div>
      <div className="not-found-link-home">
        <NavLink className="link-main-page" to="/">
          Back to main page
        </NavLink>
      </div>
    </div>
  );
};

export default NotFound;
