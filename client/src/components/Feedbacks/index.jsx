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

    <div className="feedbacks-container">
      <h2>Customer Feedbacks</h2>
      <ul className="feedbacks-list">
        {feedbacks.map((feedback) => (
          <li key={feedback.id} className="feedback-item">
            <p className="user">{feedback.user}</p>
            <p className="comment">{feedback.comment}</p>
          </li>
        ))}
      </ul>
    </div>

  );
};

export default Feedbacks;
