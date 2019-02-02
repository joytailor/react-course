import types from './menuActionTypes';

const addMenuItemSuccess = id => ({
  type: types.ADD_SUCCESS,
  payload: id,
});

const fetchRequest = () => ({
  type: types.FETCH_REQUEST,
});

const fetchMenuItemsSuccess = items => ({
  type: types.FETCH_SUCCESS,
  payload: items,
});

const fetchError = error => ({
  type: types.FETCH_ERROR,
  payload: error,
});

const fetchMenuItemById = item => ({
  type: types.FETCH_ITEM_WITH_ID,
  payload: item,
});

const fetchCategoriesSuccess = categories => ({
  type: types.FETCH_CATEGORIES,
  payload: categories,
});

export default {
  addMenuItemSuccess,
  fetchRequest,
  fetchMenuItemsSuccess,
  fetchError,
  fetchMenuItemById,
  fetchCategoriesSuccess,
};
