import React from "react";
import "./About.css"; // Reusing the styles from About.css

const Contact = () => {
  return (
    <div className="about-container">
      {/* Reusing the about-container class */}
      <h1>Contact Us</h1>
      <p>
        We'd love to hear from you! Whether you have questions, feedback, or
        suggestions, please don't hesitate to reach out.
      </p>
      <h2>Get in Touch</h2>
      <ul>
        <li>
          Email:{" "}
          <a href="mailto:zhdatascientist@gmail.com">
            zhdatascientist@gmail.com
          </a>
        </li>
      </ul>
      <h2>Feedback</h2>
      <p>
        Your feedback is crucial in helping us improve Linguico. If you've
        encountered any issues or have ideas for new features, please let us
        know.
      </p>
      <h2>Support</h2>
      <p>Need help with the app? Send us an email.</p>
    </div>
  );
};

export default Contact;
