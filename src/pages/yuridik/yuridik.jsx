import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './yuridik.css';
import photo1 from '../../assets/images/y-photos-1.png'
import photo2 from '../../assets/images/y-photos-2.png'
const Yuridik = () => {
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
            <section className='Yuridik'>
                <div className="container yuridik-con">
                    <div className="Yuridik__photos-con">
                        <img className="Yuridik__photos-con-photo-1" src={photo1} alt="" />
                        <img className="Yuridik__photos-con-photo-2" src={photo2} alt="" />
                    </div>

                    <div className="Yuridik__text-con">
                        <h3 className='Yuridik__text-con-title'>{t('legal.title')}</h3>
                        <p className='Yuridik__text-con-text'>{t('legal.subtitle')}</p>
                        <div className="Yuridik__text-con-btns">
                            <h4 className="Yuridik__text-con-btns-title">{t('legal.desc')}</h4>
                            <button className='Yuridik__text-con-btns-btn' type='submit'>{t('legal.btn')}</button>
                        </div>
                    </div>
                </div>
                <div className="Yuridik__backround">

                </div>
            </section>
        </>
    );
};

export default Yuridik;