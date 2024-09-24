import React, { useState } from 'react';
import './footer.css'; // Импортируем стили (по желанию)

// ----------------img------------------------------------
import footerLogo from "/logo.webp"
import footerRightImg from "/footer-right-quest.png"
import footerPhone from "/footer-right-quest.png"
import footerTelegram from "/footer-right-quest.png"
import footerMessage from "/footer-right-quest.png"
// ---------------closed img------------------------------
const Footer = () => {
  return (
    <footer className='footer'>
      <div className="container">
        <div className="footer-wrapper">
          <div className="footer-left">
            <div className="footer-logo">
              <img src={footerLogo} alt="footer-logo" />
              <p className="footer__text">Супер <br /> Сантехник</p>
            </div>
            <div className="footer-contact">
              <p>+998(99) 302-45-12</p>
              <p>+998(99) 302-45-12</p>
            </div>

            <div className="footer-social">
              <a href="/"><img className='footer-phone' src={footerPhone} alt="footer-phone" /></a>
              <a href="/"><img className='footer-telegram' src={footerTelegram} alt="footer-telegram" /></a>
              <a href="/"><img className='footer-message' src={footerMessage} alt="footer-message" /></a>
            </div>
          </div>

          <div className="footer-right">
            <div className="footer-right__img">
              <img src={footerRightImg} alt="footerRightImg" />
            </div>
            <form className='footer-form'>
              <input type="text" placeholder='ИМЯ' />
              <input type="text" placeholder='E-MAIL' />
              <input type="text" placeholder='ТЕЛЕФОН' />
              <input type="text" placeholder='ВАШЕ СООБЩЕНИЕ' />
              <button className='footer-btn' type='submit'>ОТПРАВИТЬ</button>
            </form>
          </div>
        </div>

      </div>


    </footer>
  );
};

export default Footer;