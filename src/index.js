import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk'

import reducers from './reducers';

import './index.css';
import App from './App';

// using promise middleware to better handle API
const createStoreWithMiddleware = applyMiddleware(thunk, promise)(createStore);

const app = <Provider store={createStoreWithMiddleware(reducers)}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</Provider>
ReactDOM.render(app, document.getElementById('root'));
