import React,{ useState } from 'react';
import './intro.css'; 

const Intro = () => {
    return (
        <>
         <section className='Intro'>
            <div className="Intro__circle"></div>
            <div className="container">
            <img className='Intro__circle-photo' src="./src/assets/images/intro__photo.png" alt="" />
             <div >
                 <h3 className='Intro__text-title'>производим фитинги<span>Профессионально</span></h3>
             </div>
            </div>
         </section>
        </>
    );
};

export default Intro;