import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as selectors from '../components/features/session/sessionSelectors';
import SignInForm from '../components/modules/auth/SignInForm';

class SignInPage extends Component {
  componentDidUpdate() {
    if (this.props.isAuthenticated) {
      const { from } = this.props.location.state || { from: { pathname: '/' } };

      this.props.history.push(from);
    }
  }

  render() {
    return (
      <div>
        <h1 style={{ textAlign: 'center', fontWeight: 500 }}>
          Please enter your credentials
        </h1>
        <SignInForm />
      </div>
    );
  }
}

export default connect(state => ({
  isAuthenticated: selectors.isAuthenticated(state),
}))(SignInPage);
