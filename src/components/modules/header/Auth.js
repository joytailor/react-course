import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as selectors from '../../features/session/sessionSelectors';
import * as operations from '../../features/session/sessionOperations';
import routes from '../../../configs/routes';
import Button from '../../common/Button/Button';

const mapStateToProps = state => ({
  isAuthenticated: selectors.isAuthenticated(state),
});

const mapDispatchToProps = {
  onSignOut: operations.signOut,
};

class Auth extends Component {
  handleSignOut = () => {
    this.props.onSignOut();
    this.props.history.push(routes.SIGN_IN);
  };

  render() {
    return (
      <ul className="auth-tab-list">
        {!this.props.isAuthenticated && (
          <>
            <li>
              <NavLink exact to={routes.SIGN_IN}>
                Sign In
              </NavLink>
            </li>
            <li>
              <NavLink exact to={routes.SIGN_UP}>
                Sign Up
              </NavLink>
            </li>
          </>
        )}

        {this.props.isAuthenticated && (
          <li>
            <Button label="Sign Out" onClick={this.handleSignOut} />
          </li>
        )}
      </ul>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Auth);
