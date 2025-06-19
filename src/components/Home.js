import './Home.css';

const Home = () => {
  return (
    <>
      <div className='welcome-wrapper'>
        <div className="welcome-container">
          <div className='text-content'>
            <h1 className="welcome-title">Hello, I am Roland.</h1>
            <p className="welcome-description">
            Data Scientist with 3 years of experience delivering predictive Machine Learning models, Natural Language Processing systems and Generative AI solutions. Skilled in building and maintaining statistical forecasting models, extracting insights from large structured and unstructured datasets, and communicating results to analytical and non-analytical business partners and stakeholders. Experienced in the full data science lifecycle, from problem scoping and data preparation to model deployment and performance tracking. Passionate about using data to solve complex problems, drive business value, and continuously improve decision-making processes.
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

export default Home;
