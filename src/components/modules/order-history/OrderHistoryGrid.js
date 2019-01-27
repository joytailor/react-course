import React from 'react';

import Modal from '../../Modal';
import Spinner from '../../Loading';
import ErrorNotification from '../../ErrorNotification';

const OrderHistoryGrid = ({
  orderHistoryItems,
  isModalOpen,
  currentItemInfo,
  isLoading,
  errorStatus,
  closeModal,
  handleShowMoreInfo,
}) => (
  <div className="order-history-table">
    {errorStatus !== null && <ErrorNotification err={errorStatus.message} />}
    {isModalOpen && (
      <Modal isModalOpen={isModalOpen} onClose={() => closeModal()}>
        <ul className="modal_list">
          <li>ID:{currentItemInfo.id}</li>
          <li>Date:{currentItemInfo.date}</li>
          <li>Price:{currentItemInfo.price}</li>
          <li>Address:{currentItemInfo.address}</li>
          <li>Rating:{currentItemInfo.rating}</li>
        </ul>
        <button type="button" onClick={() => closeModal()}>
          Close
        </button>
      </Modal>
    )}
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
                  onClick={() => handleShowMoreInfo(item.id)}
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

export default OrderHistoryGrid;
