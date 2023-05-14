import React from 'react';
import Calendar from './Calendar.jsx';
import Usernames from './usernames.jsx';
import Button from './button.jsx';
import Input from './input.jsx';
import { useSelector } from 'react-redux';

function Main() {
  const { userName, timeFrames, users } = useSelector((state) => {
    return state.user;
  });
  return (
    <div>
      <Input />
      <Button />
      <Usernames users = {users}/>
      <Calendar time = {timeFrames}/>
    </div>
  );
}

export default Main;
