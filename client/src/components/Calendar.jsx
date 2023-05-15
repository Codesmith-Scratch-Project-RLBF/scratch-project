import React from 'react';
import Day from './Day.jsx';
import './Calendar.scss';

const Calendar = (props) => {
  let timeFrames = props.time;
  const days = Object.keys(timeFrames).filter((el) => {
    if (el !== '_id' && el !== '__v') return true;
  });

  return (
    <div className='day'>
      {days.map((day) => {
        return (
          <div className='dayCalendar' key={day}>
            <p>{day}</p>
            <Day times={timeFrames[day]} />
          </div>
        );
      })}
    </div>
  );
};

export default Calendar;
