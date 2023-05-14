import React from 'react';
import Calendar from './Calendar.jsx';
import Usernames from './usernames.jsx';
import Button from './button.jsx';
import Input from './input.jsx';

function Main() {
  return (
    <div>
      <Input />
      <Button />
      <Usernames />
      <Calendar />
    </div>
  );
}

export default Main;
