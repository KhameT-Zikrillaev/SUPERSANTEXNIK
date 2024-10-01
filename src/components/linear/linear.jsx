import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './linear.css'; 

const Linear = () => {
    const { t } = useTranslation();
    const messages = [
        t('messages.arrive'),      // Получаем перевод для первого сообщения
        t('messages.freeVisit'),    // Получаем перевод для второго сообщения
        t('messages.workingHours')  // Получаем перевод для третьего сообщения
    ];


    const repeatCount = 10; 

    useEffect(() => {
        const marquee = document.querySelector('.Linear__linear-container ul');


        const totalWidth = marquee.scrollWidth;
        marquee.style.animation = `move ${totalWidth / 100}s linear infinite`;
    }, []);

    return (
        <>
         <section className='Linear'>
          <div className="Linear__linear-container">
             <ul>
                {Array.from({ length: repeatCount }).map((_, index) => (
                    <React.Fragment key={index}>
                        {messages.map((message) => (
                            <React.Fragment key={message}>
                                <li>{message}</li>
                                <li className='linear-li'>|</li>
                            </React.Fragment>
                        ))}
                    </React.Fragment>
                ))}
             </ul>
          </div>

           {/* <div className="container">
            <h1>Linear</h1>
           </div> */}
         </section>
        </>
    );
};

export default Linear;
