import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './home/home';
import { Shop } from './shop/shop';

const App = () => (
  <Switch>
    <Route path="/" component={Home} exact />
    <Route path="/shop" component={Shop} />
  </Switch>
);

export default App;
