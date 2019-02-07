const getMenuItemsEntities = state => state.menu.items.entities;

const getMenuItemsIds = state => state.menu.items.ids;

const getCategories = state => state.menu.categories;

const getIsLoading = state => state.menu.loading;

const getError = state => state.menu.error;

const getCurrentItem = state => state.menu.currentItem;

const getCategoriedItems = state => state.menu.categoriedItems;

export default {
  getMenuItemsEntities,
  getMenuItemsIds,
  getCategories,
  getIsLoading,
  getError,
  getCurrentItem,
  getCategoriedItems,
};
