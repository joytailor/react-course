import { combineReducers } from 'redux';
import types from './menuActionTypes';

function itemsReducer(state = [], { type, payload }) {
  switch (type) {
    case types.FETCH_SUCCESS:
      return payload;

    case types.ADD_SUCCESS:
      return [...state, payload];

    default:
      return state;
  }
}

function categoriesReducer(state = [], { type, payload }) {
  switch (type) {
    case types.FETCH_CATEGORIES:
      return payload;

    default:
      return state;
  }
}

function filterReducer(state = '', { type, payload }) {
  switch (type) {
    case types.CHANGE_CATEGORY:
      return payload;

    default:
      return state;
  }
}

function currentItemReducer(state = '', { type, payload }) {
  switch (type) {
    case types.FETCH_ITEM_WITH_ID:
      return payload;

    default:
      return state;
  }
}

function loadingReducer(state = false, { type }) {
  switch (type) {
    case types.FETCH_REQUEST:
      return true;

    case types.FETCH_SUCCESS:
    case types.FETCH_ERROR:
      return false;

    default:
      return state;
  }
}

function errorReducer(state = null, { type, payload }) {
  switch (type) {
    case types.FETCH_REQUEST:
      return null;

    case types.FETCH_ERROR:
      return payload;

    default:
      return state;
  }
}

export default combineReducers({
  items: itemsReducer,
  categories: categoriesReducer,
  currentItem: currentItemReducer,
  loading: loadingReducer,
  error: errorReducer,
  filter: filterReducer,
});
