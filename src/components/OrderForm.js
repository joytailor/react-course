import React, { Component } from 'react';

export default class OrderForm extends Component {
  state = {
    id: '',
    date: '',
    price: '',
    address: '',
    rating: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { id, date, price, address, rating } = this.state;
    this.props.handleAddMenuItem({ id, date, price, address, rating });
    this.props.onSubmit({
      id: '',
      date: '',
      price: '',
      address: '',
      rating: '',
    });

    this.setState({ id: '', date: '', price: '', address: '', rating: '' });
  };

  render() {
    const { id, date, price, address, rating } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="id"
          value={id}
          onChange={this.handleChange}
          autoComplete="off"
        />
        <input
          type="text"
          name="date"
          value={date}
          onChange={this.handleChange}
          autoComplete="off"
        />
        <input
          type="text"
          name="price"
          value={price}
          onChange={this.handleChange}
          autoComplete="off"
        />
        <input
          type="text"
          name="address"
          value={address}
          onChange={this.handleChange}
          autoComplete="off"
        />
        <input
          type="text"
          name="rating"
          value={rating}
          onChange={this.handleChange}
          autoComplete="off"
        />
        <button type="button">Добавить заметку</button>
      </form>
    );
  }
}
