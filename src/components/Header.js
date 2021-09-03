import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  return (
    <div className="container">
      <div className="banner">
        <div className="site-title">
          <h2>Max Pothier</h2>
        </div>
        <div className="header-buttons">
          <div className="blog-button">
            <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
              Blog
            </Link>
          </div>
          <div className="about-button">
            <Link to="/about" style={{ textDecoration: 'none', color: 'black' }}>
              About Me
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;