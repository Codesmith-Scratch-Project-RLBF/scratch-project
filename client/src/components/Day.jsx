import React from 'react';
import './day.scss';
import Time from './Time.jsx';
const Day = (props) => {
  const times = props.times;
  const otherTimeFrame = props.otherTimeFrame;

  return (
    <div>
      {times.map((element, index) => {
        let multicolor = false;
        if (otherTimeFrame) {
          if (element === true && otherTimeFrame[index] === true) {
            multicolor = true;
          }
        }
        return <Time key={index} isColored={multicolor ? 'multi' : element} />;
      })}
    </div>
  );
};
export default Day;
