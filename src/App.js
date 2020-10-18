import React from 'react';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    //BEM
    <Router>
      <Switch>
          <Route path="/checkout">
            <h1>checkout</h1>
          </Route>
          <Route path="/" >
            <Header />
            <Home />
          </Route>

      </Switch>
    </Router>
  );
}

export default App;
