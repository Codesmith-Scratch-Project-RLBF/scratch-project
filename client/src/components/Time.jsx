import React from 'react';

const Time = (props) => {
  const { time, isColored } = props;
  return <div className={isColored ? 'fill' : 'empty'}>{time}</div>;
};

export default Time;
