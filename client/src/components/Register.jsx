import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signupUser } from '../redux/userSlice';
import { useNavigate } from 'react-router';
import './signInUp.scss';

const Register = () => {
  const [cred, setCred] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log('handle register started');
    try {
      console.log('cred: register ', cred);
      const response = await fetch('/auth/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cred),
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
  const handleChange = (e) => [
    setCred((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    }),
  ];
  return (
    <div className='auth'>
      <h1>Sign Up</h1>
      <form onSubmit={handleRegister}>
        <label>
          <p>Username:</p>
          <input name='username' type='text' onChange={handleChange} />
        </label>
        <label>
          <p>Password:</p>
          <input name='password' type='text' onChange={handleChange} />
        </label>
        <button>Register</button>
      </form>
    </div>
  );
};

export default Register;
