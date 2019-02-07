import React from 'react';
import s from './Cart.module.css';

const Cart = ({ items = [], removeFromCart, addToCart, decrementCounter }) =>
  items.length > 0 ? (
    <table className={s.table}>
      <tbody>
        {items.map(({ id, name, amount }) => (
          <tr key={id}>
            <td>{name}</td>
            <td>
              <button type="button" onClick={() => addToCart(id)}>
                +
              </button>
              {amount}
              <button type="button" onClick={() => decrementCounter(id)}>
                -
              </button>
            </td>
            <td>
              <button type="button" onClick={() => removeFromCart(id)}>
                Удалить
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  ) : (
    <h1>В корзине нет товаров!</h1>
  );

export default Cart;
