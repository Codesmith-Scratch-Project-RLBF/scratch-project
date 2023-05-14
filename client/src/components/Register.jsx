import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signupUser } from '../redux/userSlice';
import { useNavigate } from 'react-router';
import axios from 'axios';
const Register = () => {
  const [username, setUserName] = useState();
  const [password, setPassWord] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleRegister = async () => {
    try {
      const response = await axios.post('/auth/', {
        username: username,
        password: password,
      });
      const newUser = await response.json();
      const userName = newUser.username;
      const timeFrames = {};
      for (const key in newUser) {
        if (key !== 'username' && key !== 'password') {
          timeFrames[key] = newUser[key];
        }
      }
      dispatch(signupUser({ userName, timeFrames }));
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='login-button'>
      <form onSubmit={handleRegister}>
        <label>
          <h1>Username:</h1>
          <input type='text' />
        </label>
        <label>
          <h1>Password:</h1>
          <input type='text' />
        </label>
        <button>Register</button>
      </form>
    </div>
  );
};

export default Register;
