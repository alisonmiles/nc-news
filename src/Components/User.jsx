import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router';
import { getUser } from '../utils/api';
import { UserContext } from '../Contexts/UserContext';
import { Link } from 'react-router-dom';

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
  }, [username, setUser]);

  return (
    <main className='loggedin-page'>
      <img
        src='https://images.unsplash.com/photo-1585829365295-ab7cd400c167?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80'
        className='welcome-img'
      ></img>
      <h2 className='loggedin-page'>
        Hello {user.name}. Welcome back to Northcoders News!
        <Link to='/articles' className='link'>
          <h3 className='loggedin-page'>
            Why not start by clicking here to view our current articles? Please
            share your views by leaving a comment, or get in touch if you'd like
            to write for us.
          </h3>
        </Link>
      </h2>
    </main>
  );
};

export default User;
