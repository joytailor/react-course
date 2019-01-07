import React, { Component } from 'react';
import * as API from '../services/menu/api';

export default class PostNewMenuItemPage extends Component {
  state = {
    id: '',
    name: '',
    description: '',
    image: '',
    category: '',
    price: '',
    ingridients: [],
    newIngridient: '',
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addNewIngridient = e => {
    e.preventDefault();
    const { newIngridient } = this.state;
    if (newIngridient === null || newIngridient === '') return;
    this.setState(state => ({
      ingridients: [...state.ingridients, state.newIngridient],
    }));
    this.setState({ newIngridient: '' });
  };

  deleteIngridient = ingridient => {
    this.setState(state => ({
      ingridients: state.ingridients.filter(item => item !== ingridient),
    }));
  };

  handleSubmit = e => {
    console.log(this.state);
    e.preventDefault();
    this.setState({ id: `${Math.random()}` });
    const { id } = this.state;
    console.log(id);
    const newPost = this.state;
    API.addMenuItem(JSON.stringify(newPost));
    this.setState({
      id: '',
      name: '',
      description: '',
      image: '',
      category: '',
      price: '',
      ingridients: [],
      newIngridient: '',
    });
    console.log(this.state);
  };

  render() {
    const {
      name,
      description,
      image,
      category,
      price,
      ingridients,
      newIngridient,
    } = this.state;
    return (
      <div>
        <form name="newItem">
          <input
            type="text"
            name="name"
            placeholder="Enter item's name..."
            value={name}
            onChange={this.handleChange}
          />
          <textarea
            name="description"
            placeholder="Enter item's description..."
            value={description}
            onChange={this.handleChange}
          />
          <input
            name="image"
            placeholder="Enter item's image url"
            value={image}
            onChange={this.handleChange}
          />
          <select name="category" value={category} onChange={this.handleChange}>
            <option value="" disabled>
              ...
            </option>
            <option value="soup">Soup</option>
            <option value="dessert">Dessert</option>
            <option value="salad">Salad</option>
            <option value="main course">Main course</option>
          </select>
          <input
            name="newIngridient"
            placeholder="Enter ingridient's name"
            onChange={this.handleChange}
            value={newIngridient}
          />
          <button type="button" onClick={this.addNewIngridient}>
            Добавить ингридиент
          </button>
          <ul>
            {ingridients.map(item => (
              <li key={item}>
                {item}
                <button
                  type="button"
                  onClick={() => this.deleteIngridient(item)}
                >
                  Удалить
                </button>
              </li>
            ))}
          </ul>
          <input
            name="price"
            placeholder="Enter item's price"
            value={price}
            onChange={this.handleChange}
          />
          <button type="button" onClick={this.handleSubmit}>
            Post
          </button>
        </form>
      </div>
    );
  }
}
