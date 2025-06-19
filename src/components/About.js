import React from "react";
import './About.css';
import { about_me, tools, experience } from '../content/textContent';

const About = () => {
  return (
    <div className=".about-wrapper">
      <div className="about-container">

        <img src="photo.jpg" alt="Roland Kovacs" className="about-photo" />

        <div className="about-right">
          <h1>About Me</h1>
          <p>
           {about_me}
          </p>

           <div className="tools-section">
            <h2 className="tools-h2">Tools</h2>
            <ul className="tools-ul">
              {tools.map((tool) => (
                <li key={tool.key}>
                  <div className="tools-name">{tool.key}</div>
                  <div className="skill-level">
                    {tool.values}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="experience-section">
            <h2 className="tools-h2">Experience</h2>
            {experience.map((item) => (
              <div className="experience-item" key={item.company}>
                <h3>{item.company}</h3>
                <div className="position-duration">
                  <span className="position">{item.position}</span>
                  <span className="duration">{item.duration}</span>
                </div>
                <ul>
                  {item.description.map((desc) => (
                    <li key={desc}>{desc}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="contact-section">
            <h2 className="tools-h2">Contact Me</h2>
            <div className="contact-links">
              <a href="https://github.com/kovacs-roland2" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/roland-kovacs96/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://medium.com/@rolandkovcs_38012" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-medium"></i>
              </a>
              <a href="mailto:koviroli96@gmail.com">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;