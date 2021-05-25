import React, { useEffect } from 'react';
import { getArticles } from '../utils/api';
import { Link } from 'react-router-dom';

const Articles = ({ articles, setArticles }) => {
  useEffect(() => {
    getArticles().then((articlesFromApi) => {
      setArticles(articlesFromApi);
    });
  }, []);

  return (
    <div>
      <h2 className='article-header'>All Articles</h2>
      <ul className='row mb-3'>
        {articles.map(
          ({ article_id, title, author, comment_count, topic, votes }) => {
            return (
              <li key={article_id} className='col-md-4 themed-grid-col'>
                <Link to={`/articles/${article_id}`}>
                  <h3>{title}</h3>
                </Link>
                <p>Author: {author}</p>
                <p>Topic: {topic}</p>
                <p>Votes: {votes}</p>
                <p>Comments: {comment_count}</p>
              </li>
            );
          }
        )}
      </ul>
    </div>
  );
};

export default Articles;
