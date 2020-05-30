import React from 'react';

import { Switch } from 'react-router-dom';

import RouteDom from './Routes';

import SignIn from '../pages/Signin';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => (
  <Switch>
    <RouteDom path="/" exact component={SignIn} />
    <RouteDom path="/signup" exact component={SignUp} />
    <RouteDom path="/dashboard" exact component={Dashboard} isPrivate />
  </Switch>
);

export default Routes;
