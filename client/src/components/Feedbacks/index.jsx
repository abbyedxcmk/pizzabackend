import React, { useEffect, useState } from 'react';
import Elon from '../../assets/reviews/elon-profile.webp';
import feedbacksData from '../../feedbacksData.json';
import FeedbackForm from '../FeedbackForm';

function Feedbacks() {
  const [combinedFeedbacks, setCombinedFeedbacks] = useState([]);
  const [showForm, setShowForm] = useState(false); // State to control form display

  // Function to combine feedbacks from localStorage with feedbacksData
  const combineFeedbacks = () => {
    const localStorageFeedbacks = Object.values(localStorage).filter(item => item.startsWith('feedback_')).map(item => JSON.parse(item));
    const allFeedbacks = [...feedbacksData, ...localStorageFeedbacks];
    // Remove feedbacks duplicados com base no ID
    const uniqueFeedbacks = allFeedbacks.filter((feedback, index, self) =>
      index === self.findIndex((t) => (
        t.id === feedback.id
      ))
    );
    setCombinedFeedbacks(uniqueFeedbacks);
  };

  // Updates the combined list of feedbacks every time the page is loaded
  useEffect(() => {
    combineFeedbacks();
  }, []);

  const handleAddFeedback = (newFeedback) => {
    // Logic for adding new feedback to your feedback list
    console.log('Novo feedback:', newFeedback);
    // Adds the new feedback to the combined feedback list
    setCombinedFeedbacks(prevFeedbacks => [...prevFeedbacks, newFeedback]);
  };

  const toggleFormVisibility = () => {
    setShowForm(!showForm); // Toggle between showing and hiding the form
  };

  return (
<div id="Feedback">
    <div className="feedbacks-container">
      <h2>Customer Feedbacks</h2>
      <ul className="feedbacks-list">
        {combinedFeedbacks.map((feedback) => (
          <li key={feedback.id} className="feedback-item">
            <p className="user">{feedback.user}</p>
            <p className="comment">{feedback.comment}</p>
          </li>
        ))}
        </ul>
      </div>
      <div className='row gap-5 px-md-5 px-lg-0 mt-5'>
        {!showForm && ( // Render the button only if the form is not visible
          <button className="col-2 btn fs-5 p-3 btn-feedback" onClick={toggleFormVisibility}>LEAVE US YOUR FEEDBACK</button>
        )}
        {showForm && <FeedbackForm onAddFeedback={handleAddFeedback} />}
      </div>
    </div>

  );
};

export default Feedbacks;

