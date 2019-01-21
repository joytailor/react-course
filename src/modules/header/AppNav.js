import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../configs/routes';

const AppNav = () => (
  <ul className="nav">
    <li>
      <NavLink to={routes.MENU}>Menu</NavLink>
    </li>
    <li>
      <NavLink exact to={routes.ABOUT}>
        About
      </NavLink>
    </li>
    <li>
      <NavLink exact to={routes.CONTACT}>
        Contact
      </NavLink>
    </li>
    <li>
      <NavLink exact to={routes.DELIVERY}>
        Delivery
      </NavLink>
    </li>
  </ul>
);

export default AppNav;
