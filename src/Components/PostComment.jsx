import React from 'react';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { postComment } from '../utils/api';
import { useParams } from 'react-router-dom';

const PostComment = () => {
  const history = useHistory();
  const { article_id } = useParams();
  const [newComment, setNewComment] = useState({
    username: '',
    body: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    postComment(article_id, newComment)
      .then(() => {
        history.push(`/articles`);
      })
      .catch((err) => {
        console.log(err);
      });
    setNewComment({
      username: '',
      body: '',
    });
  };

  return (
    <form className='comment-form' onSubmit={handleSubmit}>
      <label htmlFor='username'>Username:</label>
      <input
        required
        type='text'
        id='username'
        value={newComment.username}
        onChange={(event) => {
          setNewComment((currNewComment) => {
            return { ...currNewComment, username: event.target.value };
          });
        }}
      />
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

export default PostComment;
