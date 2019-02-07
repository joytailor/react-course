import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { persistReducer, persistStore } from 'redux-persist/lib/storage';

import rootModule from '../rootModule';
import { rootPersistConfig } from '../../../configs/sessionConfig';

const logger = createLogger();

const persistedReducer = persistReducer(rootPersistConfig, rootModule);

const middlewares = applyMiddleware(logger, thunk);
const enhancer = composeWithDevTools(middlewares);

const store = createStore(persistedReducer, enhancer);

const persistor = persistStore(store);

export default { persistor };
