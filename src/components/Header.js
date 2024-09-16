import './Header.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from './Home';
import About from './About';

const Header = () => {
    return (
      <Router>
        <header className="header">
          <div className="header-left">
            <Link to="/" className="nav-link">Home</Link>
          </div>
          <div className="header-right">
            <Link  to="/about" className="nav-link">About</Link>
            <Link to="/projects" className="nav-link">Projects</Link>
          </div>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    )
}

export default Header;