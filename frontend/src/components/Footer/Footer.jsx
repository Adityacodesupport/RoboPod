// Footer.js

import React from 'react';

const Footer = () => {
  return (
    <footer>
      {/* <p>&copy; 2024 Your Website Name. All Rights Reserved.</p> */}
      <p><a href="/privacy">Privacy Policy</a> | <a href="/terms">Terms of Service</a></p>
      <p>Contact us: <a href="mailto:info@yourwebsite.com">info@yourwebsite.com</a></p>
      <p>Follow us: 
        <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">Facebook</a> | 
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">Twitter</a>
      </p>
    </footer>
  );
};

export default Footer;
