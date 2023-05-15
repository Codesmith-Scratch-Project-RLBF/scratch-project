import React from 'react';
import './legend.scss';
const Legend = () => {
  return (
    <div className='legend'>
      <div>
        <div className='green'></div> Overlapped Time
      </div>
      <div>
        <div className='grey'></div> Their Free Time{' '}
      </div>
      <div>
        <div className='blue'></div> My Free Time
      </div>
    </div>
  );
};

export default Legend;
