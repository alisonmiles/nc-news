import React, { useContext } from 'react';

import { UserContext } from '../Contexts/UserContext';

const User = () => {
  const { user } = useContext(UserContext);

  return (
    <main className='navbar'>
      <h2 className='logged-in-user'>Hello {user.username}!</h2>
      <img
        src={user.avatar_url}
        alt='your chosen avatar'
        className='logged-in-user-img'
      ></img>
    </main>
  );
};

export default User;
