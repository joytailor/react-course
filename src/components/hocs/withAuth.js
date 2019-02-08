import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as selectors from '../features/session/sessionSelectors';

const withAuth = WrappedComponent => {
  class withAuth extends Component {
    componentDidUpdate() {
      if (this.props.isAuthenticated) {
        const { from } = this.props.location.state || {
          from: { pathname: '/' },
        };

        this.props.history.push(from);
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
  const MapStateToProps = state => ({
    isAuthenticated: selectors.isAuthenticated(state),
  });
  return connect(MapStateToProps)(withAuth);
};

export default withAuth;
