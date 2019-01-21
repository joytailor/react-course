import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
  <ul>
    <li>
      <NavLink to="/main">Главная</NavLink>
    </li>
    <li>
      <NavLink exact to="/menu">
        Меню
      </NavLink>
    </li>
  </ul>
);

export default Nav;
