import React, { Component } from 'react';
import * as API from '../order-history/api';

export default class OrderHistoryTable extends Component {
  state = { orderHistoryItems: [] };

  componentDidMount() {
    API.getAllItems().then(orderHistoryItems => {
      this.setState({ orderHistoryItems });
    });
  }

  render() {
    const { orderHistoryItems } = this.state;
    return (
      <table className="order-history-table">
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
          </tr>
        ))}
      </table>
    );
  }
}
