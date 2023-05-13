import React from 'react';
import { useState } from 'react';
import Day from './Day';

const Calendar = () => {
  const [timeFrame, setTimeFrame] = useState();

  return (
    <div>
      {Object.keys(timeFrame).map((day) => (
        <div key={day}>
          <p>{day}</p>
          <Day times={timeFrame[day]} />
        </div>
      ))}
    </div>
  );
};

export default Calendar;
