import { useTranslation } from 'react-i18next';
import React, { useState, useEffect } from 'react';


import photos from '../../assets/images/666.svg';
import './about.css';
const About = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const { t, i18n } = useTranslation(); // Добавляем i18n для изменения языка

  // При загрузке компонента проверяем сохраненный язык в localStorage
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage); // Устанавливаем сохраненный язык
    }
  }, [i18n]);

  // Функция для смены языка и сохранения его в localStorage
  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language); // Меняем язык через i18next
    localStorage.setItem('language', language); // Сохраняем выбранный язык
  };

  const toggleBurgerMenu = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };

  return (
    <>
      <section className='About'>
        <div className="container">
          <div className="about__content-grid">
            <div className="about__content-grid-card">
              <div className='about__content-grid-card-photos'>
                <img src={photos} alt="" />
                <h3>1</h3>
              </div>
              <div className="about__content-grid-card-text-con">
                <h4>{t('about.first.sub')}</h4>
                <p>{t('about.first.desc')}</p>
              </div>
            </div>

            <div className="about__content-grid-card">
              <div className='about__content-grid-card-photos'>
                <img src={photos} alt="" />
                <h3>2</h3>
              </div>
              <div className="about__content-grid-card-text-con">
                <h4>{t('about.second.sub')}</h4>
                <p>{t('about.second.desc')}</p>
              </div>
            </div>

            <div className="about__content-grid-card">
              <div className='about__content-grid-card-photos'>
                <img src={photos} alt="" />
                <h3>3</h3>
              </div>
              <div className="about__content-grid-card-text-con">
                <h4>{t('about.third.sub')}</h4>
                <p>{t('about.third.desc')}</p>
              </div>
            </div>

            <div className="about__content-grid-card">
              <div className='about__content-grid-card-photos'>
                <img src={photos} alt="" />
                <h3>4</h3>
              </div>
              <div className="about__content-grid-card-text-con">
                <h4>{t('about.fourth.sub')}</h4>
                <p>{t('about.fourth.desc')}</p>
              </div>
            </div>

            <div className="about__content-grid-card">
              <div className='about__content-grid-card-photos'>
                <img src={photos} alt="" />
                <h3>5</h3>
              </div>
              <div className="about__content-grid-card-text-con">
                <h4>{t('about.fifth.sub')}</h4>
                <p>{t('about.fifth.desc')}</p>
              </div>
            </div>

            <div className="about__content-grid-card">
              <div className='about__content-grid-card-photos'>
                <img src={photos} alt="" />
                <h3>6</h3>
              </div>
              <div className="about__content-grid-card-text-con">
                <h4>{t('about.sixth.sub')}</h4>
                <p>{t('about.sixth.desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
