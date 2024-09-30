import { useTranslation } from 'react-i18next';
import React, { useState, useEffect } from 'react';
import './info.css';

const Info = () => {
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
                        <h4>{t("info.first.sub")}</h4>
                        <h5>{t("info.first.desc")}</h5>
                        <span></span>
                    </div>
                </div>
            </div>

            <div className="Info__cards-card">
                <div className="Info__cards-card-items">
                    <div className="Info__cards-card-items-top">
                        <h3>2</h3> <span></span>
                    </div>
                    <div className="Info__cards-card-items-bottom">
                        <h4>{t("info.second.sub")}</h4>
                        <h5>{t("info.second.desc")}</h5>
                        <span></span>
                    </div>
                </div>
            </div>

            <div className="Info__cards-card">
                <div className="Info__cards-card-items">
                    <div className="Info__cards-card-items-top">
                        <h3>3</h3> <span></span>
                    </div>
                    <div className="Info__cards-card-items-bottom">
                        <h4>{t("info.third.sub")}</h4>
                        <h5>{t("info.third.desc")}</h5>
                        <span></span>
                    </div>
                </div>
            </div>

            <div className="Info__cards-card">
                <div className="Info__cards-card-items">
                    <div className="Info__cards-card-items-top">
                        <h3>4</h3> <span></span>
                    </div>
                    <div className="Info__cards-card-items-bottom">
                        <h4>{t("info.fourth.sub")}</h4>
                        <h5>{t("info.fourth.desc")}</h5>
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