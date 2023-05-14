import React from 'react';
import './Time.scss';

const Time = (props) => {
  const { time, isColored } = props;

  return <div className={isColored ? 'fill' : 'empty'}></div>;
};

export default Time;
