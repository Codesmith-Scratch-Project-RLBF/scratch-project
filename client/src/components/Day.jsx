import React from 'react';
import './day.scss';
import Time from './Time.jsx';
const Day = (props) => {
  const times = props.times;

  return (
    <div>
      {times.map((element, index) => {
        return <Time key={index} isColored={element} />;
      })}
    </div>
  );
};
export default Day;
