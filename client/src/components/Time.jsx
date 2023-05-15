import React from 'react';
import './Time.scss';

const Time = (props) => {
  const { time, isColored } = props;
  let paint;
  if (isColored === true) {
    paint = 'fill';
  }
  if (isColored === false) {
    paint = 'empty';
  }
  if (isColored === 'multi') {
    paint = 'multi';
  }

  return <div className={paint}></div>;
};

export default Time;
