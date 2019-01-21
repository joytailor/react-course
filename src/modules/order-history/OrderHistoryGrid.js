import React from 'react';

import Modal from '../../components/Modal';
import OrderForm from './OrderForm';
import Spinner from '../../components/Loading';
import ErrorNotification from '../../components/ErrorNotification';

const OrderHistoryGrid = ({
  orderHistoryItems,
  isModalOpen,
  currentItemInfo,
  isLoading,
  errorStatus,
  closeModal,
  handleAddItem,
  handleDeleteItem,
  handleShowMoreInfo,
}) => (
  <div className="order-history-table">
    {isModalOpen && (
      <Modal isModalOpen={isModalOpen} onClose={closeModal}>
        <ul className="modal_list">
          <li>ID:{currentItemInfo.id}</li>
          <li>Date:{currentItemInfo.date}</li>
          <li>Price:{currentItemInfo.price}</li>
          <li>Address:{currentItemInfo.address}</li>
          <li>Rating:{currentItemInfo.rating}</li>
        </ul>
        <button type="button" onClick={closeModal}>
          Close
        </button>
      </Modal>
    )}
    <OrderForm onHandleAddItem={handleAddItem} />
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
                <button type="button" onClick={handleDeleteItem(item.id)}>
                  Delete
                </button>
              </td>
              <td>
                <button type="button" onClick={handleShowMoreInfo(item.id)}>
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

export default OrderHistoryGrid;
