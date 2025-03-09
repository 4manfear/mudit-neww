import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import "./Contact.css";

function Contact() {
  const form = useRef();
  const [feedback, setFeedback] = useState({ success: false, message: "" });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_ebsmq0m',      // Replace with your actual Service ID
      'template_cq7ol8a',     // Replace with your actual Template ID
      form.current, 
      'wz4S11F5RIi5UDhNH'       // Replace with your actual Public Key (User ID)
    )
      .then((result) => {
        setFeedback({ success: true, message: "Message sent successfully!" });
        e.target.reset();
        setTimeout(() => setFeedback({ success: false, message: "" }), 5000);
      }, (error) => {
        setFeedback({ success: false, message: "Something went wrong. Please try again." });
        setTimeout(() => setFeedback({ success: false, message: "" }), 5000);
      });
  };

  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <div className="form-group">
          <label htmlFor="user_name">Name</label>
          <input 
            type="text" 
            id="user_name" 
            name="user_name" 
            required 
            placeholder="Your Name" 
          />
        </div>
        <div className="form-group">
          <label htmlFor="user_email">Email</label>
          <input 
            type="email" 
            id="user_email" 
            name="user_email" 
            required 
            placeholder="Your Email" 
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea 
            id="message" 
            name="message" 
            required 
            placeholder="Your Message"
          ></textarea>
        </div>
        <button type="submit">Send Message</button>
        {feedback.message && (
          <p className={feedback.success ? "success-msg" : "error-msg"}>
            {feedback.message}
          </p>
        )}
      </form>
    </div>
  );
}

export default Contact;
