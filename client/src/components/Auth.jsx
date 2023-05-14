import React from 'react';
import Login from './Login.jsx';
import Register from './Register.jsx';
import './auth.scss';
const Auth = () => {
  return (
    <div className='authHolder'>
      <Login />
      <Register />
    </div>
  );
};

export default Auth;
