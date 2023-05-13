import React from 'react';
import './button.scss';
const Button = () => {
  const handleDelete = async () => {};
  const handleLogout = async () => {};
  return (
    <div className='buttons'>
      <button oncClick={handleLogout}>Log out</button>
      <button onClick={handleDelete}>Delete account</button>
    </div>
  );
};

export default Button;
