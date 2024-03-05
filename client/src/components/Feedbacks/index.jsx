// Feedbacks.js
import React from 'react';
import './index.css';

const Feedbacks = () => {
  const feedbacks = [
    { id: 1, user: 'John Doe', comment: 'Great food and fast delivery!' },
    { id: 2, user: 'Jane Smith', comment: 'The packaging was excellent.' },
    { id: 3, user: 'Bob Johnson', comment: 'Variety of options to choose from.' },
  ];

  return (
    <>
      <h1 id="Feedback">Feedbacks</h1>
    </>
  );
};

export default Feedbacks;
