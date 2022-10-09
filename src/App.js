import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import { persistStore } from 'redux-persist';
import store from './state/store';
import crossBrowserListener from './utils/redux-persist-listner';
import storage from 'redux-persist/lib/storage';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
function App() {
  const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: hardSet,
  };
  const persistor = persistStore(store);
  store.persistor = persistor;

  window.addEventListener(
    'storage',
    crossBrowserListener(store, persistConfig)
  );

  return (
    <Provider store={store}>
      <PersistGate loading={<div>Loading ...</div>} persistor={persistor}>
        <div className="flex flex-row">
          <div class="">
            <Sidebar />
          </div>
          <div class="">
            <Dashboard />
          </div>
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
