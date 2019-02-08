import React, { Component } from 'react';
import SignUpForm from '../components/modules/auth/SignUpForm';
import ErrorNotification from '../components/ErrorNotification';
import WithAuth from '../components/hocs/withAuth';

class SignUpPage extends Component {
  render() {
    return (
      <div>
        <h1 style={{ textAlign: 'center', fontWeight: 500 }}>
          Create your acccount for free
        </h1>
        <SignUpForm />
        {this.props.error && (
          <ErrorNotification err="Возникла ошибка при попытке регистрации, пожалуйста попробуйте снова" />
        )}
      </div>
    );
  }
}

export default WithAuth(SignUpPage);
