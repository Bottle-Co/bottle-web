import React from 'react';
import {
  HashRouter,
  Switch,
  Route,
} from 'react-router-dom';

import './App.scss';
import Home from './home/Home';
import Product from './product/Product';

const App = () => (
  <HashRouter>
    <Switch>
      <Route path="/product" component={Product} />
      <Route path="/" component={Home} />
    </Switch>
  </HashRouter>
);

export default App;
