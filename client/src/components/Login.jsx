import React from 'react';
import { useState } from 'react';
import { loginUser } from '../redux/userSlice';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import './signInUp.scss';
const Login = () => {
  const [cred, setCred] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    console.log('handle login started');

    try {
      console.log('cred: login ', cred);
      const response = await fetch('/auth/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cred),
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
      navigate('/main');
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (e) => {
    setCred((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  return (
    <div className='auth'>
      <h1>Sign In</h1>
      <form onSubmit={handleLogin}>
        <label>
          <p>Username:</p>
          <input name='username' type='text' onChange={handleChange} />
        </label>
        <label>
          <p>Password:</p>
          <input name='password ' type='text' onChange={handleChange} />
        </label>
        <button>Log-in</button>
      </form>
    </div>
  );
};

export default Login;
