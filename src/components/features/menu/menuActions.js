import { normalize, schema } from 'normalizr';
import types from './menuActionTypes';

const fetchRequest = () => ({
  type: types.FETCH_REQUEST,
});

const fetchMenuItemsSuccess = items => {
  const itemsSchema = new schema.Entity('items');
  const normalizedItems = normalize(items, [itemsSchema]);
  return {
    type: types.FETCH_SUCCESS,
    payload: {
      ids: Object.keys(normalizedItems.entities.items),
      entities: normalizedItems.entities,
    },
  };
};

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

const fetchMenuItemsWithCategorySuccess = items => ({
  type: types.FETCH_ITEMS_WITH_CATEGORY_SUCCESS,
  payload: items,
});

export default {
  fetchRequest,
  fetchMenuItemsSuccess,
  fetchError,
  fetchMenuItemById,
  fetchCategoriesSuccess,
  fetchMenuItemsWithCategorySuccess,
};
