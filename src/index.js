import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { HashRouter } from 'react-router-dom';
import reducers from './shared/reducers';
import * as mailgo from 'mailgo/dist/mailgo.min.js';

import App from './components/App';
console.log(mailgo);
ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.querySelector('#root')
);
