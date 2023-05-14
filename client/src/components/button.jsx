import React from 'react';
import './button.scss';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, logoutUser } from '../redux/userSlice';
const Button = () => {
  const userName = useSelector((state) => {
    return state.user.userName;
  });
  const dispatch = useDispatch();
  const handleDelete = async () => {
    try {
      const response = await axios.delete(`/users/${userName}/`);
      const deletedUser = await response.json();
      dispatch(deleteUser());
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };
  const handleLogout = async () => {
    dispatch(logoutUser());
  };
  return (
    <div className='buttons'>
      <button oncClick={handleLogout}>Log out</button>
      <button onClick={handleDelete}>Delete account</button>
    </div>
  );
};

export default Button;
