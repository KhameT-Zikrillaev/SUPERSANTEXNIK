import React,{ useState } from 'react';
import './header.css'; // Импортируем стили (по желанию)
import Navbar from '../navbar/navbar';

const Header = () => {

    return (
        <header className="header">
            <div className="container">
            <Navbar/>
            </div>
        </header>
    );
};

export default Header;