// NewsletterForm.js
import React, { useState } from "react";
import "./NewsletterForm.css";
import Footer from "../Footer/Footer";

const NewsletterForm = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the form submission here, for example, by sending the email to your server.
    console.log("Email submitted:", email);
    // Clear the input after submission
    setEmail("");
  };

  return (
    <div className="newsletter-form-container">
      <div className="news-mid-div">
        <h2>Subscribe to Our Newsletter</h2>
        <p>Be the first to know about new collections and exclusive offers.</p>
        <form onSubmit={handleSubmit}>
          <div className="div-label-news">
            <label htmlFor="email" className="label-news">
              Email:
            </label>
          </div>
          <div className="div-label-news">
           <input
              className="input-news"
              type="email"
              required
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button  className='submit-news' type="submit">Subscribe</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewsletterForm;
