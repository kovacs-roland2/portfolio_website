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
                <h3>Data Scientist - Apr. 2022 to Present</h3>
                <p>IBM Hungary International Shared Service Centre Kft., Budapest</p>
                <ul>
                    <li>
                      Optimized business strategies and revenue planning by developing a predictive Machine Learning model to forecast customer decisions at the end of their loaned asset lifecycle, driving actionable insights.
                    </li>
                    <li>
                      Preprocessed and analyzed structured and unstructured data to identify trends and recurring errors in the portfolio system, enabling issue resolution and raising stakeholder awareness.
                    </li>
                    <li>
                      Reduced incident ticket volume by 10% through the implementation of NLP solutions to identify and address recurring issues in ticketing system, improving efficiency and user satisfaction.
                    </li>
                    <li>
                     Developed a virtual assistant using Generative AI and Large Language Models (LLMs) to automate SQL report generation.
                    </li>
                    <li>
                      Implemented a clustering model to group sales opportunities, enabling the identification of high value deals worth financing. This solution supported decision-making processes and contributed to a more effective resource allocation.
                    </li>
                </ul>
            </div>
            <div className="experience-item">
                <h3>Business Analyst - Jun. 2018 to Apr. 2022</h3>
                <p>IBM Hungary International Shared Service Centre Kft., Budapest</p>
                <ul>
                    <li>
                      Developed SQL queries to extract and analyze financial data, ensuring audit reports consistently met accuracy standards. Collaborated with stakeholders to communicate technical insights clearly and effectively.
                    </li>
                    <li>
                      Conducted in-depth analysis of customer-reported incidents and provided solutions.
                    </li>
                    <li>
                      Automated data migration processes using Python and Selenium, accelerating transitions and saving team resources.
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