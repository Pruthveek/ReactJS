import React from "react";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <h1 className="contact-title">Contact Us</h1>
        <p className="contact-text">We would love to hear from you! Reach out to us through the form below.</p>
        <form className="contact-form">
          <label className="contact-label">Name</label>
          <input type="text" className="contact-input" placeholder="Your Name" />

          <label className="contact-label">Email</label>
          <input type="email" className="contact-input" placeholder="Your Email" />

          <label className="contact-label">Message</label>
          <textarea className="contact-textarea" placeholder="Your Message"></textarea>

          <button type="submit" className="contact-button">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
