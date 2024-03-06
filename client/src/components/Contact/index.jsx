import React, {useState} from "react";
// import emailjs from "@emailjs/browser";

function Contact() {
   // State variables for form inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Emailjs service ID, template ID and Public Key
    const serviceId = service_mu1nk0l;
    const templateId = template_867on8m;
    const publickey = aq2UxuasCWJTe-YuP;

    //New object that contains dynamic template params
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Rashid",
      message: message,
    };

    // Sending the email using emailjs
    emailjs
      .send(serviceId, templateId, templateParams, publickey)
      .then((result) => {
        console.log("Email sent successfully!", result);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  return (
    <>
      <div className="contact my-5">
        <h1>Contact</h1>
        <p>Have Questions? Reach out to us!</p>

        <form onSubmit={handleSubmit} className="emailForm">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            cols="20"
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>

          <button className="bg-color-2" type="submit">Send Message</button>
        </form>
      </div>
    </>
  );
}

export default Contact;


