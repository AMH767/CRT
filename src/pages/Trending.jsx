import React, { useContext, useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import { TrendingContext } from "../context/TrendingContext";
import '../assets/css/style.css';
import '../assets/css/style-qnatum.css';
import '../assets/css/aos.css';
import '../assets/css/bootstrap.min.css';
import '../assets/css/jquery-ui.css';
import '../assets/css/owl.carousel.min.css';
import '../assets/css/owl.theme.default.min.css';
import '../assets/css/jquery.fancybox.min.css';
import '../assets/fonts/icomoon/style.css';
import '../assets/fonts/flaticon/font/flaticon.css';
import Animation from './Animation'; // Путь к файлу может отличаться

const Trending = () => {
  const containerRef = useRef(null);
  const { trendData, resetTrendingResult } = useContext(TrendingContext);

  return (
    <>
      <div id="overlayer" />
      <div className="site-wrap" id="home-section">
        <div className="site-mobile-menu site-navbar-target">
          <div className="site-mobile-menu-header">
            <div className="site-mobile-menu-close mt-3">
              <span className="icon-close2 js-menu-toggle" />
            </div>
          </div>
          <div className="site-mobile-menu-body" />
        </div>
        <header
          className="site-navbar py-4 js-sticky-header site-navbar-target"
          role="banner"
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-6 col-md-3 col-xl-4  d-block">
                <h1 className="mb-0 site-logo">
                  <a href="/" className="text-black h2 mb-0">
                    Trade🔥Live
                    <span className="text-primary" />{" "}
                  </a>
                </h1>
              </div>
              <div className="col-12 col-md-9 col-xl-8 main-menu">
                <nav
                  className="site-navigation position-relative text-right"
                  role="navigation"
                >
                  <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block ml-0 pl-0">
                    <li>
                      <a href="/" className="nav-link">
                        Home
                      </a>
                    </li>
                    <li className="has-children">
                      <a href="#about-section" className="nav-link">
                        Функции
                      </a>
                      <ul className="dropdown arrow-top">
                        <li>
                          <a href="#" target="_blank" className="nav-link">
                            <span className="text-primary">Психология</span>
                          </a>
                        </li>
                        <li>
                          <a href="/trending" className="nav-link">
                            Торговля
                          </a>
                        </li>
                        <li>
                          <a href="/test" className="nav-link">
                            Тест
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="/train" className="nav-link">
                        Sport
                      </a>
                    </li>
                    <li>
                      <a href="/kino" className="nav-link">
                        Kino
                      </a>
                    </li>
                    <li>
                      <a href="/game" className="nav-link">
                        Game
                      </a>
                    </li>
                    <li>
                      <a href="/blog" className="nav-link">
                        Психология
                      </a>
                    </li>
                    <li>
                      <a href="/Memitwo" className="nav-link">
                        Мемы
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </header>
        <div className="site-blocks-cover" style={{ overflow: "hidden" }}>
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div
                className="col-md-12"
                style={{ position: "relative" }}
                data-aos="fade-up"
                data-aos-delay={200}
              >
           
                <div className="row mb-4" data-aos="fade-up" data-aos-delay={200}>
                  <div className="col-lg-6 mr-auto">
                    <h1>Две головы хорошо, а своя — лучше.</h1>
                    <p className="mb-5">
                      Для принятия решения успешный трейдер не нуждается в мнении со
                      стороны. Это фундаментальное правило которое нужно каждый день
                      повторять по 10 раз перед зеркалом. Ни один даже самый опытный
                      и авторитетный советник (трейдер, аналитик, инсайдер) не
                      заплатит за ВАШЕГО лося, потому что это ВАШ портфель, и
                      решение по нему принимаете ВЫ!
                    </p>
                    <div>
                      <a href="#" className="btn btn-primary mr-2 mb-2">
                        Начать торговлю
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="site-section" id="features-section">
          <div className="container">
            <div
              className="row mb-5 justify-content-center text-center"
              data-aos="fade-up"
            >
              <div className="col-7 text-center  mb-5">
                <h2 className="section-title">Trade🔥Live Features</h2>
                <p className="lead">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
                  quos quaerat sapiente nam, id vero.
                </p>
              </div>
            </div>
            <div className="row align-items-stretch">
              <div className="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up">
                <div className="unit-4 d-block">
                  <div>
                    <h3>Приложение</h3>
                    <p>
                      В этом Приложении вам будут доступны материалы для изучения Трейдинга Паттернов и т.п.
                    </p>
                    <p>
                      <br></br>
                      <a href="apk">Перейти</a>
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-4 mb-4 mb-lg-4"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <div className="unit-4 d-block">
                  <div>
                    <h3>Телеграмм Бот</h3>
                    <p>
                      Анализирует и выдает Идеи для покупок или продаж определенного альткоина
                    </p>
                    <p>
                      <br></br>
                      <a href="https://t.me/DignalTEXN_bot">Перейти</a>
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-4 mb-4 mb-lg-4"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <div className="unit-4 d-block">
                  <div>
                    <h3>ИИ помощник</h3>
                    <p>
                     Помощник которому можно обратиться с любим вопросом на тему трейдинг
                    </p>
                    <p>
                      <a href="https://t.me/DignalTEXN2_bot">Перейти</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer py-5 text-center">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <p className="mb-0">Trade🔥Live</p>
              </div>
            </div>
          </div>
        </div>
        <Animation />
      </div>
      
    </>
  );
};

export default Trending;