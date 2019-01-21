import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import routes from '../configs/routes';

import AppHeader from './AppHeader';
import MenuPage from '../pages/MenuPage';
import PostNewMenuItemPage from '../pages/PostNewMenuItemPage';
import MenuItemPage from '../pages/MenuItemPage';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import DeliveryPage from '../pages/DeliveryPage';
import AccountPage from '../pages/AccountPage';
import OrderHistoryPage from '../pages/OrderHistoryPage';
import MealPlannerPage from '../pages/MealPlannerPage';

export default class App extends Component {
  render() {
    return (
      <div>
        <AppHeader />
        <Switch>
          <Route exact path={routes.MENU} component={MenuPage} />
          <Route path={routes.MENU_ADD} component={PostNewMenuItemPage} />
          <Route path={routes.MENU_ITEM} component={MenuItemPage} />
          <Route path={routes.ABOUT} component={AboutPage} />
          <Route path={routes.CONTACT} component={ContactPage} />
          <Route path={routes.DELIVERY} component={DeliveryPage} />
          <Route path={routes.ACCOUNT} component={AccountPage} />
          <Route path={routes.ORDER_HISTORY} component={OrderHistoryPage} />
          <Route path={routes.PLANNER} component={MealPlannerPage} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}
