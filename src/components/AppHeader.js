import React from 'react';
import Logo from './modules/header/Logo';
import AppNav from './modules/header/AppNav';
import UserMenu from './modules/header/UserMenu';
import appLogo from './modules/header/logo.png';
import CartIcon from './modules/cart/CartIcon';

const AppHeader = () => (
  <header className="Header">
    <div className="Header__logo">
      <Logo imgUrl={appLogo} />
    </div>
    <div className="Header__nav">
      <AppNav />
    </div>
    <div className="Header__usermenu">
      <UserMenu />
    </div>
    <CartIcon />
  </header>
);

export default AppHeader;
