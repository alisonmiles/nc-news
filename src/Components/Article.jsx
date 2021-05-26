import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getArticle, getComments } from '../utils/api';
import PostComment from './PostComment';
import Vote from './Vote';

const Article = () => {
  const [article, setArticle] = useState({});
  const [comments, setComments] = useState([]);
  const { article_id } = useParams();

  useEffect(() => {
    getArticle(article_id).then((articleFromApi) => {
      setArticle(articleFromApi);
    });
  }, [article_id]);

  useEffect(() => {
    getComments(article_id).then((commentsFromApi) => {
      setComments(commentsFromApi);
    });
  }, [article_id]);

  return (
    <main className='article'>
      <div>
        <h1>{article.title}</h1>
        <h2>Author: {article.author}</h2>
        <h2>Topic: {article.topic}</h2>
        <h2>
          <Vote article_id={article_id} votes={article.votes} />
        </h2>
        <h2>Comments: {article.comment_count}</h2>
        <p className='article-body'>{article.body}</p>
      </div>
      <div>
        <h4>
          Let us know your thoughts here: <PostComment />
        </h4>
      </div>
      <div>
        <h4>Comments:</h4>
        {comments.map(({ author, votes, body, created_at, comment_id }) => {
          let date = new Date(created_at).toLocaleDateString();
          return (
            <li key={comment_id} className='row mb-3'>
              <p>
                <strong>Author: {author}</strong>
              </p>
              <p>
                <strong>Date: {date}</strong>
              </p>
              <p>
                <strong>Votes: {votes}</strong>
              </p>
              <p>Comment: {body}</p>
            </li>
          );
        })}
      </div>
    </main>
  );
};

export default Article;
