import React, { useState } from 'react';
import { patchVotes } from '../utils/api';

const Vote = ({ article_id, votes }) => {
  const [votesChange, setVotesChange] = useState(0);

  const incVotes = () => {
    setVotesChange((currVotes) => currVotes + 1);
    patchVotes(article_id, 1).catch((err) => {
      console.log(err);
      setVotesChange(0);
    });
  };

  return (
    <div>
      <p>Votes: {votes + votesChange}</p>
      <button onClick={incVotes}>👍🏼</button>
    </div>
  );
};

export default Vote;
