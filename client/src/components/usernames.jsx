import React from 'react';

const UserNames = (props) => {
  const { userNames } = props;

  return (
    <div className='userNamesContainer'>
      <div>username component</div>
      {/* {userNames.map((userName) => {
        return (
          <p key={userName} className='userName'>
            {userName}
          </p>
        );
      })} */}
    </div>
  );
};

export default UserNames;
