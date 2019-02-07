import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import routes from '../configs/routes';

import AppHeader from './AppHeader';
import MenuPage from '../pages/MenuPage';
import MenuItemPage from '../pages/MenuItemPage';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import DeliveryPage from '../pages/DeliveryPage';
import AccountPage from '../pages/AccountPage';
import OrderHistoryPage from '../pages/OrderHistoryPage';
import MealPlannerPage from '../pages/MealPlannerPage';
import Cart from './modules/cart';
import SignInPage from '../pages/SignInPage';
import SignUpPage from '../pages/SignUpPage';
import ProtectedRoute from './ProtectedRoute';

import * as sessionOperations from './features/session/sessionOperations';

class App extends Component {
  render() {
    return (
      <div>
        <AppHeader />
        <Switch>
          <Route exact path={routes.MENU} component={MenuPage} />
          <Route path={routes.MENU_ITEM} component={MenuItemPage} />
          <Route path={routes.ABOUT} component={AboutPage} />
          <Route path={routes.CONTACT} component={ContactPage} />
          <Route path={routes.DELIVERY} component={DeliveryPage} />
          <ProtectedRoute
            path={routes.ACCOUNT}
            redirectTo={routes.SIGN_IN}
            component={AccountPage}
          />
          <ProtectedRoute
            path={routes.ORDER_HISTORY}
            redirectTo={routes.SIGN_IN}
            component={OrderHistoryPage}
          />
          <ProtectedRoute
            path={routes.PLANNER}
            redirectTo={routes.SIGN_IN}
            component={MealPlannerPage}
          />
          <ProtectedRoute
            redirectTo={routes.SIGN_IN}
            path={routes.CART}
            component={Cart}
          />
          <Route path={routes.SIGN_IN} component={SignInPage} />
          <Route path={routes.SIGN_UP} component={SignUpPage} />
          <Redirect to="/about" />
        </Switch>
      </div>
    );
  }
}

export default connect(
  null,
  { refreshCurrentUser: sessionOperations.refreshCurrentUser },
)(App);
