import './Header.css';

const Header = () => {
    return (
        <header className="header">
        <div className="header-left">
          <a href="#" className="nav-link">Home</a>
        </div>
        <div className="header-right">
          <a href="#" className="nav-link">About</a>
          <a href="#" className="nav-link">Projects</a>
        </div>
      </header>
    )
}

export default Header;
