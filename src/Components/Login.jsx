import React, { useEffect } from 'react';
import { useState } from 'react';
import { getUsers } from '../utils/api';
import { Link } from 'react-router-dom';

const Login = () => {
  const [users, setUsers] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getUsers()
      .then((usersFromApi) => {
        setUsers(usersFromApi);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  //ADD FUNCTIONALITY TO MAKE THEM LOG IN BEFORE POSTING COMMENT OR ON HOME PAGE

  //ADD FUNCTIONALITY TO CLICK ON USERNAME AND GO TO A LIST OF OTHER ARTICLES BY THAT USER? WOULD NEED TO ADD QUERY IN BACK END.

  if (isLoading) return <p>Loading...</p>;
  return (
    <div>
      <h2>
        Welcome! Please choose your profile to log in, read articles and
        comment...
      </h2>
      <ul className='login-page'>
        {users.map(({ username, avatar_url, name }) => {
          return (
            <li key={username} className='col-md-4'>
              <Link to={`/login/${username}`}>
                <p>
                  <strong>Username: {username}</strong>
                </p>
                <p>
                  <strong>Name: {name}</strong>
                </p>
                <img
                  src={avatar_url}
                  alt='users chosen avatar'
                  className='user-avatar'
                ></img>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Login;
