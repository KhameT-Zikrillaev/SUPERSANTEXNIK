import { useTranslation } from 'react-i18next';
import React, { useState, useEffect } from 'react';
import './faq.css';

const Faq = () => {


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
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <section className='Faq'>
        <div className="container">
          <h1 className='Faq__Title'>{t("faq.title")}</h1>
          <div className="accordion">
            <div className="accordion-item">
              <button
                className={`accordion-header ${activeIndex === 0 ? 'active' : ''}`}
                onClick={() => toggleAccordion(0)}>
              {t("faq.first.sub")}
                <span className={`arrow ${activeIndex === 0 ? 'down' : 'right'}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" stroke='#4495D9' viewBox="0 0 64 64"><g id="Layer_59" data-name="Layer 59"><path d="M37.49,60.5H26.87a.52.52,0,0,1-.41-.21l-20-28a.51.51,0,0,1,0-.58l20-28a.52.52,0,0,1,.41-.21H37.49a.49.49,0,0,1,.44.26.49.49,0,0,1,0,.51L19.84,32,37.91,59.73A.5.5,0,0,1,37.49,60.5Zm-10.36-1h9.44L18.82,32.27a.52.52,0,0,1,0-.54L36.57,4.5H27.13L7.48,32Z" /><path d="M32,57.5H28.41a.49.49,0,0,1-.4-.21l-17.86-25a.48.48,0,0,1,0-.58L28,6.71a.49.49,0,0,1,.4-.21H32a.5.5,0,0,1,.42.77L16.26,32,32.38,56.73A.5.5,0,0,1,32,57.5Zm-3.29-1H31L15.24,32.27a.52.52,0,0,1,0-.54L31,7.5H28.67L11.17,32Z" /><path d="M57.13,60.5H46.51a.51.51,0,0,1-.41-.21l-20-28a.51.51,0,0,1,0-.58l20-28a.51.51,0,0,1,.41-.21H57.13a.5.5,0,0,1,.42.77L39.48,32,57.55,59.73A.5.5,0,0,1,57.13,60.5Zm-10.37-1h9.45L38.46,32.27a.48.48,0,0,1,0-.54L56.21,4.5H46.76L27.12,32Z" /><path d="M51.6,57.5H48.05a.52.52,0,0,1-.41-.21l-17.85-25a.48.48,0,0,1,0-.58l17.85-25a.52.52,0,0,1,.41-.21H51.6a.5.5,0,0,1,.41.77L35.9,32,52,56.73A.5.5,0,0,1,51.6,57.5Zm-3.29-1h2.36L34.88,32.27a.48.48,0,0,1,0-.54L50.67,7.5H48.31L30.81,32Z" /></g></svg>
                </span>
              </button>
              <div
                className="accordion-content"
                style={{ maxHeight: activeIndex === 0 ? '100px' : '0' }}>
                <p>{t("faq.first.desc")}</p>
              </div>
              <span className='accordion-item-linear'></span>
            </div>

            <div className="accordion-item">
              <button
                className={`accordion-header ${activeIndex === 1 ? 'active' : ''}`}
                onClick={() => toggleAccordion(1)}>
                  {t("faq.second.sub")}
                <span className={`arrow ${activeIndex === 1 ? 'down' : 'right'}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" stroke='#4495D9' viewBox="0 0 64 64"><g id="Layer_59" data-name="Layer 59"><path d="M37.49,60.5H26.87a.52.52,0,0,1-.41-.21l-20-28a.51.51,0,0,1,0-.58l20-28a.52.52,0,0,1,.41-.21H37.49a.49.49,0,0,1,.44.26.49.49,0,0,1,0,.51L19.84,32,37.91,59.73A.5.5,0,0,1,37.49,60.5Zm-10.36-1h9.44L18.82,32.27a.52.52,0,0,1,0-.54L36.57,4.5H27.13L7.48,32Z" /><path d="M32,57.5H28.41a.49.49,0,0,1-.4-.21l-17.86-25a.48.48,0,0,1,0-.58L28,6.71a.49.49,0,0,1,.4-.21H32a.5.5,0,0,1,.42.77L16.26,32,32.38,56.73A.5.5,0,0,1,32,57.5Zm-3.29-1H31L15.24,32.27a.52.52,0,0,1,0-.54L31,7.5H28.67L11.17,32Z" /><path d="M57.13,60.5H46.51a.51.51,0,0,1-.41-.21l-20-28a.51.51,0,0,1,0-.58l20-28a.51.51,0,0,1,.41-.21H57.13a.5.5,0,0,1,.42.77L39.48,32,57.55,59.73A.5.5,0,0,1,57.13,60.5Zm-10.37-1h9.45L38.46,32.27a.48.48,0,0,1,0-.54L56.21,4.5H46.76L27.12,32Z" /><path d="M51.6,57.5H48.05a.52.52,0,0,1-.41-.21l-17.85-25a.48.48,0,0,1,0-.58l17.85-25a.52.52,0,0,1,.41-.21H51.6a.5.5,0,0,1,.41.77L35.9,32,52,56.73A.5.5,0,0,1,51.6,57.5Zm-3.29-1h2.36L34.88,32.27a.48.48,0,0,1,0-.54L50.67,7.5H48.31L30.81,32Z" /></g></svg>
                </span>
              </button>
              <div
                className="accordion-content"
                style={{ maxHeight: activeIndex === 1 ? '100px' : '0' }}>
                <p>{t("faq.second.desc")}</p>
              </div>
              <span className='accordion-item-linear'></span>
            </div>

            <div className="accordion-item">
              <button
                className={`accordion-header ${activeIndex === 2 ? 'active' : ''}`}
                onClick={() => toggleAccordion(2)}>
                {t("faq.third.sub")}
                <span className={`arrow ${activeIndex === 2 ? 'down' : 'right'}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" stroke='#4495D9' viewBox="0 0 64 64"><g id="Layer_59" data-name="Layer 59"><path d="M37.49,60.5H26.87a.52.52,0,0,1-.41-.21l-20-28a.51.51,0,0,1,0-.58l20-28a.52.52,0,0,1,.41-.21H37.49a.49.49,0,0,1,.44.26.49.49,0,0,1,0,.51L19.84,32,37.91,59.73A.5.5,0,0,1,37.49,60.5Zm-10.36-1h9.44L18.82,32.27a.52.52,0,0,1,0-.54L36.57,4.5H27.13L7.48,32Z" /><path d="M32,57.5H28.41a.49.49,0,0,1-.4-.21l-17.86-25a.48.48,0,0,1,0-.58L28,6.71a.49.49,0,0,1,.4-.21H32a.5.5,0,0,1,.42.77L16.26,32,32.38,56.73A.5.5,0,0,1,32,57.5Zm-3.29-1H31L15.24,32.27a.52.52,0,0,1,0-.54L31,7.5H28.67L11.17,32Z" /><path d="M57.13,60.5H46.51a.51.51,0,0,1-.41-.21l-20-28a.51.51,0,0,1,0-.58l20-28a.51.51,0,0,1,.41-.21H57.13a.5.5,0,0,1,.42.77L39.48,32,57.55,59.73A.5.5,0,0,1,57.13,60.5Zm-10.37-1h9.45L38.46,32.27a.48.48,0,0,1,0-.54L56.21,4.5H46.76L27.12,32Z" /><path d="M51.6,57.5H48.05a.52.52,0,0,1-.41-.21l-17.85-25a.48.48,0,0,1,0-.58l17.85-25a.52.52,0,0,1,.41-.21H51.6a.5.5,0,0,1,.41.77L35.9,32,52,56.73A.5.5,0,0,1,51.6,57.5Zm-3.29-1h2.36L34.88,32.27a.48.48,0,0,1,0-.54L50.67,7.5H48.31L30.81,32Z" /></g></svg>
                </span>
              </button>
              <div
                className="accordion-content"
                style={{ maxHeight: activeIndex === 2 ? '100px' : '0' }}>
                <p>{t("faq.third.desc")}</p>
              </div>
              <span className='accordion-item-linear'></span>
            </div>

            <div className="accordion-item">
              <button
                className={`accordion-header ${activeIndex === 3 ? 'active' : ''}`}
                onClick={() => toggleAccordion(3)}>
                {t("faq.fourth.sub")}
                <span className={`arrow ${activeIndex === 3 ? 'down' : 'right'}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" stroke='#4495D9' viewBox="0 0 64 64"><g id="Layer_59" data-name="Layer 59"><path d="M37.49,60.5H26.87a.52.52,0,0,1-.41-.21l-20-28a.51.51,0,0,1,0-.58l20-28a.52.52,0,0,1,.41-.21H37.49a.49.49,0,0,1,.44.26.49.49,0,0,1,0,.51L19.84,32,37.91,59.73A.5.5,0,0,1,37.49,60.5Zm-10.36-1h9.44L18.82,32.27a.52.52,0,0,1,0-.54L36.57,4.5H27.13L7.48,32Z" /><path d="M32,57.5H28.41a.49.49,0,0,1-.4-.21l-17.86-25a.48.48,0,0,1,0-.58L28,6.71a.49.49,0,0,1,.4-.21H32a.5.5,0,0,1,.42.77L16.26,32,32.38,56.73A.5.5,0,0,1,32,57.5Zm-3.29-1H31L15.24,32.27a.52.52,0,0,1,0-.54L31,7.5H28.67L11.17,32Z" /><path d="M57.13,60.5H46.51a.51.51,0,0,1-.41-.21l-20-28a.51.51,0,0,1,0-.58l20-28a.51.51,0,0,1,.41-.21H57.13a.5.5,0,0,1,.42.77L39.48,32,57.55,59.73A.5.5,0,0,1,57.13,60.5Zm-10.37-1h9.45L38.46,32.27a.48.48,0,0,1,0-.54L56.21,4.5H46.76L27.12,32Z" /><path d="M51.6,57.5H48.05a.52.52,0,0,1-.41-.21l-17.85-25a.48.48,0,0,1,0-.58l17.85-25a.52.52,0,0,1,.41-.21H51.6a.5.5,0,0,1,.41.77L35.9,32,52,56.73A.5.5,0,0,1,51.6,57.5Zm-3.29-1h2.36L34.88,32.27a.48.48,0,0,1,0-.54L50.67,7.5H48.31L30.81,32Z" /></g></svg>
                </span>
              </button>
              <div
                className="accordion-content"
                style={{ maxHeight: activeIndex === 3 ? '100px' : '0' }}>
                <p>{t("faq.fourth.desc")}</p>
              </div>
              <span className='accordion-item-linear'></span>
            </div>

            <div className="accordion-item">
              <button
                className={`accordion-header ${activeIndex === 3 ? 'active' : ''}`}
                onClick={() => toggleAccordion(4)}>
                {t("faq.fifth.sub")}
                <span className={`arrow ${activeIndex === 4 ? 'down' : 'right'}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" stroke='#4495D9' viewBox="0 0 64 64"><g id="Layer_59" data-name="Layer 59"><path d="M37.49,60.5H26.87a.52.52,0,0,1-.41-.21l-20-28a.51.51,0,0,1,0-.58l20-28a.52.52,0,0,1,.41-.21H37.49a.49.49,0,0,1,.44.26.49.49,0,0,1,0,.51L19.84,32,37.91,59.73A.5.5,0,0,1,37.49,60.5Zm-10.36-1h9.44L18.82,32.27a.52.52,0,0,1,0-.54L36.57,4.5H27.13L7.48,32Z" /><path d="M32,57.5H28.41a.49.49,0,0,1-.4-.21l-17.86-25a.48.48,0,0,1,0-.58L28,6.71a.49.49,0,0,1,.4-.21H32a.5.5,0,0,1,.42.77L16.26,32,32.38,56.73A.5.5,0,0,1,32,57.5Zm-3.29-1H31L15.24,32.27a.52.52,0,0,1,0-.54L31,7.5H28.67L11.17,32Z" /><path d="M57.13,60.5H46.51a.51.51,0,0,1-.41-.21l-20-28a.51.51,0,0,1,0-.58l20-28a.51.51,0,0,1,.41-.21H57.13a.5.5,0,0,1,.42.77L39.48,32,57.55,59.73A.5.5,0,0,1,57.13,60.5Zm-10.37-1h9.45L38.46,32.27a.48.48,0,0,1,0-.54L56.21,4.5H46.76L27.12,32Z" /><path d="M51.6,57.5H48.05a.52.52,0,0,1-.41-.21l-17.85-25a.48.48,0,0,1,0-.58l17.85-25a.52.52,0,0,1,.41-.21H51.6a.5.5,0,0,1,.41.77L35.9,32,52,56.73A.5.5,0,0,1,51.6,57.5Zm-3.29-1h2.36L34.88,32.27a.48.48,0,0,1,0-.54L50.67,7.5H48.31L30.81,32Z" /></g></svg>
                </span>
              </button>
              <div
                className="accordion-content"
                style={{ maxHeight: activeIndex === 4 ? '100px' : '0' }}>
                <p>{t("faq.fifth.desc")}</p>
              </div>
              <span className='accordion-item-linear'></span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
