import React from 'react';
import Logo from '../modules/header/Logo';
import AppNav from '../modules/header/AppNav';
import UserMenu from '../modules/header/UserMenu';
import appLogo from '../modules/header/logo.png';
import CartIcon from '../modules/cart/CartIcon';
import Auth from '../modules/header/Auth';

const AppHeader = ({ isAuthenticated, history }) => (
  <header className="Header">
    <div className="Header__logo">
      <Logo imgUrl={appLogo} />
    </div>
    <div className="Header__nav">
      <AppNav />
    </div>
    {isAuthenticated && (
      <>
        <div className="Header__usermenu">
          <UserMenu />
        </div>
        <div className="Header__cart">
          <CartIcon />
        </div>
      </>
    )}
    <div className="Header__auth">
      <Auth history={history} />
    </div>
  </header>
);

export default AppHeader;
