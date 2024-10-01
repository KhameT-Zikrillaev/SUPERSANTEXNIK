import React, { useState, useEffect } from 'react';
import "./intro.css";
import introimages from '../../assets/images/intro__photo.png'
import { useTranslation } from 'react-i18next';
const Intro = () => {
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
      <section className="Intro">
        <div className="container relativ">
          <img
            className="Intro__circle-photo"
            src={introimages}
            alt=""
          />
          <div className="Intro__text">
            <h1 className="Intro__text-title-1">
              {t('intro.title')}
            </h1>
            <h4 className="Intro__text-title-2">
              {t('intro.subtitle.first')} <br />
              <span>{t('intro.subtitle.second')}</span> {t('intro.subtitle.third')}
            </h4>
            <div className="btn__container">
              <div className="btn__send-1">{t('intro.btn.left')}</div>
              <div className="btn__send-2">{t('intro.btn.right')}</div>
            </div>
            <div className="info__container">

              {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~first-card~~~~~~~~~~~~~~~~~~~~~ */}
              <div className="info__container-card">
                <div className="info__container-card-icon">
                  <div className="info__container-card-background"></div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="#4495D9"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p className="info__container-card-text">
                  {t('intro.check.first.before')} <br />  {t('intro.check.first.after')}
                </p>
              </div>
              {/* ~~~~~~~~~~~~~~~~~~~~~~~~~second-card~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
              <div className="info__container-card">
                <div className="info__container-card-icon">
                  <div className="info__container-card-background"></div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="#4495D9"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p className="info__container-card-text">
                  {t('intro.check.second.before')} <br />{t('intro.check.second.after')}
              
                </p>
              </div>
              {/* ~~~~~~~~~~~~~~~~~~~~~~~~~third-card~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
              <div className="info__container-card">
                <div className="info__container-card-icon">
                  <div className="info__container-card-background"></div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="#4495D9"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p className="info__container-card-text">
                {t('intro.check.third.before')} <br />{t('intro.check.third.after')}
                  
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Intro;
