import React from 'react';
import MenuGridItem from './MenuGridItem';

const MenuGrid = ({ items }) => (
  <ul>
    {items &&
      items.map(item => (
        <li key={item.id}>
          <MenuGridItem
            id={item.id}
            name={item.name}
            price={item.price}
            image={item.image}
          />
        </li>
      ))}
  </ul>
);

export default MenuGrid;
