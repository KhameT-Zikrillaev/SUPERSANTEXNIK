import React, { useState, useEffect } from 'react';
import './navbar.css'; // Импортируем стили (по желанию)

// img
import headerLogo from "/logo.webp";
import { useTranslation } from 'react-i18next';

const Navbar = () => {
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
    const handleLanguageChange = (event) => {
        const language = event.target.value;
        i18n.changeLanguage(language); // Меняем язык через i18next
        localStorage.setItem('language', language); // Сохраняем выбранный язык
    };

    const toggleBurgerMenu = () => {
        setIsBurgerOpen(!isBurgerOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={headerLogo} alt="navbar-logo" />
                <p className="navbar-logo__text">Супер <br /> Сантехник</p>
            </div>
           {/* ~~~~~~~~~~~~~~~~~~~navbar~~~~~~~~~menu */}
            <div className="navbar__menu">
                <ul className="navbar__menu-ul">
                    <li><a href="/">{t('burger.Home')}</a></li> {/* Добавляем перевод для элементов меню */}
                    <li><a href="/about">{t('burger.About')}</a></li>
                    <li><a href="/services">{t('burger.Services')}</a></li>
                    <li><a href="/contact">{t('burger.Contact')}</a></li>
                </ul>
            </div>     
            {/* ~~~~~~~~~~~~~~~~~~~photo vector~~~~~~~~  */}
            <img className="navbar__linear-1" height={'100%'} src="./src/assets/images/nav_linear.png" alt="" />
            <img className="navbar__linear-2" height={'100%'} src="./src/assets/images/nav_linear.png" alt="" />

            {/* ~~~~~~~~~~~~~~~~~~~~lenguage~~~~~~~~~~~~ */}
            <div className="navbar__locales">
                <select onChange={handleLanguageChange} defaultValue={localStorage.getItem('language') || 'en'}>
                    <option value="uz">UZ</option>
                    <option value="ru">RU</option>
                    <option value="en">EN</option>
                </select>
            </div>

            {/* ~~~~~~~~~~~~~~~~~~~burger~~~~~~~~~menu */}
            <div className={`nav__burger-btn ${isBurgerOpen ? 'btnactive' : ''}`} onClick={toggleBurgerMenu}>
                <span className={`sp ${isBurgerOpen ? 'active' : ''}`}></span>
                <span className={`sp ${isBurgerOpen ? 'active' : ''}`}></span>
                <span className={`sp ${isBurgerOpen ? 'active' : ''}`}></span>
            </div>

            <div className={`navbar__menu-burger ${isBurgerOpen ? 'activenavigation' : ''}`}>
                <ul className='navbar__menu-burger-ul'>
                    <li><a href="/">{t('burger.Home')}</a></li> {/* Переводим элементы меню в бургер-меню */}
                    <li><a href="/about">{t('burger.About')}</a></li>
                    <li><a href="/services">{t('burger.Services')}</a></li>
                    <li><a href="/contact">{t('burger.Contact')}</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
