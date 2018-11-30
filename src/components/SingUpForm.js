import React, { Component } from 'react';

const INITIAL_STATE = {
  name: '',
  email: '',
  phone: '',
  password: '',
  passwordCheck: '',
};
export default class SingUpForm extends Component {
  state = { ...INITIAL_STATE };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleReset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.handleReset();
  };

  render() {
    const { name, email, phone, password, passwordCheck } = this.state;
    return (
      <form className="sing-in-form">
        <input
          type="text"
          name="name"
          value={name}
          onChange={this.handleChange}
          placeholder="Enter your name"
        />
        <input
          type="email"
          name="email"
          value={email}
          onChange={this.handleChange}
          placeholder="Email"
        />
        <input
          type="text"
          name="phone"
          value={phone}
          onChange={this.handleChange}
          placeholder="Phone number"
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={this.handleChange}
          placeholder="Password"
        />
        <input
          type="password"
          name="password"
          value={passwordCheck}
          onChange={this.handleChange}
          placeholder="Repeat password"
        />
        <button
          className="submit-btn"
          onSubmit={this.handleSubmit}
          type="submit"
        />
      </form>
    );
  }
}
