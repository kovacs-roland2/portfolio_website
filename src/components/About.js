import React from "react";
import './About.css';

const tools = [
    { key: 'Programing languages:', values: "Python, R, SQL" }, 
    { key: 'Frameworks:', values: "Django, scikit-learn, Tensorflow, Pytorch" }, 
    { key: 'Data visualization:', values: "Tableau, PowerBI" },
    { key: 'Tools/Platforms:', values: "AWS, Git, Docker, Pandas, Numpy, Matplotlib" },
  ];

const About = () => {
  return (
    <div className=".about-wrapper">
      <div className="about-container">

        <img src="photo.jpg" alt="Roland Kovacs" className="about-photo" />

        <div className="about-right">
          <h1>About Me</h1>
          <p>
          I'm Roland Kovacs, a Data Scientist with a passion for turning raw data into actionable insights. I got a Master's degree in Business Informatics from Budapest University of Technology and Economics, with a specialization in using machine learning, data analysis and statistical techniques to solve complex problems. I have experience working at IBM Hungary where I built predictive models, developed web applications, and applied Natural Language Processing to optimize user experience. I'm comfortable in Python, Machine Learning, React, and Data Visualization tools. In addition to technical expertise, I also have a strong interest in football analysis. I have written research papers on player transfers and career development. When I'm not working with data I also enjoy playing football, hiking, and exploring sports analytics.
          </p>

           <div className="tools-section">
            <h2 className="tools-h2">Tools</h2>
            <ul className="tools-ul">
              {tools.map((tool, index) => (
                <li key={index}>
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
            <div className="experience-item">
                <h3>Data Scientist - Sept. 2022 to Present</h3>
                <p>IBM Hungary International Shared Service Centre Kft., Budapest</p>
                <ul>
                    <li>
                      Minded and analyzed data from company
                      databases to optimize business strategies,
                      enhance customer experience, and drive
                      revenue growth using predictive modeling.
                    </li>
                    <li>
                      Preprocessed structured and unstructured data
                      to uncover trend and monitored model
                      performances.
                    </li>
                    <li>
                      Leveraged Natural Language Processing to
                      identify recurring issues in incident ticketing
                      systems and provide targeted solutions to
                      users.
                    </li>
                </ul>
            </div>

            <div className="experience-item">
                <h3>Software Developer - Apr. 2022 to Sept. 2022</h3>
                <p>IBM Hungary International Shared Service Centre Kft., Budapest</p>
                <ul>
                    <li>
                      Supported the development and operation of a
                      web application, managing infrastructure,
                      interfaces, and system changes in collaboration
                      with stakeholders.
                    </li>
                    <li>
                      Managed user stories, change requests, and
                      incidents, delivering solutions while facilitating
                      communication between users, analysts, and
                      developers.
                    </li>
                    <li>
                        Built predictive models and Machine Learning algorithms
                        and presented information by using data visualization
                        techniques.
                    </li>
                </ul>
            </div>

            <div className="experience-item">
                <h3>Business Analyst - Jun. 2018 to Apr. 2022</h3>
                <p>IBM Hungary International Shared Service Centre Kft., Budapest</p>
                <ul>
                    <li>
                      Developed SQL reports to support business
                      processes and ensure accurate portfolio
                      reporting for audit examinations.
                    </li>
                    <li>
                      Provided technical and business support for
                      customer-reported incidents, conducting in-
                      depth analysis and implementing changes.
                    </li>
                    <li>
                      Streamlined data migration processes using
                      Selenium and Python, accelerating transitions
                      for the business teams.
                    </li>
                </ul>
            </div>
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