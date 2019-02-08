import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as selectors from '../components/features/session/sessionSelectors';
import SignInForm from '../components/modules/auth/SignInForm';
import ErrorNotification from '../components/ErrorNotification';
import WithAuth from '../components/hocs/withAuth';

const mapStateToProps = state => ({
  isAuthenticated: selectors.isAuthenticated(state),
  error: selectors.getError(state),
});

class SignInPage extends Component {
  render() {
    return (
      <div>
        <h1 style={{ textAlign: 'center', fontWeight: 500 }}>
          Please enter your credentials
        </h1>
        <SignInForm />
        {this.props.error && (
          <ErrorNotification err="Пользоваетель с такими данными не найден, пожалуйста попробуйте снова" />
        )}
      </div>
    );
  }
}

export default connect(mapStateToProps)(WithAuth(SignInPage));
