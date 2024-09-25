import React, { useState } from 'react';
import './footer.css'; // Импортируем стили (по желанию)

// ----------------img------------------------------------
import footerLogo from "/logo.webp"
import footerRightImg from "/footer-right-quest.png"
import footerPhone from "/footer-social-phone.png"
import footerTelegram from "/footer-social-telegram.svg"
import footerMessage from "/footer-social-message.png"
import footerBtn from "/footer-submit-btn.png"
// ---------------closed img------------------------------
const Footer = () => {
  return (
    <footer className='footer'>
      <div className="container">
        <div className="footer-wrapper">
          <div className="footer-left">
            <div className="footer-logo">
              <img src={footerLogo} alt="footer-logo" />
              <p className="footer-text">Супер <br /> Сантехник</p>
            </div>
            <div className="footer-contact">
              <a href="tel:+998993024512"><img className='footer-phone' src={footerPhone} alt="footer-phone" /></a>
              <a className='footer-contact__number' href="tel:+998993024512">+998 (99) 444-44-11</a>
              <a className='footer-contact__number' href="tel:+998993024512">+998 (99) 444-44-11</a>
            </div>

            <div className="footer-social">
              <div className="footer-social__telegram">
                <a href="/"><img className='footer-telegram' src={footerTelegram} alt="footer-telegram" /></a>
                <a href="/">Telegram</a>
              </div>
              <div className="footer-social__message">
                <a href="/"><img className='footer-message' src={footerMessage} alt="footer-message" /></a>
                <a href="">super-santexnik@gmail.com</a>
              </div>
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
              <textarea name="" id="" cols="30" rows="10" placeholder='ВАШЕ СООБЩЕНИЕ'></textarea>
              <div className="footer-form__btn">
                <button className='footer-btn' type='submit'><img src={footerBtn} alt="" /></button>
              </div>
            </form>
          </div>
        </div>

      </div>


    </footer>
  );
};

export default Footer;