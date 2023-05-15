import React from 'react';
import './userNames.scss';
import { useDispatch } from 'react-redux';
import { setOtherTimeFrame } from '../redux/userSlice';
const UserNames = (props) => {
  const { users } = props;
  const dispatch = useDispatch();
  const userName = [
    'Jimmy',
    'John',
    'Shahmar',
    'James',
    'Jimmy2',
    'John2',
    'Shahmar3',
  ];

  const handleClick = async (username) => {
    const res = await fetch(`/users/${username}`);
    const data = await res.json();
    const otherTimeFrames = {};
    for (let key in data) {
      if (
        key !== 'username' &&
        key !== 'password' &&
        key !== '__v' &&
        key !== '_id'
      ) {
        otherTimeFrames[key] = data[key];
      }
    }

    dispatch(setOtherTimeFrame({ otherTimeFrames }));
  };

  return (
    <div className='userNamesContainer'>
      <h2>See other users schedule</h2>
      <div className='nameHolder'>
        {userName.map((user) => {
          return (
            <p
              key={user}
              className='userName'
              onClick={() => handleClick(user)}
            >
              ▻ {user}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default UserNames;
