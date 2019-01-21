import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Navigation from './Navigation';
import MainPage from '../pages/MainPage';
import MenuPage from '../pages/MenuPage';
import PostNewMenuItemPage from '../pages/PostNewMenuItemPage';
import MenuItemPage from '../pages/MenuItemPage';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Switch>
          <Route exact path="/menu" component={MenuPage} />
          <Route path="/menu/add" component={PostNewMenuItemPage} />
          <Route path="/menu/:name/:id" component={MenuItemPage} />
          <Route path="/main" component={MainPage} />
          <Redirect to="/main" />
        </Switch>
      </div>
    );
  }
}
