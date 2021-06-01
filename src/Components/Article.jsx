import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getArticle, getComments } from '../utils/api';
import CommentAdder from './CommentAdder';
import Vote from './Vote';
import Error from './Error';

const Article = () => {
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [comments, setComments] = useState([]);
  const { article_id } = useParams();

  useEffect(() => {
    getArticle(article_id)
      .then((articleFromApi) => {
        setArticle(articleFromApi);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsError(true);
        setIsLoading(true);
      });
  }, [article_id]);

  useEffect(() => {
    getComments(article_id)
      .then((commentsFromApi) => {
        setComments(commentsFromApi);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [article_id]);

  if (isError) return <Error message={"Sorry, that's not a correct article reference "} />;
  if (isLoading) return <p>Loading...</p>;
  return (
    <main className='article'>
      <div>
        <h1>{article.title}</h1>
        <h2>Author: {article.author}</h2>
        <h2>
          <Link to={`/topic/${article.topic}`} className='link'>Topic: {article.topic}</Link>
        </h2>
        <h2>
          <Vote article_id={article_id} votes={article.votes} />
        </h2>
        <h2>Comments: {article.comment_count}</h2>
        <p className='article-body'>{article.body}</p>
      </div>
      <div>
        <h4>
          Let us know your thoughts here:{' '}
          <CommentAdder setComments={setComments} />
        </h4>
      </div>
      <div>
        <h4>Comments:</h4>
        {comments.map(({ author, votes, body, created_at, comment_id }) => {
          let date = new Date(created_at).toLocaleDateString();
          return (
            <li key={comment_id} className='comment-list'>
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
