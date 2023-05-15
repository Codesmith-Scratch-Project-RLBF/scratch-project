import React from 'react';
import './Time.scss';

const Time = (props) => {
  const { time, isColored } = props;
  let paint;
  console.log(isColored);
  if (isColored === 'multi') {
    paint = 'multi';
  } else if (isColored === true) {
    paint = 'fill';
  } else if (isColored === false) {
    paint = 'empty';
  } else {
    paint = 'grey';
  }

  return <div className={paint}>{paint === 'multi' ? 'OVERLAP' : null}</div>;
};

export default Time;
