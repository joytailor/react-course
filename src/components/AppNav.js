import React from 'react';

const AppNav = ({ items = [] }) => (
  <ul className="nav">
    {items.map(item => (
      <li key={item}>
        <a href="/">{item}</a>
      </li>
    ))}
  </ul>
);

export default AppNav;
