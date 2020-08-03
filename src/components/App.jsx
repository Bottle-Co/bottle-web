import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './home/home';
import { Shop } from './shop/shop';
import Success from './success/success';

const App = () => (
  <Switch>
    <Route path="/" component={Home} exact />
    <Route path="/shop" component={Shop} />
    <Route path="/success" component={Success} />
  </Switch>
);

export default App;
