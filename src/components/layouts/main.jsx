import React,{ useState } from 'react';
import './main.css'; // Импортируем стили (по желанию)
import Browsers from '../../pages/browsers/browsers';
import Intro from '../../pages/intro/intro';
import About from '../../pages/about/about';
import Contact from '../../pages/contact/contact';


const Main = () => {

    return (
     <main className='main'>
        <Browsers/>
         <Intro/>
         <About/>
         <Contact/>
     </main>
    );
};

export default Main;