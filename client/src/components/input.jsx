import React from 'react';
import { daysOfTheWeek, timeframes } from './timesData';

const Input = () => {
  return (
    <div className='inputContainer'>
      <label>
        Pick a timeframe
        <select>
          {timeframes.map((timeframe, index) => {
            return <option value={index}>{timeframe} </option>;
          })}
        </select>
      </label>
      Pick a day
      <select>
        {daysOfTheWeek.map((day) => {
          return <option value={day}>{day}</option>;
        })}
      </select>
      <label>Pic</label>
    </div>
  );
};

export default Input;
