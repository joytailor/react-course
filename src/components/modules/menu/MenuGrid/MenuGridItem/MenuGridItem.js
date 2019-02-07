import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import slug from 'slug';

const MenuGridItem = ({
  id,
  name,
  image,
  price,
  match,
  location,
  addItemToCart,
}) => (
  <div>
    <Link
      to={{
        pathname: `${match.url}/${slug(name)}/${id}`,
        state: { from: location },
      }}
    >
      <img src={image} alt={name} width={320} height={240} />
      <p>{name}</p>
      <p>Цена: {price}</p>
    </Link>
    <button type="button" onClick={() => addItemToCart(id)}>
      Добавить в корзину
    </button>
  </div>
);

export default withRouter(MenuGridItem);
