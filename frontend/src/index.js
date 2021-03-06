import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import 'tachyons';
import App from './App';

import reportWebVitals from './reportWebVitals';

import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persiststore } from './redux/store';
// import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';



ReactDOM.render(
  
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persiststore}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider> 
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
