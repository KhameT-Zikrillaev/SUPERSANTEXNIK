import React, { useState } from 'react';
import './footer.css'; // Импортируем стили (по желанию)

// ----------------img------------------------------------
import footerLogo from "/logo.webp"
import footerRightImg from "/footer-right-quest.png"

// ---------------closed img------------------------------
const Footer = () => {
  return (
    <footer className='footer'>
       <div className="footer-blue__fix-one">

      </div>
      <div className="footer-blue__fix-two">

      </div>
      <div className="container">
        <div className="footer-wrapper">
           <div className="footer-wrapper-con">
           <div className="footer-left">
            <div className="footer-logo">
              <img src={footerLogo} alt="footer-logo" />
              <p className="footer-logo__text">Супер <br /> Сантехник</p>
            </div>
            <div className="footer-social">
              <a href="/" className='footer-social__link'>
               <div className='footer-social__link__img'>
               <svg xmlns="http://www.w3.org/2000/svg"
             class="browsers__contact-link-icon" viewBox="0 0 24 24" width="30" height="30" fill="white" stroke="whiter" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" >
             <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-2.71A19.51 19.51 0 0 1 3.87 12.8 19.8 19.8 0 0 1 1.16 4.37 2 2 0 0 1 3.09 2h3a2 2 0 0 1 2 1.72c.09.66.21 1.31.36 1.95a2 2 0 0 1-.45 1.85l-1.27 1.27a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 1.85-.45c.64.15 1.29.27 1.95.36a2 2 0 0 1 1.72 2z"/>
              </svg>
               </div>
                <h3>+998 (99) 302-45-12</h3>
                </a>
              <a href="/" className='footer-social__link'>
                <div className='footer-social__link__img'>
                <svg class="browsers__browsers-link-icon" width="40" height="40" viewBox="0 0 30 30" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.2764 23.3439L12.6182 18.1807L21.9926 9.73395C22.4076 9.35555 21.9071 9.17246 21.3578 9.50203L9.78633 16.8136L4.78177 15.2268C3.70763 14.9216 3.69542 14.177 5.0259 13.6399L24.5193 6.1209C25.4103 5.7181 26.2647 6.34061 25.923 7.70771L22.6029 23.3439C22.371 24.4547 21.6996 24.7232 20.7719 24.2105L15.7186 20.4754L13.2895 22.8312C13.0088 23.112 12.7769 23.3439 12.2764 23.3439Z"></path>
                </svg>
                </div>
                <h3> t.me/santexnik</h3>
                </a>
              <a href="/" className='footer-social__link'>
              <div className='footer-social__link__img'>
                <svg class="browsers__browsers-link-icon" width="40" height="40" viewBox="0 0 30 30" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.2764 23.3439L12.6182 18.1807L21.9926 9.73395C22.4076 9.35555 21.9071 9.17246 21.3578 9.50203L9.78633 16.8136L4.78177 15.2268C3.70763 14.9216 3.69542 14.177 5.0259 13.6399L24.5193 6.1209C25.4103 5.7181 26.2647 6.34061 25.923 7.70771L22.6029 23.3439C22.371 24.4547 21.6996 24.7232 20.7719 24.2105L15.7186 20.4754L13.2895 22.8312C13.0088 23.112 12.7769 23.3439 12.2764 23.3439Z"></path>
                </svg>
                </div>
                <h3>santexnik@gmail.ru</h3>
                </a>
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
              <textarea name="" id="" cols="30" rows="8" placeholder='ВАШЕ СООБЩЕНИЕ'></textarea>
              <button className='footer-btn' type='submit'>ОТПРАВИТЬ</button>
            </form>
          </div>
           </div>
         
          <img  className='footer-wrapper-img' src="./src/assets/images/footerphoto.png" alt="" />
        </div>
        <div className="foote-company">
            <h3 className='foote-company-text'>© 2023-2024. ООО "Super-Santexnik"</h3>
        </div>

      </div>


    </footer>
  );
};

export default Footer;