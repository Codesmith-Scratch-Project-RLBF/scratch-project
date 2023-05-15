import React from 'react';
import './day.scss';
import Time from './Time.jsx';
const Day = (props) => {
  const times = props.times;
  const otherTimeFrame = props.otherTimeFrame;

  return (
    <div>
      {times.map((element, index) => {
        let color = element;
        if (otherTimeFrame) {
          if (element === true && otherTimeFrame[index] === true) {
            color = 'multi';
          } else if (element === false && otherTimeFrame[index] === true) {
            console.log('other person has free time');
            color = 'grey';
          }
        }
        return <Time key={index} isColored={color} />;
      })}
    </div>
  );
};
export default Day;
