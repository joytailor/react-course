import React, { Component } from 'react';

const INITIAL_STATE = {
  email: '',
  password: '',
};
export default class SingInForm extends Component {
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
    const { email, password } = this.state;
    return (
      <form className="sing-in-form">
        <input
          type="email"
          name="email"
          value={email}
          onChange={this.handleChange}
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={this.handleChange}
          placeholder="Password"
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
