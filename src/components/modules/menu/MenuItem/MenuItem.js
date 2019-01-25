import React from 'react';

const MenuItem = ({
  id,
  name,
  description,
  image,
  price,
  ingredients,
  onGoBack,
}) => (
  <article key={id}>
    <button type="button" onClick={onGoBack}>
      Вернуться к меню
    </button>
    <div>
      <img src={image} alt={name} width="300px" height="300px" />
      <h1>{name}</h1>
      <p>Цена:{price} денег</p>
      <p>{description}</p>
    </div>
    <ul>
      {ingredients.map(item => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </article>
);

export default MenuItem;
