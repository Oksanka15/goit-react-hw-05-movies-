import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App/App';
import './index.css';
import {Provider} from 'react-redux'
import { persistore, store } from 'components/redux/store';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistore}>
         <App />
      </PersistGate>
     
    </Provider>
    
  </React.StrictMode>
);
