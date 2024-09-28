import React, { useRef, useState } from 'react';
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
import { Pagination, Navigation} from 'swiper/modules';

export default function App() {
  return (
    <>
     <div className='Swipers'>
    <div className="container swip">
    <Swiper
        slidesPerView={1}
        spaceBetween={50}
        navigation={true}
        modules={[Pagination,Navigation]}
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
              <div className='swiper-card__img-photos'><img  src={swiperphoto1} alt="" /></div>
              
            <h3>
            Гарантируем качество работ
            </h3>
            <p>
            "Мы обеспечиваем высокое качество сантехнических услуг с гарантией на все виды работ. Профессиональные мастера оперативно решат любые проблемы с сантехникой — от мелкого ремонта до сложных установок. Наша цель — ваш комфорт и уверенность в результате."
            </p>

        </SwiperSlide>
        <SwiperSlide className='swiper-card'>
        <div className='swiper-card__img-circle'></div>
        <div className='swiper-card__img-photos'><img  src={swiperphoto2} alt="" /></div>
        <h3>
             Быстро и надежно
            </h3>
            <p>
            "Ваша сантехника дала сбой? Мы готовы оперативно устранить любую неисправность. Быстрая реакция на вызовы и использование современных технологий позволяют нам обеспечивать надежный сервис, который продлит срок службы ваших систем."
            </p>
        </SwiperSlide>
        <SwiperSlide className='swiper-card'>
        <div className='swiper-card__img-circle'></div>
        <div className='swiper-card__img-photos'><img  src={swiperphoto3} alt="" /></div>
            <h3>Доступные цены и честный расчет</h3>
            <p>"Прозрачное ценообразование — наш приоритет. Мы предлагаем доступные цены без скрытых затрат. Вы всегда будете знать окончательную стоимость работ до их начала, чтобы чувствовать себя уверенно и защищено."</p>
        </SwiperSlide>
        <SwiperSlide className='swiper-card'>
        <div className='swiper-card__img-circle'></div>
        <div className='swiper-card__img-photos'><img  src={swiperphoto4} alt="" /></div>
            <h3>Индивидуальный подход к каждому клиенту</h3>
            <p>"Каждый заказ — это уникальная задача, и мы готовы предложить индивидуальные решения для вашего комфорта. От простого ремонта до установки сложных систем — мы подбираем оптимальные варианты, которые соответствуют вашим потребностям и бюджету."</p>
        </SwiperSlide>
        <SwiperSlide className='swiper-card'>
        <div className='swiper-card__img-circle'></div>
        <div className='swiper-card__img-photos'><img  src={swiperphoto5} alt="" /></div>
            <h3>Опытные специалисты и современное оборудование</h3>
            <p>"Наши мастера — это команда профессионалов с многолетним опытом работы. Мы используем только проверенные материалы и современное оборудование, чтобы гарантировать долговечность и надежность всех выполненных работ."</p>
        </SwiperSlide>

   
      </Swiper>
    </div>
     </div>
    </>
  );
}
