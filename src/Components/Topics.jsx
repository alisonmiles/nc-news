import React, { useEffect, useState } from 'react';
import { getTopics } from '../utils/api';
import { Link, useParams } from 'react-router-dom';

const Topics = () => {
  const [topics, setTopics] = useState([]);
  const [topic, setTopic] = useState([]);

  useEffect(() => {
    getTopics().then((topicsFromApi) => {
      setTopics(topicsFromApi);
    });
  }, []);

  const handleClick = (event) => {
    event.preventDefault();
    setTopic(topic);
  };
  //how to get the slug from in order to setTopic? Can then invoke setTopic with the topic, and redirect to articles?topic=XXX


  console.log(topic);

  return (
    <div>
      <h2>Browse Topics</h2>
      <ul className='row mb-3'>
        {topics.map(({ description, slug }) => {
          return (
            <li key={slug} className='col-md-4 themed-grid-col'>
              <Link to={`/articles?topic=${topic}`} onClick={handleClick}>
                <h3>{slug}</h3>
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
