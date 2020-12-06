import React from 'react';
/* eslint-disable react/jsx-props-no-spreading */

import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, isAuthed, ...rest }) => (
  <Route {...rest} render={(props) => (isAuthed ? <Component {...props} /> : <Redirect to="/login" />)} />
);
export default PrivateRoute;

PrivateRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  isAuthed: PropTypes.bool.isRequired,
};
