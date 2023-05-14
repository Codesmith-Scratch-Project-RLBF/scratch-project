import React from 'react';
import { useState } from 'react';
import Day from './Day';

const Calendar = (props) => {
  timeFrames = props.timeFrames;

  return (
    <div>
      {Object.keys(timeFrames).map((day) => (
        <div key={day}>
          <p>{day}</p>
          <Day times={timeFrames[day]} />
        </div>
      ))}
    </div>
  );
};

export default Calendar;
