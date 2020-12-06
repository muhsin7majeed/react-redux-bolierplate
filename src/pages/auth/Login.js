import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from 'redux/auth/actions';

const Login = () => {
  const dispatch = useDispatch();
  const login = () => dispatch(loginUser());

  const { loading } = useSelector(({ auth }) => auth);

  return (
    <div>
      <h1>Login</h1>
      <p>This is a Login page</p>

      <button type="button" onClick={login}>
        {loading ? 'loading..' : 'login'}
      </button>
    </div>
  );
};

export default Login;
