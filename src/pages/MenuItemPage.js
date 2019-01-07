import React, { Component } from 'react';
import * as API from '../services/menu/api';

export default class MenuItemPage extends Component {
  state = {
    id: null,
    name: null,
    description: null,
    image: null,
    price: null,
    category: null,
    ingredients: [],
  };

  componentDidMount() {
    console.log(this.props.match.params.id);
    API.getMenuItemById(this.props.match.params.id).then(item =>
      this.setState({ ...item }),
    );
  }

  handleGoBack = () => {
    const { state } = this.props.location;
    const { category } = this.state;
    console.log(category);

    if (state) {
      this.props.history.push(state.from);
      return;
    }

    this.props.history.push({
      pathname: '/articles',
      search: `?category=${category}`,
    });
  };

  render() {
    const { id, name, description, image, price, ingredients } = this.state;
    return (
      <article key={id}>
        <button type="button" onClick={this.handleGoBack}>
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
  }
}
