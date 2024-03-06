// Feedback.js

import React, { useState } from 'react';
import './index.css';

const Feedbacks = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [newFeedback, setNewFeedback] = useState('');

  const handleInputChange = (e) => {
    setNewFeedback(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (newFeedback.trim() === '') {
      return;
    }

    setFeedbacks([...feedbacks, newFeedback]);
    setNewFeedback('');
  };

  return (
    <div className="feedback-container">
      <h2>Customer Feedbacks</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Enter your feedback here..."
          value={newFeedback}
          onChange={handleInputChange}
        />
        <button type="submit">Submit Feedback</button>
      </form>
      <div className="feedback-list">
        <h3>Feedback List:</h3>
        {feedbacks.map((feedback, index) => (
          <div key={index} className="feedback-item">
            {index + 1}. {feedback}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feedbacks;

