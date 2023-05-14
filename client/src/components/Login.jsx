import React from 'react';
import { useState } from 'react';
import { loginUser } from '../redux/userSlice';

const Login = () => {
  const [username, setUserName] = useState();
  const [password, setPassWord] = useState();

  const handleLogin = async (event) => {
    try {
      const response = await axios.get('/auth/', {
        username: username,
        password: password,
      });
      const loggedinUser = await response.json();
      const userName = loggedinUser.username;
      const timeFrames = {};
      for (const key in loggedinUser) {
        if (key !== 'username' && key !== 'password') {
          timeFrames[key] = loggedinUser[key];
        }
      }
      dispatch(loginUser({ userName, timeFrames }));
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='login-button'>
      <form onSubmit={handleLogin}>
        <label>
          <h1>Username:</h1>
          <input type='text' />
        </label>
        <label>
          <h1>Password:</h1>
          <input type='text' />
        </label>
        <button>Log-in</button>
      </form>
    </div>
  );
};

export default Login;
