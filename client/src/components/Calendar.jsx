import React from 'react';
import { useState } from 'react';
import Day from './Day.jsx';
import './Calendar.scss';

const Calendar = (props) => {
  let timeFrames = props.time;

  return (
    <div className="day">
      {Object.keys(timeFrames).map((day) => (
        <div className = "dayCalendar" key={day}>
          <p>{day}</p>
          <Day times={timeFrames[day]} />
        </div>
      ))}
    </div>
  );
};

export default Calendar;
