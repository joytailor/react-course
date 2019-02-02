import { combineReducers } from 'redux';
import menuReducers from './menu/menuReducers';

export default combineReducers({
  menu: menuReducers,
});
