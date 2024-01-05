import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store,persistUserStore } from './store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}> {/*Wrap the normal store to App Componet*/}
    <PersistGate persistor={persistUserStore}> {/*Wrap the Persist store to App Componet*/}
      <App />
    </PersistGate>
  </Provider>
);


reportWebVitals();
