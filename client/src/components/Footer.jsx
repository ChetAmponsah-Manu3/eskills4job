import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <ul>
            <li>calvarycollege@gmail.com</li>
            <li>Phone: 054 456 7890</li>
            <li>Fax: +123 456 7891</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Our Address</h3>
          <ul>
            <li>1234 Main St.</li>
            <li>Tamale, Northern Region, 12345</li>
            <li>Ghana</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>FAQs</h3>
          
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
