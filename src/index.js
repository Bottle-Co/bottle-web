import React from 'react';
import ReactDOM from 'react-dom';
import Rellax from 'rellax';
import { HashRouter } from 'react-router-dom';

import App from './components/App';

var rellax = new Rellax('.rellax');

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.querySelector('#root')
);
