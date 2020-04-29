import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { LoginPage } from './pages/Login/LoginPage';

const Routings: React.FunctionComponent = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route exact path="/login" component={LoginPage} />
    </Switch>
  </Router>
);

export { Routings };
