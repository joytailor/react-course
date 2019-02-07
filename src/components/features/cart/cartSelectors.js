import { createSelector } from 'reselect';
import menuSelectors from '../menu/menuSelectors';

const getCartProductsIds = state => state.cart.ids;

const getCartProductsAmounts = state => state.cart.amount;

export const getCartProductsAmount = createSelector(
  getCartProductsIds,
  ids => ids.length,
);

const getCartProducts = createSelector(
  [
    getCartProductsIds,
    getCartProductsAmounts,
    menuSelectors.getMenuItemsEntities,
  ],
  (ids, amounts, entities) =>
    ids.map(id => ({
      ...entities.items[id],
      amount: amounts[id],
    })),
);

export default {
  getCartProductsIds,
  getCartProductsAmounts,
  getCartProductsAmount,
  getCartProducts,
};
