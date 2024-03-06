import React, { useState } from 'react';

function FeedbackForm({ onAddFeedback }) {
  const [formData, setFormData] = useState({
    name: '',
    profileImage: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Gere um ID único para o novo feedback
    const id = new Date().getTime();
    const newFeedback = { id, ...formData };
    // Chame a função de retorno de chamada para adicionar o novo feedback
    onAddFeedback(newFeedback);
    // Limpe os campos do formulário após o envio
    setFormData({ name: '', profileImage: '', message: '' });
    // Armazene o feedback no localStorage
    localStorage.setItem(`feedback_${id}`, JSON.stringify(newFeedback));
  };

  return (
    <div className='col-4 bg-color-4 p-5 rounded-3'>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label fs-5">First Name</label>
          <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleInputChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="profileImage" className="form-label fs-5">Photo URL</label>
          <input type="text" className="form-control" id="profileImage" name="profileImage" value={formData.profileImage} onChange={handleInputChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label fs-5">Message</label>
          <textarea className="form-control" id="message" name="message" value={formData.message} onChange={handleInputChange} required></textarea>
        </div>
        <button type="submit" className="btn btn-paynow">SUBMIT</button>
      </form>
    </div>
  );
}

export default FeedbackForm;