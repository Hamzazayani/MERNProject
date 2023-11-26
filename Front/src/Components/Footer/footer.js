import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2>Contact Us</h2>
          <p>Email: zayanihamza94@gmail.com</p>
          <p>Phone: +216-55-229-907</p>
        </div>
        <div className="footer-section1">
          <h2>Quick Links</h2>
          <ul>
           <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Health Care Online Pharmacy</p>
      </div>
    </footer>
  );
}

export default Footer;
