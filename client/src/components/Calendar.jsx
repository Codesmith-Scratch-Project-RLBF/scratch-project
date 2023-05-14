import React from 'react';
import { useState } from 'react';
import Day from './Day.jsx';

const Calendar = (props) => {
  let timeFrames = props.timeFrames;

  return (
    <div>
        <div>calendar component</div>
      {/* {Object.keys(timeFrames).map((day) => (
        <div key={day}>
          <p>{day}</p>
          <Day times={timeFrames[day]} />
        </div>
      ))} */}
    </div>
  );
};

export default Calendar;
