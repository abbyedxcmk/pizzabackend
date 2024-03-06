import React from "react";
import './index.css'

function Contact() {
  return (
    <>
      <div className="contact my-5">
        <h1>Contact</h1>
        <p>Have Questions? Reach out to us!</p>

        <form>
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" id="name" required />
          <label htmlFor="email">Email: </label>
          <input type="email" name="email" id="email" required />
          <label htmlFor="message">Message: </label>
          <textarea
            name="message"
            id="message"
            cols="20"
            rows="4"
            required
          ></textarea>

          <button className="bg-color-2" type="submit">Send Message</button>
        </form>
      </div>
    </>
  );
}

export default Contact;
