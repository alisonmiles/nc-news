import React from 'react';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';

const PostComment = () => {
  const history = useHistory();
  const [newComment, setNewComment] = useState({});
  return (
    <form>
      <label htmlFor='username'>Username:</label>
      <input type='text' id='username' name='u-name' />
      <label htmlFor='comment'>Comment:</label>
      <input type='text' id='comment' name='comment-body' />
      <input type='submit' />
    </form>
  );
};

export default PostComment;
