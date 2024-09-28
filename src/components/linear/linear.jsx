import React, { useEffect } from 'react';
import './linear.css'; 

const Linear = () => {
    const messages = [
        "Приедем за 30 минут!",
        "Выезд бесплатно",
        "Работаем 24/7"
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
