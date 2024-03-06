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
     {/* Information block */}
     <div className="information-block">
        <h2>Our Food Shop</h2>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2462.328000754163!2d-0.4858632877526933!3d51.89147808245567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48764f2a2f9b24a1%3A0xf05b3ede525fb995!2s893%20Dunstable%20Rd%2C%20Luton%20LU4%200HR!5e0!3m2!1sen!2suk!4v1709746491226!5m2!1sen!2suk" width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <p>
          Address: 893 Dunstable Road, Luton Bedfordshire LU4 OHX
        </p>
        <p>
          Opening Hours: Monday-Sunday, 9:00 AM - 10:00 PM
        </p>
        <p>
          Phone: +44 (0)1582 456890
        </p>
        <p>
          Email: Info@sliceandsizzle.com
        </p>
      </div>
      {/* contact form  */}
      <div className="contact">
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
          <button type="submit">Send Message</button>
        </form>
      </div>
    </>
  );
}

export default Contact;


