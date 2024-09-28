import React, { useState } from "react";
import "./intro.css";

const Intro = () => {
  return (
    <>
      <section className="Intro">
        <div className="container relativ">
          <img
            className="Intro__circle-photo"
            src="./src/assets/images/intro__photo.png"
            alt=""
          />
          <div className="Intro__text">
            <h3 className="Intro__text-title-1">
              Электрика и сантехника под ключ в Ташкенте и области
            </h3>
            <h4 className="Intro__text-title-2">
              Закажите мастера прямо сейчас и <br />
              <span>получите скидку 15%</span> на все виды услуг!
            </h4>
            <div className="btn__container">
              <div className="btn__send-1">Вызвать Мастера</div>
              <div className="btn__send-2">Написать в телеграм 24/7</div>
            </div>
            <div className="info__container">

                {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~1-card~~~~~~~~~~~~~~~~~~~~~ */}
              <div className="info__container-card">
                <div className="info__container-card-icon">
                  <div className="info__container-card-background"></div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="#4495D9"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p className="info__container-card-text">
                  Бесплатный выезд <br />
                  за 30 минут
                </p>
              </div>
                {/* ~~~~~~~~~~~~~~~~~~~~~~~~~2-card~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
              <div className="info__container-card">
                <div className="info__container-card-icon">
                  <div className="info__container-card-background"></div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="#4495D9"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p className="info__container-card-text">
                Обеспечиваем <br />
                расходными материалами
                </p>
              </div>
                 {/* ~~~~~~~~~~~~~~~~~~~~~~~~~3-card~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
              <div className="info__container-card">
                <div className="info__container-card-icon">
                  <div className="info__container-card-background"></div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="#4495D9"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p className="info__container-card-text">
                Всегда есть свободный <br />
                мастер
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Intro;
