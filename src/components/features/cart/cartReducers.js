import { combineReducers } from 'redux';
import types from './cartActionTypes';

function ids(state = [], { type, payload }) {
  switch (type) {
    case types.ADD_TO_CART:
      return state.includes(payload.id) ? state : [...state, payload.id];
    case types.REMOVE_FROM_CART:
      return state.filter(id => id !== payload.id);
    default:
      return state;
  }
}
function amount(state = {}, { type, payload }) {
  switch (type) {
    case types.ADD_TO_CART:
      return {
        ...state,
        [payload.id]: state[payload.id] ? state[payload.id] + 1 : 1,
      };
    case types.REMOVE_FROM_CART: {
      const { [payload.id]: _, ...newState } = state;
      return newState;
    }
    case types.DECREMENT_COUNTER: {
      return {
        ...state,
        [payload.id]:
          state[payload.id] && state[payload.id] > 1
            ? state[payload.id] - 1
            : 1,
      };
    }
    default:
      return state;
  }
}

export default combineReducers({
  ids,
  amount,
});
