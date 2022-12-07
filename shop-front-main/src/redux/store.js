import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import rootSaga from './sagas';

import { persistReducer } from 'redux-persist';
import persistStore from 'redux-persist/es/persistStore';

const persistConfig = {
  key: 'root',
  whitelist: ['auth'],
};

const persistedReducer = persistReducer(
  persistConfig,
  persistReducer(persistConfig, reducers)
);

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const enhancers = [applyMiddleware(...middlewares)];

const store = createStore(persistedReducer, compose(...enhancers));

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
