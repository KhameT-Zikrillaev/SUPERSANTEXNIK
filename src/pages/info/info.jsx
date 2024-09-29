import React,{ useState } from 'react';
import './info.css'; 

const Info = () => {

    return (
        <>
         <section className='Info'>
           <div className="Info__background"></div>
          <div className="container">
             {/* <h3 className='Info__text'>С  Нами <p>всё просто</p></h3> */}
             <div className="Info__cards">
              
             <div className="Info__cards-card">
                 <div className="Info__cards-card-items">
                  <div className="Info__cards-card-items-top">
                    <h3>1</h3> <span></span>
                  </div>
                  
                  <div className="Info__cards-card-items-bottom">
                    <h4>Принимаем заявку</h4>
                      <h5>Вы позвонили по номеру, оставили заявку на сайте или написали в Telegram Вы позвонили по номеру, оставили заявку на сайте или написали в Telegram
                      </h5>
                      <span ></span>
                  </div>
                 </div>
            </div>

            <div className="Info__cards-card">
                 <div className="Info__cards-card-items">
                  <div className="Info__cards-card-items-top">
                    <h3>2</h3> <span></span>
                  </div>
                  <div className="Info__cards-card-items-bottom">
                    <h4>Принимаем заявку</h4>
                      <h5>Вы позвонили по номеру, оставили заявку на сайте или написали в Telegram</h5>
                      <span ></span>
                  </div>
                 </div>
            </div>

            <div className="Info__cards-card">
                 <div className="Info__cards-card-items">
                  <div className="Info__cards-card-items-top">
                    <h3>3</h3><span></span>
                  </div>
                  <div className="Info__cards-card-items-bottom">
                    <h4>Принимаем заявку</h4>
                      <h5>Вы позвонили по номеру, оставили заявку на сайте или написали в Telegram</h5>
                      <span ></span>
                  </div>
                 </div>
            </div>

            <div className="Info__cards-card">
                 <div className="Info__cards-card-items">
                  <div className="Info__cards-card-items-top">
                    <h3>4</h3>
                  </div>
                  <div className="Info__cards-card-items-bottom">
                    <h4>Принимаем заявку</h4>
                      <h5>Вы позвонили по номеру, оставили заявку на сайте или написали в Telegram</h5>
                  </div>
                 </div>
            </div>

           </div>
          </div>



    
         </section>
        </>
    );
};

export default Info;