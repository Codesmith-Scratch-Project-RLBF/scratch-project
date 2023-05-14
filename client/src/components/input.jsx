import React from 'react';
import { daysOfTheWeek, timeframes } from './timesData';
import { timeframes } from './timeframes';

const Input = () => {
  const handleAdd = async () => {
    //update the corresponding box value from false to true
    //use userReducer function todo that,then ui updates
    //also send the data to the backend with fetch:patch request
  };
  return (
    <div className='inputContainer'>
      <label>
        Pick a timeframe
        <select>
          {timeframes.map((timeframe, index) => {
            return (
              <option key={timeframe} value={index}>
                {timeframe}
              </option>
            );
          })}
        </select>
      </label>
      <label>
        Pick a day
        <select>
          {daysOfTheWeek.map((day) => {
            return (
              <option key={day} value={day}>
                {day}
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
