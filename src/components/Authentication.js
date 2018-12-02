import React, { Component } from 'react';
import SingInForm from './SingInForm';
import SingUpForm from './SingUpForm';

const INITIAL_STATE = { isRegistered: true };

export default class Authentication extends Component {
  state = { ...INITIAL_STATE };

  showSingInForm = () => {
    this.setState({ isRegistered: true });
  };

  showSingUpForm = () => {
    this.setState({ isRegistered: false });
  };

  render() {
    const { isRegistered } = this.state;
    return (
      <div className="authentication-form">
        <button className="sing-in" onClick={this.showSingInForm} type="button">
          Sing In
        </button>
        <button className="sing-up" onClick={this.showSingUpForm} type="button">
          Sing Up
        </button>
        {isRegistered ? <SingInForm /> : <SingUpForm />}
      </div>
    );
  }
}
