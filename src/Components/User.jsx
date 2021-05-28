import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router';
import { getUser } from '../utils/api';
import { UserContext } from '../Contexts/UserContext';

const User = () => {
  const { username } = useParams();
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    getUser(username)
      .then((userFromApi) => {
        setUser(userFromApi);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [username]);

  return (
    <main className='user-display'>
      <h2 className='logged-in-user'>Hello {user.name}</h2>
      <img
        src={user.avatar_url}
        alt='your chosen avatar'
        className='logged-in-user-img'
      ></img>
    </main>
  );
};

export default User;

/* <p>We hope you enjoy reading articles and commenting on Northcoders News. If you'd like to contribute and write your own article please get in touch!</p> */
