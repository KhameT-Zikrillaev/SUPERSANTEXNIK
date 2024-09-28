import React,{ useState } from 'react';
import './about.css'; 
import photos from '../../assets/images/666.svg'
const About = () => {

    return (
        <>
         <section className='About'>
          <div className="container">
          <div className="about__content-grid">
          <div className="about__content-grid-card">
            <div className='about__content-grid-card-photos'>
            <img  src={photos} alt="" />
            <h3>1</h3>
            </div>
            <div className="about__content-grid-card-text-con">
               <h4>5+ ЛЕТ</h4>
               <p>Сантехники и электрики с опытом минимум от 5 лет</p>
            </div>
          </div>
          <div className="about__content-grid-card">
            <div className='about__content-grid-card-photos'>
            <img  src={photos} alt="" />
            <h3>2</h3>
            </div>
            <div className="about__content-grid-card-text-con">
               <h4>ГИБКОСТЬ</h4>
               <p>Работаем с юридическими и физичискими лицами</p>
            </div>
          </div>
          <div className="about__content-grid-card">
            <div className='about__content-grid-card-photos'>
            <img  src={photos} alt="" />
            <h3>3</h3>
            </div>
            <div className="about__content-grid-card-text-con">
               <h4>1 ЧАС</h4>
               <p>Приезжаем за 1 час</p>
            </div>
          </div>


          <div className="about__content-grid-card">
            <div className='about__content-grid-card-photos'>
            <img  src={photos} alt="" />
            <h3>4</h3>
            </div>
            <div className="about__content-grid-card-text-con">
               <h4>ГАРАНТИЯ</h4>
               <p>Даем гарантию на выполненную работу</p>
            </div>
          </div>
          
          <div className="about__content-grid-card">
            <div className='about__content-grid-card-photos'>
            <img  src={photos} alt="" />
            <h3>5</h3>
            </div>
            <div className="about__content-grid-card-text-con">
               <h4>&gt;100</h4>
          
               <p>Положительных отзывов ежемесячно</p>
            </div>
          </div>

          <div className="about__content-grid-card">
            <div className='about__content-grid-card-photos'>
            <img  src={photos} alt="" />
            <h3>6</h3>
            </div>
            <div className="about__content-grid-card-text-con">
               <h4>0 СУМ</h4>
               <p>Бесплатный выезд. В случае выполнения заказа</p>
            </div>
          </div>
             
            </div>
          </div>
         </section>
        </>
    );
};

export default About;