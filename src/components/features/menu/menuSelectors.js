import { createSelector } from 'reselect';

const getCurrentCategory = state => state.menu.filter;

const getAllMenuItems = state => state.menu.items;

const getCategories = state => state.menu.categories;

const getIsLoading = state => state.menu.loading;

const getError = state => state.menu.error;

const getMenuItemsWithCategory = createSelector(
  [getAllMenuItems, getCurrentCategory],
  (items, category) => items.filter(item => item.category === category),
);

const getMenuItemById = (state, id) =>
  state.menu.items.find(item => item.id === id);

export default {
  getCurrentCategory,
  getAllMenuItems,
  getCategories,
  getMenuItemsWithCategory,
  getMenuItemById,
  getIsLoading,
  getError,
};
