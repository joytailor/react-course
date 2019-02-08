import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { persistReducer, persistStore } from 'redux-persist';

import rootModule from '../rootModule';
import { rootPersistConfig } from '../../../configs/sessionConfig';

const logger = createLogger();

const persistedReducer = persistReducer(rootPersistConfig, rootModule);

const middlewares = applyMiddleware(logger, thunk);
const enhancer = composeWithDevTools(middlewares);

export const store = createStore(persistedReducer, enhancer);

export const persistor = persistStore(store);
