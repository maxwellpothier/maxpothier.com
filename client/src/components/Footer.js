import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <Link to="/admin" style={{ textDecoration: 'none', color: 'black' }}>
        <p>Admin</p>
      </Link>
    </div>
  );
};

export default Footer;