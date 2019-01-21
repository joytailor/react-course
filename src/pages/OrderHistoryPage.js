import React, { Component } from 'react';
import * as API from '../services/order-history/api';

import OrderHistoryGrid from '../modules/order-history/OrderHistoryGrid';

export default class OrderHistoryTable extends Component {
  state = {
    orderHistoryItems: [],
    isLoading: false,
    isModalOpen: false,
    currentItemInfo: {},
    errorStatus: null,
  };

  componentDidMount() {
    this.fetchHistoryTable();
  }

  handleAddItem = (id, date, price, address, rating) => {
    if (
      id === '' ||
      date === '' ||
      price === '' ||
      address === '' ||
      rating === ''
    )
      return;
    const item = { id, date, price, address, rating };
    API.addItem(item).then(isOk => {
      if (!isOk) return;
      this.setState(state => ({
        orderHistoryItems: [...state.orderHistoryItems, item],
      }));
    });
  };

  handleDeleteItem = id => {
    API.deleteItem(id).then(isOk => {
      if (!isOk) return;
      this.setState(state => ({
        orderHistoryItems: state.orderHistoryItems.filter(
          item => item.id !== id,
        ),
      }));
    });
  };

  handleShowMoreInfo = id => {
    API.getItemById(id).then(item => {
      console.log(item);
      this.setState({ currentItemInfo: item });
      this.openModal();
    });
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  fetchHistoryTable() {
    this.setState({ isLoading: true });
    API.getAllItems()
      .then(orderHistoryItems => {
        console.log(orderHistoryItems);
        this.setState({ orderHistoryItems, isLoading: false });
        console.log(this.state.orderHistoryItems);
      })
      .catch(error =>
        this.setState({ errorStatus: { error }, isLoading: false }),
      );
  }

  render() {
    const {
      orderHistoryItems,
      isModalOpen,
      currentItemInfo,
      isLoading,
      errorStatus,
    } = this.state;
    return (
      <OrderHistoryGrid
        orderHistoryItems={orderHistoryItems}
        isModalOpen={isModalOpen}
        currentItemInfo={currentItemInfo}
        isLoading={isLoading}
        errorStatus={errorStatus}
        closeModal={this.closeModal}
        handleAddItem={this.handleAddItem}
        handleDeleteItem={this.handleDeleteItem}
        handleShowMoreInfo={this.handleShowMoreInfo}
      />
    );
  }
}
