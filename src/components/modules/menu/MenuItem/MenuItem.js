import React from 'react';

const MenuItem = ({ item, onGoBack }) => (
  <article key={item.id}>
    <button type="button" onClick={onGoBack}>
      Вернуться к меню
    </button>
    <div>
      <img src={item.image} alt={item.name} width="300px" height="300px" />
      <h1>{item.name}</h1>
      <p>Цена:{item.price} денег</p>
      <p>{item.description}</p>
    </div>
    <ul>
      {item.ingredients &&
        item.ingredients.map(ingridient => (
          <li key={ingridient}>{ingridient}</li>
        ))}
    </ul>
  </article>
);

export default MenuItem;
