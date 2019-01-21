import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../configs/routes';

const Dropdown = () => (
  <div className="Dropdown">
    <ul className="user-nav">
      <li>
        <NavLink to={routes.ACCOUNT}>Account</NavLink>
      </li>
      <li>
        <NavLink to={routes.ORDER_HISTORY}>Order history</NavLink>
      </li>
      <li>
        <NavLink to={routes.PLANNER}>Meal Planner</NavLink>
      </li>
    </ul>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, neque?
    </p>

    <button type="button">Logout</button>
  </div>
);

export default Dropdown;
