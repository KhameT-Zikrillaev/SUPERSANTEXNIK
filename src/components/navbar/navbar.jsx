import React, { useState } from 'react';
import './Navbar.css'; // Импортируем стили (по желанию)


// img
import headerLogo from "/logo.webp"

const Navbar = () => {
    const [isBurgerOpen, setIsBurgerOpen] = useState(false);

    const toggleBurgerMenu = () => {
        setIsBurgerOpen(!isBurgerOpen);
    };
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={headerLogo} alt="navbar-logo" />
                <p className="navbar-logo__text">Супер <br /> Сантехник</p>
            </div>

            <div className="navbar__menu">
                <ul className="navbar__menu-ul">
                    <li><a href="/">Главная</a></li>
                    <li><a href="/about">О нас</a></li>
                    <li><a href="/services">Услуги</a></li>
                    <li><a href="/contact">Контакты</a></li>
                </ul>
            </div>
            <img className="navbar__linear-1" height={'100%'} src="./src/assets/images/nav_linear.png" alt="" />
            <img className="navbar__linear-2" height={'100%'} src="./src/assets/images/nav_linear.png" alt="" />
           

            {/* ~~~~~~~~~~~~~~~~~~~burger~~~~~~~~~menu */}
            <div className={`nav__burger-btn ${isBurgerOpen ? 'btnactive' : ''}`} onClick={toggleBurgerMenu}>
                <span className={`sp ${isBurgerOpen ? 'active' : ''}`}></span>
                <span className={`sp ${isBurgerOpen ? 'active' : ''}`}></span>
                <span className={`sp ${isBurgerOpen ? 'active' : ''}`}></span>
            </div>

            <div className={`navbar__menu-burger ${isBurgerOpen ? 'activenavigation' : ''}`}>
                <ul className='navbar__menu-burger-ul'>
                    <li><a href="/">Главная</a></li>
                    <li><a href="/about">О нас</a></li>
                    <li><a href="/services">Услуги</a></li>
                    <li><a href="/contact">Контакты</a></li>
                </ul>
            
            </div>


        </nav>
    );
};

export default Navbar;