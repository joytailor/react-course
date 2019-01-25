import { createSelector } from 'reselect';

const getCurrentCategory = state => state.menu.filter;

const getAllMenuItems = state => state.menu.items;

const getCategories = state => state.menu.categories;

const getIsLoading = state => state.menu.loading;

const getError = state => state.menu.error;

const getCurrentItem = state => state.menu.currentItem;

const getMenuItemsWithCategory = createSelector(
  [getAllMenuItems, getCurrentCategory],
  (items, category) => items.filter(item => item.category === category),
);

export default {
  getCurrentCategory,
  getAllMenuItems,
  getCategories,
  getMenuItemsWithCategory,
  getIsLoading,
  getError,
  getCurrentItem,
};
