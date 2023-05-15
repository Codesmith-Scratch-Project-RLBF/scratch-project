import React from 'react';
import { useState } from 'react';
import { loginUser } from '../redux/userSlice';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import './signInUp.scss';
const Login = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    console.log('handle login started');

    try {
      const response = await fetch(
        `/auth/?username=${username}&password=${password}`
      );
      const loggedinUser = await response.json();
      console.log(loggedinUser);
      const userName = loggedinUser.username;
      const timeFrames = {};
      for (const key in loggedinUser) {
        if (
          key !== 'username' &&
          key !== 'password' &&
          key !== '__v' &&
          key !== '_id'
        ) {
          timeFrames[key] = loggedinUser[key];
        }
      }

      const responseUsers = await fetch(`/users/__all`);
      const users = await responseUsers.json();
      const usersData = [];
      for (let user in users) {
        usersData.push(users[user].username);
      }

      dispatch(loginUser({ userName, timeFrames, usersData }));
      navigate('/main');
    } catch (error) {
      console.log(error);
    }
  };
  const handleNameChange = (e) => {
    setUsername(e.target.value);
    console.log(e.target.value);
  };
  const handlePassChange = (e) => {
    setPassword(e.target.value);
    console.log(e.target.value);
  };
  return (
    <div className='auth'>
      <h1>Sign In</h1>
      <form onSubmit={handleLogin}>
        <label>
          <p>Username:</p>
          <input name='username' type='text' onChange={handleNameChange} />
        </label>
        <label>
          <p>Password:</p>
          <input name='password ' type='password' onChange={handlePassChange} />
        </label>
        <button>Log-in</button>
      </form>
    </div>
  );
};

export default Login;
