import React, { useEffect, useState } from 'react';
import { getArticles } from '../utils/api';
import { Link, useParams } from 'react-router-dom';
import { capitaliseFirstLetter } from '../utils/utilFunctions';

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState();
  const { category } = useParams();

  useEffect(() => {
    getArticles(category, sortBy)
      .then((articlesFromApi) => {
        setArticles(articlesFromApi);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  if (isLoading) return <p>Loading...</p>;
  return (
    <div>
      <h2 className='article-header'>
        {category
          ? `${capitaliseFirstLetter(category)} Articles`
          : `All Articles`}
      </h2>
      <label htmlFor='sort-by'>Sort By:</label>
      <select
        name='sort-by'
        id='sort-by'
        value={sortBy}
        onChange={(event) => setSortBy(event.target.value)}
      >
        <option value=''></option>
        <option value='sort_by=created_at&order_by=desc'>
          Date, newest-oldest
        </option>
        <option value='sort_by=created_at&order_by=asc'>
          Date, oldest-newest
        </option>
        <option value='sort_by=comment_count&order_by=asc'>
          Number of comments, ascending
        </option>
        <option value='sort_by=comment_count&order_by=desc'>
          Number of comments, descending
        </option>
        <option value='sort_by=votes&order_by=asc'>
          Number of votes, ascending
        </option>
        <option value='sort_by=votes&order_by=desc'>
          Number of votes, descending
        </option>
      </select>
      <ul className='row mb-3'>
        {articles.map(
          ({ article_id, title, author, comment_count, topic, votes }) => {
            return (
              <li key={article_id} className='col-md-4 themed-grid-col'>
                <Link to={`/articles/${article_id}`}>
                  <h3>{title}</h3>
                </Link>
                <p>Author: {author}</p>
                <p>
                  <Link to={`/articles/topic/${topic}`}>Topic: {topic}</Link>
                </p>
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
