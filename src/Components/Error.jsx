import React from 'react';

const Error = ({ message }) => {
  return (
    <div>
      <h3>{message} - please check and try again!</h3>
    </div>
  );
};

export default Error;
