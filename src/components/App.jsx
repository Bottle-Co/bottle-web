import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';

import './App.scss';
import Home from './home/Home';
import Product from './product/Product';


const App = () => (
  <Switch>
      <Route path="/product" component={Product} />
      <Route path="/" component={Home} />
    </Switch>
);

export default App;
