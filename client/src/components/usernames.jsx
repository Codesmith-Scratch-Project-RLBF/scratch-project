import React from 'react';
import './userNames.scss';
const UserNames = (props) => {
  const { users } = props;
  const userName = [
    'Jimmy',
    'John',
    'Shahmar',
    'James',
    'Jimmy2',
    'John2',
    'Shahmar3',
  ];
  return (
    <div className='userNamesContainer'>
      <h2>See other users schedule</h2>
      <div className='nameHolder'>
        {userName.map((user) => {
          return (
            <p key={user} className='userName'>
              ▻ {user}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default UserNames;
