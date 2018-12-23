import React, { Component } from 'react';
import * as API from '../order-history/api';
import Modal from './Modal';
import OrderForm from './OrderForm';
import Spinner from './Spinner';
import ErrorNotification from './ErrorNotification';

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
    // const currentItem = {
    //   id: '',
    //   date: '',
    //   price: '',
    //   address: '',
    //   rating: '',
    // };
    API.getItemById(id).then(item => {
      console.log(item);
      this.setState({ currentItemInfo: item });
      this.openModal();
      // currentItem.id : item.id,
      // currentItem.date = item.date;
      // currentItem.price = item.price;
      // currentItem.address = item.address;
      // currentItem.rating = item.rating;
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
      <div className="order-history-table">
        {isModalOpen && (
          <Modal isModalOpen={isModalOpen} onClose={this.closeModal}>
            <ul className="modal_list">
              <li>ID:{currentItemInfo.id}</li>
              <li>Date:{currentItemInfo.date}</li>
              <li>Price:{currentItemInfo.price}</li>
              <li>Address:{currentItemInfo.address}</li>
              <li>Rating:{currentItemInfo.rating}</li>
            </ul>
            <button type="button" onClick={() => this.closeModal()}>
              Close
            </button>
          </Modal>
        )}
        <OrderForm onHandleAddItem={this.handleAddItem} />
        {errorStatus && <ErrorNotification />}
        {isLoading ? (
          <Spinner />
        ) : (
          <table>
            <tbody>
              <tr>
                <th>ID</th>
                <th>Date</th>
                <th>Price</th>
                <th>Delivery Address</th>
                <th>Rating</th>
              </tr>
              {orderHistoryItems.map(item => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.date}</td>
                  <td>{item.price}</td>
                  <td>{item.address}</td>
                  <td>{item.rating}</td>
                  <td>
                    <button
                      type="button"
                      onClick={() => this.handleDeleteItem(item.id)}
                    >
                      Delete
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      onClick={() => this.handleShowMoreInfo(item.id)}
                    >
                      Show more
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    );
  }
}
