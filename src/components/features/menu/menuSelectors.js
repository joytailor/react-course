const getAllMenuItems = state => state.menu.items;

const getCategories = state => state.menu.categories;

const getIsLoading = state => state.menu.loading;

const getError = state => state.menu.error;

const getCurrentItem = state => state.menu.currentItem;

export default {
  getAllMenuItems,
  getCategories,
  getIsLoading,
  getError,
  getCurrentItem,
};
