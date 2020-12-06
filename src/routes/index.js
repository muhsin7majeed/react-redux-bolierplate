/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Home from 'pages/Home';
import Login from 'pages/auth/Login';
import About from 'pages/About';

import PrivateRoute from './PrivateRoute';

const Router = () => {
  const isAuthed = useSelector(({ auth }) => auth.isLoggedIn);

  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" render={(props) => (isAuthed ? <Redirect to="/" /> : <Login {...props} />)} />

      <PrivateRoute path="/about" isAuthed={isAuthed} component={About} />

      <Redirect to="/" />
    </Switch>
  );
};

export default Router;
