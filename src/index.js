import React from 'react';
import ReactDOM from 'react-dom';
import Rellax from 'rellax';

import App from './components/App';

var rellax = new Rellax('.rellax');
ReactDOM.render(<App />, document.querySelector('#root'));
