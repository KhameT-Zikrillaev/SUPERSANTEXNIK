import React,{ useState } from 'react';
import './main.css'; // Импортируем стили (по желанию)
import Browsers from '../../pages/browsers/browsers';
import Intro from '../../pages/intro/intro';

import Info from '../../pages/info/info';
import MySwiper from '/src/components/mySwiper/mySwiper'; 
import MyLinear from '/src/components/linear/linear'; 
import Faq from '../../pages/faq/faq';
import Yuridik from '../../pages/yuridik/yuridik';
import About from '../../pages/about/about';

const Main = () => {

    return (
     <main className='main'>
        <Browsers/>
         <Intro/>
         <MySwiper/>
         <MyLinear/>
         <About/>
         <Yuridik/>
         <Faq/>
         <Info/>
     </main>
    );
};

export default Main;