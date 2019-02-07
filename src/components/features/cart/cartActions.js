import types from './cartActionTypes';

const addToCart = id => ({
  type: types.ADD_TO_CART,
  payload: {
    id,
  },
});

const removeFromCart = id => ({
  type: types.REMOVE_FROM_CART,
  payload: {
    id,
  },
});

const decrementCounter = id => ({
  type: types.DECREMENT_COUNTER,
  payload: {
    id,
  },
});

export default {
  addToCart,
  removeFromCart,
  decrementCounter,
};
