import React from "react";
import './About.css';

const tools = [
    { name: 'Python', level: 4 }, 
    { name: 'SQL', level: 4 }, 
    { name: 'Django', level: 3 },
    { name: 'R', level: 3 },
    { name: 'React', level: 3 },
    { name: 'Tableau', level: 3 },
    { name: 'Scala', level: 2},
    { name: 'AWS', level: 2},
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
                  <div className="tools-name">{tool.name}</div>
                  <div className="skill-level">
                    {Array(5).fill(0).map((_, i) => (
                      <span key={i} className={`circle ${i < tool.level ? 'filled' : ''}`}></span>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="experience-section">
            <h2 className="tools-h2">Experience</h2>
            <div className="experience-item">
                <h3>Data Scientist - 2022 to Present</h3>
                <p>IBM Hungary International Shared Service Centre Kft., Budapest</p>
                <ul>
                    <li>
                        Mined and analyzed data from company databases to
                        drive optimization and improvement of business
                        strategies.
                    </li>
                    <li>
                        Used predictive modeling to increase and optimize
                        customer experience, revenue generation and other
                        business strategies.
                    </li>
                    <li>
                        Developed processes and tools to monitor and analyze
                        model performance and data accuracy.
                    </li>
                    <li>
                        Undertook preprocessing of structured and unstructured
                        data and analyzed large amounts of information to
                        discover trends and patterns.
                    </li>
                    <li>
                        Used Natural Language Processing to provide solutions to
                        the users’ problems by identifying similar issues in the
                        incident ticketing system.
                    </li>
                </ul>
            </div>

            <div className="experience-item">
                <h3>Software Developer - 2021 to 2022</h3>
                <p>IBM Hungary International Shared Service Centre Kft., Budapest</p>
                <ul>
                    <li>
                        Supported the operation and development of the
                        productivity tools including its infrastructure, interfaces
                        based on system strategy, defined by functional manager,
                        and product owner.
                    </li>
                    <li>
                        Owned user stories, change requests, defects and
                        developed solutions for these.
                    </li>
                    <li>
                        Supported the communication between users, business
                        analyst and development team in case of any system
                        changes and outages.
                    </li>
                    <li>
                        Developed own skills and knowledge in line with business
                        strategy. Built gathered knowledge into team knowledge.
                    </li>
                    <li>
                        Built predictive models and Machine Learning algorithms
                        and presented information by using data visualization
                        techniques.
                    </li>
                </ul>
            </div>

            <div className="experience-item">
                <h3>Business Analyst - 2018 to 2021</h3>
                <p>IBM Hungary International Shared Service Centre Kft., Budapest</p>
                <ul>
                    <li>
                        Supported business processes in various portfolio
                        systems by developing SQL reports and queries.
                    </li>
                    <li>Provided technical and business support for incidents
                        reported by the customers, including complex business
                        and IT analysis.
                    </li>
                    <li>Represented the users’ needs by prioritizing customers
                        and implementing changes based on collected feedback.
                    </li>
                    <li>
                        Ensured that the clients pass the different audit related
                        examinations by providing portfolio reports quickly and
                        accurately.
                    </li>
                    <li>
                        Accelerated the migration of the business team’s data
                        from one site to another using Selenium and Python.
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