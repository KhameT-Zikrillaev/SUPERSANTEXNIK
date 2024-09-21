import React,{ useState } from 'react';
import './footer.css'; // Импортируем стили (по желанию)


const Footer = () => {
    return (
       <footer className='footer'>
         <div className="container">
           <h3>LOGO</h3>
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