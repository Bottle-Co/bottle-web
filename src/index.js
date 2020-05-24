import React from 'react';
import ReactDOM from 'react-dom';
import Rellax from 'rellax';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App';

new Rellax('.rellax');
ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.querySelector('#root'));
