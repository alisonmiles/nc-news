import React from 'react';
import { useState, useContext } from 'react';
import { postComment } from '../utils/api';
import { useParams } from 'react-router-dom';
import { UserContext } from '../Contexts/UserContext';

const CommentAdder = ({ setComments }) => {
  const { user } = useContext(UserContext);
  const { article_id } = useParams();
  const [newComment, setNewComment] = useState({
    username: user.username,
    body: '',
  });

  console.log(user, newComment);

  const handleSubmit = (event) => {
    event.preventDefault();
    postComment(article_id, newComment)
      .then((postedComment) => {
        setComments((currentComments) => {
          return [postedComment, ...currentComments];
        });
      })
      .catch((err) => {
        console.log(err);
      });
    setNewComment({
      username: user.username,
      body: '',
    });
  };

  return (
    <form className='comment-form' onSubmit={handleSubmit}>
      <label htmlFor='username'>Username:</label>
      <input readOnly type='text' id='username' placeholder={user.username} />
      <label htmlFor='comment'>Comment:</label>

      <input
        required
        type='text'
        id='comment'
        value={newComment.body}
        onChange={(event) => {
          setNewComment((currNewComment) => {
            return { ...currNewComment, body: event.target.value };
          });
        }}
      />
      <button>Submit</button>
    </form>
  );
};

export default CommentAdder;
