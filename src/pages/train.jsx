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


const Train = () => {
  const { trendData, resetTrendingResult} = useContext(TrendingContext);

  return (
<>
  <div className="search-form" id="search-form">
    <form action="">
      <input
        type="search"
        className="form-control"
        placeholder="Enter keyword to search..."
      />
      <button className="button">
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          className="bi bi-search"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"
          />
          <path
            fillRule="evenodd"
            d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
          />
        </svg>
      </button>
      <button className="button">
        <div className="close-search">
          <span className="icofont-close js-close-search" />
        </div>
      </button>
    </form>
  </div>
  <div className="site-mobile-menu">
    <div className="site-mobile-menu-header">
      <div className="site-mobile-menu-close">
        <span className="icofont-close js-menu-toggle" />
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
                    Домой
                  </a>
                </li>
                <li className="has-children">
                  <a href="#about-section" className="nav-link">
                  Функции
                  </a>
                  <ul className="dropdown arrow-top">

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
                   Стратегии
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
  <div className="untree_co-section bg-v-half-wrap">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-7 text-center heading mb-5">
          <span className="subtitle" data-aos="fade-up" data-aos-delay={100}>
            Плавание
          </span>
          <h2 data-aos="fade-up" data-aos-delay={200}>
            Виды стратегии, трендовая, скальпинг и многие другие стратегии
          </h2>
        </div>
      </div>
    </div>
  </div>

  <div className="untree_co-section pt-0">
    <div className="container">
      <div className="row justify-content-between">
        <div className="col-lg-5 mb-5">
          <h2
            className="line-bottom mb-4"
            data-aos="fade-up"
            data-aos-delay={0}
          >
            Trend Following
          </h2>
          <p data-aos="fade-up" data-aos-delay={100}>
          Стратегия следования за трендом основана на ожидании того, что направление цены 
          сохранится в его текущей форме и тренд не развернется вспять
          </p>
          <ul
            className="list-unstyled ul-check mb-5 primary"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            <li>Торговля по внутридневному тренду </li>
            <li>
            Торговля по долгосрочному тренду 
            </li>
            <li>Позиционная торговля</li>
          </ul>
          {/* <div className="row count-numbers mb-5">
            <div
              className="col-4 col-lg-4"
              data-aos="fade-up"
              data-aos-delay={0}
            >
              <span className="counter d-block h2">
                <span data-number={1100}>1500</span>
                <span> м</span>
              </span>
              <span className="caption-2">Базовый</span>
            </div>
            <div
              className="col-4 col-lg-4"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <span className="counter d-block h2">
                <span data-number={1900}>1500</span>
                <span> м</span>
              </span>
              <span className="caption-2">Продвинутый</span>
            </div>
            <div
              className="col-4 col-lg-4"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <span className="counter d-block h2">
                <span data-number={2800}>2700</span>
                <span> м</span>
              </span>
              <span className="caption-2">Мастер</span>
            </div>
          </div> */}
          <p data-aos="fade-up" data-aos-delay={200}>
            {/* <a href="/traincart" className="btn btn-black">
             */}
            <a href="/strateg" className="btn btn-black">

              Другие стратегии
            </a>
            <a href="/strateg" className="btn btn-outline-black">
              Подробнее
            </a>
          </p>
        </div>
        <div className="col-lg-6" data-aos="fade-up" data-aos-delay={400}>
          <div className="bg-1" />
          <a
            href="https://www.youtube.com/watch?v=Er7QVleVQJE&t=10s"
            data-fancybox=""
            className="video-wrap"
          >
            <span className="play-wrap">
              <span className="icon-play" />
            </span>
            <img
              src="https://static.politico.com/35/1f/89c3bc18419c9d98e112514ccdfb/lede-high-freq-loop.gif"
              alt="Image"
              className="img-fluid rounded"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
  <div className="untree_co-section bg-light">
    <div className="container">
      <div className="row justify-content-center mb-5">
        <div
          className="col-lg-7 text-center"
          data-aos="fade-up"
          data-aos-delay={0}
        >
          <h2 className="line-bottom text-center mb-4">Другие стратегии</h2>
        </div>
      </div>
      <div className="row">
        <div
          className="col-12 col-sm-6 col-md-6 mb-4 mb-lg-0 col-lg-4"
          data-aos="fade-up"
          data-aos-delay={0}
        >
          <div className="team text-center">
            <div className="mb-4">
              <img
                src="https://avatars.dzeninfra.ru/get-zen_doc/2431229/pub_609be53fb18ab12856f21b3f_609be5aa9be82c47285f5d39/scale_1200"
                alt="Image"
                className="img-fluid"
              />
            </div>
            <div className="team-body">
              <a href="boxing.html">
                <h3 className="staff-name">Парный трейдинг</h3>
              </a>
              <p className="mb-4">
              Одновременная покупка и продажа двух связанных финансовых 
              инструментов. Обычно это акции или другие связанные активы.
              </p>
            </div>
          </div>
        </div>
        <div
          className="col-12 col-sm-6 col-md-6 mb-4 mb-lg-0 col-lg-4"
          data-aos="fade-up"
          data-aos-delay={100}
        >
          <div className="team text-center">
            <div className="mb-4">
              <img
                src="https://i2.wp.com/binclub.ru/wp-content/uploads/2018/01/pokupka-prodazha.png"
                alt="Image"
                className="img-fluid"
              />
            </div>
            <div className="person-body">
              <a href="cheese.html">
                <h3 className="staff-name">Поддержки и сопротивления</h3>
              </a>
              <p className="mb-4">
              Основана на идее, что цены криптовалют могут испытывать
               сопротивление при достижении определенных уровней
              </p>
            </div>
          </div>
        </div>
        <div
          className="col-12 col-sm-6 col-md-6 mb-4 mb-lg-0 col-lg-4"
          data-aos="fade-up"
          data-aos-delay={200}
        >
          <div className="team text-center">
            <div className="mb-4">
              <img
                src="https://sun9-12.userapi.com/impg/fJTLkisS4VafhZhpCWvEe5HrUdVzMJI23OAHdw/hisB35SxdX8.jpg?size=1080x995&quality=96&sign=cb4cf763fdb63ce8385fdc9451a2fb40&c_uniq_tag=QS0gXkXGHCKtHOMEgqIGvKwPXIwksAUJycO4FSuVs0U&type=album"
                alt="Image"
                className="img-fluid"
              />
            </div>
            <div className="team-body">
              <a href="fitnes.html">
                <h3 className="staff-name">Паттерн свечей</h3>
              </a>
              <p className="mb-4">
               «молоток», «падающая звезда», «тройная свеча». Они могут
               сигнализировать о развороте тренда или продолжении движения цены. 
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
  <div id="overlayer" />
  <div className="loader">
    <div className="spinner-border" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  </div>
</>

  );
};

export default Train;
