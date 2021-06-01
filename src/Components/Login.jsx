import React, { useEffect } from 'react';
import { useState } from 'react';
import { getUsers } from '../utils/api';
import { Link } from 'react-router-dom';
import Error from './Error';

const Login = () => {
  const [users, setUsers] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    getUsers()
      .then((usersFromApi) => {
        setUsers(usersFromApi);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsError(true);
        setIsLoading(true);
      });
  }, []);

  if (isError) return <Error message={'Unknown username'} />;
  if (isLoading) return <p>Loading...</p>;
  return (
    <div className='login-page'>
      <h2 className='welcome-page'>
        Welcome! Please choose your profile to log in, read articles and
        comment...
      </h2>
      <ul className='users-list'>
        {users.map(({ username, avatar_url, name }) => {
          return (
            <div >
              <ul className='users-list'>
              <li key={username} >
                <Link to={`/${username}`} className='link'>
                  <p>
                    Username: {username}
                  </p>
                  <p>
                    Name: {name}
                  </p>
                  <img
                    src={avatar_url}
                    alt='users chosen avatar'
                    className='user-avatar'
                  ></img>
                </Link>
              </li>
            </ul>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Login;
