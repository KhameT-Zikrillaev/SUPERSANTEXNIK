import React, { useState } from 'react';
import './footer.css'; // Импортируем стили (по желанию)
import footerLogo from "/logo.webp"

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="container">
        <div className="footer-logo">
          <img src={footerLogo} alt="footer-logo" />
          <p className="footer__text">Супер <br /> Сантехник</p>
        </div>
        <div className="footer__location">
          <h4>location</h4>
        </div>
        <div className="footer__phone">
          <h4>phone</h4>
        </div>
      </div>

      <div className="footer__corporation">
        <p>1231231241414</p>
      </div>
    </footer>
  );
};

export default Footer;