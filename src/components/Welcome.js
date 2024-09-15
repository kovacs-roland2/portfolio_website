import React from 'react';
import './Welcome.css';

const Welcome = () => {
  return (
    <div className="welcome-container">
      <h1 className="welcome-title">Hello, I'm Roland.<br />I'm a Data Scientist.</h1>
      <p className="welcome-description">
        I'm a Data Scientist graduate with a demonstrated history of working in the information technology and services industry. Familiar with gathering, cleaning, and organizing data for use. 
        Advanced understanding of statistical, algebraic, and other analytical techniques. Skilled in Python, Machine Learning, Selenium, Data Analysis, and React. 
        Strong research professional with a Master's degree focused in Business Informatics from Budapest University of Technology and Economics. Interested in sport analytics.
      </p>
      <div className="contact-section">
        <a href="https://github.com/kovacs-roland2" target="_blank" rel="noopener noreferrer" className="contact-link">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/roland-kovacs96/" target="_blank" rel="noopener noreferrer" className="contact-link">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://medium.com/@rolandkovcs_38012" target="_blank" rel="noopener noreferrer" className="contact-link">
          <i className="fab fa-medium"></i>
        </a>
        <a href="mailto:koviroli96@gmail.com" className="contact-link">
          <i className="fas fa-envelope"></i>
        </a>
      </div>
    </div>
  );
};

export default Welcome;
