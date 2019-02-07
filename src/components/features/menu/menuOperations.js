import * as API from '../../../services/menu/api';
import actions from './menuActions';

const fetchMenuItems = () => async dispatch => {
  dispatch(actions.fetchRequest());

  try {
    const response = await API.getAllMenuItems();
    dispatch(actions.fetchMenuItemsSuccess(response));
  } catch (error) {
    dispatch(actions.fetchError(error.message));
  }
};

const fetchMenuItemByID = id => async dispatch => {
  dispatch(actions.fetchRequest());

  try {
    const response = await API.getMenuItemById(id);
    dispatch(actions.fetchMenuItemById(response));
  } catch (error) {
    dispatch(actions.fetchError(error.message));
  }
};

const fetchCategories = () => async dispatch => {
  dispatch(actions.fetchRequest());

  try {
    const response = await API.getCategories();
    dispatch(actions.fetchCategoriesSuccess(response));
  } catch (error) {
    dispatch(actions.fetchError(error.message));
  }
};

const fetchMenuItemsWithCategory = category => async dispatch => {
  dispatch(actions.fetchRequest());
  try {
    const response = await API.getMenuItemsWithCategory(category);
    dispatch(actions.fetchMenuItemsWithCategorySuccess(response));
  } catch (error) {
    dispatch(actions.fetchError(error.message));
  }
};

const addMenuItem = item => async dispatch => {
  dispatch(actions.fetchRequest());

  try {
    await API.addMenuItem(item).then(({ data }) =>
      dispatch(actions.addMenuItemSuccess(data)),
    );
  } catch (error) {
    dispatch(actions.fetchError(error.message));
  }
};

export default {
  fetchMenuItems,
  addMenuItem,
  fetchMenuItemByID,
  fetchCategories,
  fetchMenuItemsWithCategory,
};
