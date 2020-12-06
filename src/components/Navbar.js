import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { logoutUser } from 'redux/auth/actions';

const Navbar = () => {
  const dispatch = useDispatch();
  const logout = () => dispatch(logoutUser());

  const { isLoggedIn } = useSelector(({ auth }) => auth);

  const authNav = isLoggedIn ? (
    <>
      <br />
      <button type="button" onClick={logout} style={{ color: '#333' }}>
        Logout
      </button>
    </>
  ) : (
    <Link to="/login">Login</Link>
  );

  return (
    <div>
      <ul className="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        {authNav}
      </ul>
    </div>
  );
};

export default Navbar;
