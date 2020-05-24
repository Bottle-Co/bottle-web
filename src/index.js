import React from 'react';
import ReactDOM from 'react-dom';
import Rellax from 'rellax';

import App from './components/App';

new Rellax('.rellax');
ReactDOM.render(<App />, document.querySelector('#root'));
