import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  return (
    <div className="navbar">
      <div className="nav-left">
        <span className="nav-title">Maxwell Pothier</span>
      </div>
      <div className="nav-center">
        <ul className="route-buttons">
          <Link
            to="/"
            style={{
              textDecoration: 'none',
              color: 'black'
            }}
          >
            <li>Blog</li>
          </Link>
          <Link
            to="/about"
            style={{
              textDecoration: 'none',
              color: 'black'
            }}
          >
            <li>About Me</li>
          </Link>
        </ul>
      </div>
      <div className="nav-right">
        <div className="header-links">
          <a
            className="nav-icon"
            target="_blank"
            href="https://twitter.com/MaxPothier"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter-square"></i>
          </a>
          <a
            className="nav-icon"
            target="_blank"
            href="https://www.linkedin.com/in/max-pothier-6250311b7/"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            className="nav-icon"
            target="_blank"
            href="https://github.com/maxwellpothier"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github-square"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;