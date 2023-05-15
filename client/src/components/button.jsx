import React from 'react';
import './button.scss';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, logoutUser } from '../redux/userSlice';
import { useNavigate } from 'react-router';
const Button = () => {
  const navigate = useNavigate('/');
  const userName = useSelector((state) => {
    return state.user.userName;
  });
  const dispatch = useDispatch();
  const handleDelete = async () => {
    try {
      const response = await axios.delete(`/users/${userName}/`);
      dispatch(deleteUser());
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };
  const handleLogout = async () => {
    dispatch(logoutUser());
    navigate('/');
  };
  return (
    <div className='buttons'>
      <h2>Account Actions</h2>
      <button onClick={handleLogout}>Log out</button>
      <button onClick={handleDelete}>Delete account</button>
    </div>
  );
};

export default Button;
