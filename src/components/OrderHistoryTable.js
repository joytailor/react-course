import React, { Component } from 'react';
import * as API from '../order-history/api';
import Modal from './Modal';
import OrderForm from './OrderForm';
import Spinner from './Spinner';
import ErrorNotification from './ErrorNotification';

export default class OrderHistoryTable extends Component {
  state = {
    orderHistoryItems: [],
    isModalOpen: false,
    currentItemInfo: { id: '', date: '', price: '', address: '', rating: '' },
    isLoading: false,
    errorStatus: null,
  };

  constructor() {
    super();
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  componentDidMount() {}

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  handleDeleteItem = id => {
    API.deleteMenuItem(id).then(isOk => {
      if (!isOk) return;
      this.setState(state => ({
        menu: state.orderHistoryItems.filter(item => item.id !== id),
      }));
    });
  };

  handleShowMoreInfo = id => {
    const { currentItemInfo } = this.state.currentItemInfo;
    API.getMenuItemById(id).then(item => {
      currentItemInfo.id = item.id;
      currentItemInfo.date = item.date;
      currentItemInfo.price = item.price;
      currentItemInfo.address = item.address;
      currentItemInfo.rating = item.rating;
    });
    this.openModal();
  };

  handleAddMenuItem = ({ id, date, price, address, rating }) => {
    const item = {
      id: { id },
      date: { date },
      price: { price },
      address: { address },
      rating: { rating },
    };
    API.addMenuItem(item).then(isOk => {
      if (!isOk) return;
      this.setState(state => ({
        orderHistoryItems: [...state.orderHistoryItems, item],
      }));
    });
  };

  fetchHistoryTable() {
    this.setState({ isLoading: true });
    API.getAllItems()
      .then(orderHistoryItems => {
        this.setState({ orderHistoryItems });
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
      <div className="order-history-table">
        <OrderForm />
        {isModalOpen && (
          <Modal onClose={this.closeModal()}>
            <ul className="modal_list">
              <li>ID:{currentItemInfo.id}</li>
              <li>Date:{currentItemInfo.date}</li>
              <li>Price:{currentItemInfo.price}</li>
              <li>Adress:{currentItemInfo.adress}</li>
              <li>Rating:{currentItemInfo.rating}</li>
            </ul>
            <button type="button" onClick={this.onClose()}>
              Close
            </button>
          </Modal>
        )}
        {errorStatus && <ErrorNotification />}
        {isLoading ? (
          <Spinner />
        ) : (
          <table>
            <th>Date</th>
            <th>Price</th>
            <th>Delivery Address</th>
            <th>Rating</th>
            {orderHistoryItems.map(item => (
              <tr key={item.id}>
                <td>{item.date}</td>
                <td>{item.price}</td>
                <td>{item.address}</td>
                <td>{item.rating}</td>
                <button type="button" onClick={this.handleDeleteItem}>
                  Delete
                </button>
                <button type="button" onClick={this.handleShowMoreInfo}>
                  Show more
                </button>
              </tr>
            ))}
          </table>
        )}
      </div>
    );
  }
}
