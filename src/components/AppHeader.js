import React from 'react';
import Logo from './modules/header/Logo';
import AppNav from './modules/header/AppNav';
import UserMenu from './modules/header/UserMenu';
import appLogo from './modules/header/logo.png';

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
  </header>
);

export default AppHeader;
