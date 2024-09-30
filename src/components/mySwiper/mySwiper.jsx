import React, { useState, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import './myswiper.css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import swiperphoto1 from '../../assets/images/photos-1.png'
import swiperphoto2 from '../../assets/images/photos-2.png'
import swiperphoto3 from '../../assets/images/photos-3.png'
import swiperphoto4 from '../../assets/images/photos-4.png'
import swiperphoto5 from '../../assets/images/photos-5.png'
// import required modules
import { Pagination, Navigation } from 'swiper/modules';

import { useTranslation } from 'react-i18next';

export default function App() {
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
      <div className='Swipers'>
        <div className="container swip">
          <Swiper
            slidesPerView={1}
            spaceBetween={50}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
            breakpoints={{
              768: {
                slidesPerView: 2, // 2 слайда
                spaceBetween: 50,
              },

              1024: {
                slidesPerView: 3, // 3 слайда
                spaceBetween: 50,
              },
            }}
          >
            <SwiperSlide className='swiper-card'>
              <div className='swiper-card__img-circle'></div>
              <div className='swiper-card__img-photos'><img src={swiperphoto1} alt="" /></div>
              <h3>{t('swiper.first.sub')}</h3>
              <p>{t('swiper.first.desc')}</p>
            </SwiperSlide>

            <SwiperSlide className='swiper-card'>
              <div className='swiper-card__img-circle'></div>
              <div className='swiper-card__img-photos'><img src={swiperphoto2} alt="" /></div>
              <h3>{t('swiper.second.sub')}</h3>
              <p>{t('swiper.second.desc')}</p>
            </SwiperSlide>

            <SwiperSlide className='swiper-card'>
              <div className='swiper-card__img-circle'></div>
              <div className='swiper-card__img-photos'><img src={swiperphoto3} alt="" /></div>
              <h3>{t('swiper.third.sub')}</h3>
              <p>{t('swiper.third.desc')}</p>
            </SwiperSlide>

            <SwiperSlide className='swiper-card'>
              <div className='swiper-card__img-circle'></div>
              <div className='swiper-card__img-photos'><img src={swiperphoto4} alt="" /></div>
              <h3>{t('swiper.fourth.sub')}</h3>
              <p>{t('swiper.fourth.desc')}</p>
            </SwiperSlide>

            <SwiperSlide className='swiper-card'>
              <div className='swiper-card__img-circle'></div>
              <div className='swiper-card__img-photos'><img src={swiperphoto5} alt="" /></div>
              <h3>{t('swiper.fifth.sub')}</h3>
              <p>{t('swiper.fifth.desc')}</p>
            </SwiperSlide>


          </Swiper>
        </div>
      </div>
    </>
  );
}
