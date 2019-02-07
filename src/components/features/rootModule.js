import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist/lib/storage';

import menuReducers from './menu/menuReducers';
import cartReducers from './cart/cartReducers';
import sessionReducers from './session/sessionReducers';
import { sessionPersistConfig } from '../../configs/sessionConfig';

export default combineReducers({
  menu: menuReducers,
  cart: cartReducers,
  session: persistReducer(sessionPersistConfig, sessionReducers),
});
