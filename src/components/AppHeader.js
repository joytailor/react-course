import React from 'react';
import Logo from './Logo';
import AppNav from './AppNav';
import UserMenu from './UserMenu';
import appLogo from '../logo.png';

const navItems = ['Menu', 'About', 'Contact', 'Delivery'];

const AppHeader = () => (
  <header className="Header">
    <div className="Header__logo">
      <Logo imgUrl={appLogo} />
    </div>
    <div className="Header__nav">
      <AppNav items={navItems} />
    </div>
    <div className="Header__usermenu">
      <UserMenu />
    </div>
  </header>
);

export default AppHeader;
