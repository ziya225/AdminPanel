import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';
import createSagaMiddleware from 'redux-saga';
import sidebarReducer from './sidebar/sidebarReducer';

const persistConfig = {
  key: 'root',
  storage: storage,
  stateReconciler: hardSet,
};

const rootReducer = combineReducers({
  sidebarData: sidebarReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

//const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
