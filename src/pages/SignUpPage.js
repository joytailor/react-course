import React, { Component } from 'react';
import SignUpForm from '../components/modules/auth/SignUpForm';

export default class SignUpPage extends Component {
  render() {
    return (
      <div>
        <h1 style={{ textAlign: 'center', fontWeight: 500 }}>
          Create your acccount for free
        </h1>
        <SignUpForm />
      </div>
    );
  }
}
