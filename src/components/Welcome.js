import './Welcome.css';
import Header from './Header';

const Welcome = () => {
  return (
    <>
      <Header/>
      <div className='welcome-wrapper'>
        <div className="welcome-container">
          <div className='text-content'>
            <h1 className="welcome-title">Hello, I am Roland.</h1>
            <p className="welcome-description">
            I'm a Data Scientist with a strong background in information technology and services. I specialize in gathering, cleaning, and analyzing data using 
            advanced statistical and machine learning techniques. With skills in Python, Machine Learning, Data Analysis, and React, I bring technical expertise to 
            solving complex data problems. I hold a Master's degree in Business Informatics from Budapest University of Technology and Economics and have a keen 
            interest in football analytics.
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
          <img src="./photo.jpg" alt="Roland Kovacs" className="profile-photo" />
        </div>
      </div>
    </>
  
  );
};

export default Welcome;
