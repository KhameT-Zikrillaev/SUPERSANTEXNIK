import React, { useState, useEffect } from 'react';

import './index.css'
import './variables.css'

import Header from './components/layouts/header'
import Main from './components/layouts/main'
import Footer from './components/layouts/footer'
import { useTranslation } from 'react-i18next';

function App() {
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
  return (
    <>
<div className="wrapper">
  <Header/>
  <Main/>
  <Footer/>
</div>
    </>
  )
}

export default App
