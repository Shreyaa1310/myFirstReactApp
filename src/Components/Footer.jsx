// Footer.js
import React from "react";
import "./Footer.css"; // Import CSS styling for the footer

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© Company Name. All Rights Reserved.</p>
        <div className="footer-links">
          <a href="/terms">Terms of Service</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/contact">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
