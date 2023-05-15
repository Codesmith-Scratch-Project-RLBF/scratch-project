import React from 'react';
import Calendar from './Calendar.jsx';
import Usernames from './usernames.jsx';
import Button from './button.jsx';
import Input from './input.jsx';
import { useSelector } from 'react-redux';
import './main.scss';
import TimeIndicator from './timeIndicator';
import Legend from './legend.jsx';
function Main() {
  const { userName, timeFrames, users, otherTimeFrame } = useSelector(
    (state) => {
      return state.user;
    }
  );
  console.log(otherTimeFrame);
  return (
    <div className='main'>
      <div className='optionsHolder'>
        <Usernames users={users} />
        <Input />
        <Button />
        <div className='legendHolder'>
          <Legend />
        </div>
      </div>
      <div className='calendarHolder'>
        <TimeIndicator />
        <Calendar time={timeFrames} otherTimeFrame={otherTimeFrame} />
      </div>
    </div>
  );
}

export default Main;
