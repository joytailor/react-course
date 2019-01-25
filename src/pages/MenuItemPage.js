import React, { Component } from 'react';
import * as API from '../services/menu/api';
import MenuItem from '../components/modules/menu/MenuItem';

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
      <MenuItem
        id={id}
        name={name}
        description={description}
        image={image}
        price={price}
        ingredients={ingredients}
        onGoBack={() => this.handleGoBack()}
      />
    );
  }
}
