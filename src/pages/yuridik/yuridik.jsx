import React,{ useState } from 'react';
import './yuridik.css'; 
import photo1 from '../../assets/images/y-photos-1.png'
import photo2 from '../../assets/images/y-photos-2.png'
const Yuridik = () => {

    return (
        <>
         <section className='Yuridik'>
          <div className="container yuridik-con">
            <div className="Yuridik__photos-con">
            <img className="Yuridik__photos-con-photo-1" src={photo1} alt="" />
            <img className="Yuridik__photos-con-photo-2" src={photo2} alt="" />
            </div>

            <div className="Yuridik__text-con">
                <h3 className='Yuridik__text-con-title'>ЮРИДИЧЕСКИМ ЛИЦАМ</h3>
                <p className='Yuridik__text-con-text'>Оказываем услуги для юридических лиц и организаций Ташкента и области по устранению засоров, прочистка канализации, электрика и сварочные работы <u>— безналичный расчет</u></p>
                <div className="Yuridik__text-con-btns">
                <h4 className="Yuridik__text-con-btns-title">Бесплатная Онлайн Консультация</h4>
                <a href="" className="Yuridik__text-con-btns-btn">Написать телеграмм</a>
                </div>
            </div>
          </div>
         </section>
        </>
    );
};

export default Yuridik;