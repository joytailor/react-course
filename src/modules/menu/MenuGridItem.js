import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import slug from 'slug';

const MenuGridItem = ({ id, name, image, price, match, location }) => (
  <Link
    to={{
      pathname: `${match.path}/${slug(name)}/${id}`,
      state: { from: location },
    }}
  >
    <div>
      <img src={image} alt={name} width={320} height={240} />
      <p>{name}</p>
      <p>Цена: {price}</p>
    </div>
  </Link>
);

export default withRouter(MenuGridItem);
