import React from 'react';
import { timeframes, daysOfTheWeek } from './timeframes';
import { addTime } from '../redux/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import axios from 'axios';
import './input.scss';
const Input = () => {
  const [index, setIndex] = useState();
  const [day, setDay] = useState();
  const dispatch = useDispatch();

  const user = useSelector((state) => {
    return state.user;
  });

  const handleAdd = async () => {
    console.log('index,day', index, day);
    try {
      const response = await axios.patch(`/users/${username}`);
      const newTimeFrames = await response.json();
    } catch (err) {
      console.log(err);
    }
    dispatch(addTime({ index, day }));
  };

  const handleIndexChange = (event) => {
    setIndex(event.target.value);
    console.log(index, event.target.value);
  };

  const handleDayChange = (event) => {
    setDay(event.target.value);
    console.log(day, event.target.value);
  };

  return (
    <div className='inputContainer'>
      <h2>Add your free time</h2>
      <label>
        <span>Pick Day</span>
        <select onChange={handleDayChange}>
          {daysOfTheWeek.map((day) => {
            return (
              <option key={day} value={day}>
                {day}
              </option>
            );
          })}
        </select>
      </label>
      <label>
        <span>Pick Time</span>
        <select onChange={handleIndexChange}>
          {timeframes.map((timeframe, index) => {
            return (
              <option key={timeframe} value={index}>
                {timeframe}
              </option>
            );
          })}
        </select>
      </label>
      <button onClick={handleAdd}>Add to calendar</button>
    </div>
  );
};

export default Input;
