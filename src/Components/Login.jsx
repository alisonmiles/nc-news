import React, { useEffect } from 'react';
import { useContext, useState } from 'react';
import { UserContext } from '../Contexts/UserContext';
import { getUsers } from '../utils/api';
import { Link } from 'react-router-dom';

const Login = () => {
  const { user, setUser } = useContext(UserContext);
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

  const handleClick = (event) => {
    event.preventDefault();
    setUser((currentUser) => {
    console.log(currentUser);
      //return currentUser;
     
    });
  };

  //TODO - ADD ON CLICK TO SETUSER IN CONTEXT WHEN ONE IS CHOSEN
  //ADD FUNCTIONALITY TO MAKE THEM LOG IN BEFORE POSTING COMMENT OR ON HOME PAGE
  //ADD FUNCTIONALITY TO SHOW UP LOGGED IN USER ON NAV BAR
  //ADD FUNCTIONALITY TO CLICK ON USERNAME AND GO TO A LIST OF OTHER ARTICLES BY THAT USER? WOULD NEED TO ADD QUERY IN BACK END.

  if (isLoading) return <p>Loading...</p>;
  return (
    <div>
      <h2>Please choose your profile to log in...</h2>
      <Link to={`/`} onClick={handleClick}>
        <ul className='row mb-3'>
          {users.map(({ username, avatar_url, name }) => {
            return (
              <li key={username} className='col-md-4'>
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
              </li>
            );
          })}
        </ul>
      </Link>
    </div>
  );
};

export default Login;
