import { data } from "autoprefixer";
import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { TrendingContext } from "../context/TrendingContext";
import TrendingCoin from "../components/TrendingCoin";
import '../assets/css/style.css';
import '../assets/css/bootstrap.min.css';
import '../assets/css/jquery-ui.css';
import '../assets/css/owl.carousel.min.css';
import '../assets/css/owl.theme.default.min.css';
import '../assets/css/jquery.fancybox.min.css';
import '../assets/fonts/icomoon/style.css';
import '../assets/fonts/flaticon/font/flaticon.css'
import '../assets/css/style-qnatum.css';
import '../assets/css/aos.css';


const Trendstr = () => {
  const { trendData, resetTrendingResult} = useContext(TrendingContext);

  return (
<>
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

                    {/* <li class="has-children">
                                      <a href="#">More Links</a>
                                      <ul class="dropdown">
                                          <li><a href="#">Menu One</a></li>
                                          <li><a href="#">Menu Two</a></li>
                                          <li><a href="#">Menu Three</a></li>
                                      </ul>
                                  </li> */}
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
          <div className="col-6 col-md-9 d-inline-block d-lg-none ml-md-0">
            <a
              href="#"
              className="site-menu-toggle js-menu-toggle text-black float-right"
            >
              <span className="icon-menu h3" />
            </a>
          </div>
        </div>
      </div>
    </header>
  <div className="untree_co-section pt-0">
    <div className="container">
      <div className="row justify-content-center mb-5">
        <div className="col-lg-7 text-center heading mb-5">
          <span className="subtitle" data-aos="fade-up" data-aos-delay={100}>
          Цель: Новые упражнения - немного координации
          </span>
          <h2 data-aos="fade-up" data-aos-delay={200}>
          Цель: Новые упражнения - немного координации
          </h2>
        </div>
      </div>
      <div className="row mb-5">
        <div
          className="col-lg-6 mb-4 mb-lg-0"
          data-aos="fade-right"
          data-aos-delay={200}
        >
<a
  href="https://www.youtube.com/watch?v=Er7QVleVQJE&t=10s"
  data-fancybox=""
  className="video-wrap"
>
  <span className="play-wrap">
    <span className="icon-play" />
  </span>
  <img
    src="https://traderblog.net/wp-content/uploads/2020/04/Bearish-Trend-Breakout.png"
    alt="Image"
    className="img-fluid rounded"
  />
</a>

        </div>
        <div
          className="col-lg-5 h-100 jm-sticky-top ml-auto"
          data-aos="fade-left"
          data-aos-delay={300}
        >
          <h3 className="h5">Как находить тренды?</h3>
          <p className="mb-4">
          Трендовая стратегия в трейдинге предполагает использование методов анализа рынка с целью выявления устойчивого направления движения цены актива и осуществления сделок в соответствии с данной тенденцией. Трейдер стремится прогнозировать изменения цены и входит в рынок с целью эксплуатации выявленного тренда. Для определения тренда могут использоваться различные инструменты, включая скользящие средние и различные индикаторы, позволяющие оценить динамику ценовых изменений. Ключевым принципом трендовой стратегии является поддержание позиции в направлении тренда и максимизация прибыли от движения цены актива.
          </p>
          {/* <blockquote className="blockquote">
            <p>
              It is a paradisematic country, in which roasted parts of sentences
              fly into your mouth.
            </p>
            <p className="mb-0 d-flex align-items-center">
              <img
                className="img-fluid mr-3"
                src="images/person_1.jpg"
                alt="Image"
              />
              <cite>— John Doe</cite>
            </p>
          </blockquote> */}
        </div>
        
      </div>
      <div className="row mb-5">

        <div
          className="col-lg-5 h-100 jm-sticky-top ml-auto"
          data-aos="fade-left"
          data-aos-delay={300}
        >
          <h3 className="h5">Для определения тренда на рынке можно использовать такие индикаторы как</h3>
          <p className="mb-4">
          
         <span className="bold-text">Moving Averages -</span> один из наиболее популярных инструментов для определения тренда. Сравнение различных периодов скользящих средних может помочь выявить направление движения цены.<br></br>
         <span className="bold-text">Parabolic SAR -</span> помогает определить возможное изменение направления тренда<br></br>
         <span className="bold-text">Relative Strength Index, RSI -</span> позволяет оценить, насколько актив рыночного актива с точки зрения изменений цен.<br></br>
         <span className="bold-text">Stochastic Oscillator -</span> используется для определения перекупленности или перепроданности актива.<br></br>
         <span className="bold-text">MACD (Moving Average Convergence Divergence) -</span>помогает определить моменты разворота тренда<br></br>
          </p>
          {/* <blockquote className="blockquote">
            <p>
              It is a paradisematic country, in which roasted parts of sentences
              fly into your mouth.
            </p>
            <p className="mb-0 d-flex align-items-center">
              <img
                className="img-fluid mr-3"
                src="images/person_1.jpg"
                alt="Image"
              />
              <cite>— John Doe</cite>
            </p>
          </blockquote> */}
        </div>
        <div
          className="col-lg-6 mb-4 mb-lg-0"
          data-aos="fade-right"
          data-aos-delay={200}
        >
<a
>
  <img
    src="https://traderblog.net/wp-content/uploads/2020/04/Bullish-Trend-Impulses-vs-Corrections.png"
    alt="Image"
    className="img-fluid rounded"
  />
</a>

        </div>
      </div>
    </div>
  </div>
  <div className="footer py-5 text-center">
      <div className="container">
        {/* <div class="row mb-5">
              <div class="col-12">
                  <p class="mb-0">
                      <a href="#" class="p-3"><span class="icon-facebook"></span></a>
                      <a href="#" class="p-3"><span class="icon-twitter"></span></a>
                      <a href="#" class="p-3"><span class="icon-instagram"></span></a>
                      <a href="#" class="p-3"><span class="icon-linkedin"></span></a>
                      <a href="#" class="p-3"><span class="icon-pinterest"></span></a>
                  </p>
              </div>
          </div> */}
        <div className="row">
          <div className="col-md-12">
            <p className="mb-0">Trade🔥Live</p>
          </div>
        </div>
      </div>
    </div>
  <div id="overlayer" />
  {/* <div className="loader">
    <div className="spinner-border" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  </div> */}
</>



  );
};

export default Trendstr;
