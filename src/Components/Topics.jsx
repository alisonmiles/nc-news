import React, { useEffect, useState } from 'react';
import { getTopics } from '../utils/api';
import { Link } from 'react-router-dom';
import { capitaliseFirstLetter } from '../utils/utilFunctions';

const Topics = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then((topicsFromApi) => {
      setTopics(topicsFromApi);
    });
  }, []);

  return (
    <div>
      <h2>Browse Topics</h2>
      <ul className='row mb-3'>
        {topics.map(({ description, slug }) => {
          return (
            <li key={slug} className='col-md-4 themed-grid-col'>
              <Link to={`/articles/topic/${slug}`}>
                <h3>{capitaliseFirstLetter(slug)}</h3>
                <h4>{description}</h4>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Topics;
