import React from 'react';
import { useState } from 'react';

const Login = () => {
  const [username, setUserName] = useState();
  const [password, setPassWord] = useState();

  const handleLogin = async (event) => {};

  return (
    <div className="login-button">
      <form onSubmit={handleLogin}>
        <label>
          <h1>Username:</h1>
          <input type="text" />
        </label>
        <label>
          <h1>Password:</h1>
          <input type="text" />
        </label>
        <button>Log-in</button>
      </form>
    </div>
  );
};

export default Login;
