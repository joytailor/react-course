import React, { Component } from 'react';
import AppHeader from './AppHeader';
import OrderHistoryTable from './OrderHistoryTable';

export default class App extends Component {
  render() {
    return (
      <div>
        <AppHeader />
        <OrderHistoryTable />
      </div>
    );
  }
}
