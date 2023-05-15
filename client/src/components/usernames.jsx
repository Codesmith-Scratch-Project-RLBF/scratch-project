import React, { useState } from 'react';
import './userNames.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setOtherTimeFrame } from '../redux/userSlice';
const UserNames = (props) => {
  const userName = useSelector((state) => state.user.userName);
  const [person, setPerson] = useState('');
  const { users } = props;
  console.log(users);
  const dispatch = useDispatch();

  const handleClick = async (username) => {
    // setPerson(event.target.value);
    console.log('username, ', userName);
    console.log(username);
    try {
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
      console.log('username component: ', otherTimeFrames);
      dispatch(setOtherTimeFrame({ otherTimeFrames }));
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleChange = (event) => {
    console.log('handle change,', event.target.value);
    setPerson(event.target.value);
  };
  return (
    <div className='userNamesContainer'>
      <h1>Hello {userName}!</h1>
      <h2>See other users schedule</h2>
      <div className='nameHolder'>
        <select onChange={handleChange}>
          {users?.map((user) => {
            if (user !== userName) {
              return (
                <option
                  value={user}
                  key={user}
                  className='userName'
                  // onClick={() => handleClick(user)}
                >
                  {user}
                </option>
              );
            }
          })}
        </select>
        <button onClick={() => handleClick(person)}>search</button>
      </div>
    </div>
  );
};

export default UserNames;
