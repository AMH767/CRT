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
import '../assets/css/ind.css';



const Traincart = () => {
  const { trendData, resetTrendingResult} = useContext(TrendingContext);

  return (
<>
<div className="site-wrap">
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <header
      className="site-navbar py-4 js-sticky-header site-navbar-target"
      role="banner"
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-6 col-md-3 col-xl-4  d-block">
            <h1 className="mb-0 textc site-logo">
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
                    Features
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
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>

  <div className="container1">
    <div className="blob-c">
      <div className="shape-blob" />
      <div className="shape-blob one" />
      <div className="shape-blob two" />
      <div className="shape-blob three" />
      <div className="shape-blob four" />
      <div className="shape-blob five" />
      <div className="shape-blob six" />
      <section>
        <div className="container1" style={{ zIndex: 2 }}>
          <div
            className="card"
            onmousemove="moveCard(event)"
            onmouseleave="resetCard(event)"
            style={{
              transform: "perspective(1000px) rotateY(0deg) rotateX(0deg)"
            }}
          >
            {/* Card Content */}
            <div className="content">
              <div className="imgBx">
                <img
                  src="https://raw.githubusercontent.com/Alen767/block/main/voln2.gif"
                  alt="Lion"
                />
              </div>
              <div className="contentBx">
                <h3>
                  Плавание
                  <br />
                  <span>Вольный Стиль</span>
                </h3>
              </div>
            </div>
            <ul className="sci">
              <li>
                <a href="#">База</a>
              </li>
              <li>
                <a href="#">Проф</a>
              </li>
              <li>
                <a href="#">Проф+</a>
              </li>
            </ul>
          </div>
          <div
            className="card"
            onmousemove="moveCard(event)"
            onmouseleave="resetCard(event)"
            style={{
              transform: "perspective(1000px) rotateY(0deg) rotateX(0deg)"
            }}
          >
            {/* Card Content */}
            <div className="content">
              <div className="imgBx">
                <img
                  src="https://raw.githubusercontent.com/Alen767/block/main/gif/12.gif"
                  alt="Frog"
                />
              </div>
              <div className="contentBx">
                <h3>
                  Плавание
                  <br />
                  <span>Брасс</span>
                </h3>
              </div>
            </div>
            <ul className="sci">
              <li>
                <a href="#">База</a>
              </li>
              <li>
                <a href="#">Проф</a>
              </li>
              <li>
                <a href="#">Проф+</a>
              </li>
            </ul>
          </div>
          <div
            className="card"
            onmousemove="moveCard(event)"
            onmouseleave="resetCard(event)"
            style={{
              transform: "perspective(1000px) rotateY(0deg) rotateX(0deg)"
            }}
          >
            {/* Card Content */}
            <div className="content">
              <div className="imgBx">
                <img
                  src="https://raw.githubusercontent.com/Alen767/block/main/gif/2.gif"
                  alt="Giraffe"
                />
              </div>
              <div className="contentBx">
                <h3>
                  Плавание
                  <br />
                  <span>Баттерфляй</span>
                </h3>
              </div>
            </div>
            <ul className="sci">
              <li>
                <a href="/batter1b">База</a>
              </li>
              <li>
                <a href="#">Проф</a>
              </li>
              <li>
                <a href="#">Проф+</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="container1" style={{ zIndex: 2 }}>
          <div className="shape-blob oneo" />
          <div className="shape-blob five" />
          <div className="shape-blob one" />
          <div className="shape-blob six" />
          <div className="shape-blob two" />
          <div className="shape-blob" />
          <div className="shape-blob three" />
          <div className="shape-blob four" />
          <div
            className="card"
            onmousemove="moveCard(event)"
            onmouseleave="resetCard(event)"
            style={{
              transform: "perspective(1000px) rotateY(0deg) rotateX(0deg)"
            }}
          >
            {/* Card Content */}
            <div className="content">
              <div className="imgBx">
                <img
                  src="https://raw.githubusercontent.com/Alen767/block/main/gif/1.gif"
                  alt="Lion"
                />
              </div>
              <div className="contentBx">
                <h3>
                  Плавание
                  <br />
                  <span> На спине </span>
                </h3>
              </div>
            </div>
            <ul className="sci">
              <li>
                <a href="#">База</a>
              </li>
              <li>
                <a href="#">Проф</a>
              </li>
              <li>
                <a href="#">Проф+</a>
              </li>
            </ul>
          </div>
          <div
            className="card"
            onmousemove="moveCard(event)"
            onmouseleave="resetCard(event)"
            style={{
              transform: "perspective(1000px) rotateY(0deg) rotateX(0deg)"
            }}
          >
            {/* Card Content */}
            <div className="content">
              <div className="imgBx">
                <img
                  src="https://raw.githubusercontent.com/Alen767/block/main/gif/1.gif"
                  alt="Frog"
                />
              </div>
              <div className="contentBx">
                <h3>
                  Плавание
                  <br />
                  <span> На спине </span>
                </h3>
              </div>
            </div>
            <ul className="sci">
              <li>
                <a href="#">База</a>
              </li>
              <li>
                <a href="#">Проф</a>
              </li>
              <li>
                <a href="#">Проф+</a>
              </li>
            </ul>
          </div>
          <div
            className="card"
            onmousemove="moveCard(event)"
            onmouseleave="resetCard(event)"
            style={{
              transform: "perspective(1000px) rotateY(0deg) rotateX(0deg)"
            }}
          >
            {/* Card Content */}
            <div className="content">
              <div className="imgBx">
                <img
                  src="https://raw.githubusercontent.com/Alen767/block/main/gif/1.gif"
                  alt="Giraffe"
                />
              </div>
              <div className="contentBx">
                <h3>
                  Плавание
                  <br />
                  <span> На спине </span>
                </h3>
              </div>
            </div>
            <ul className="sci">
              <li>
                <a href="#">База</a>
              </li>
              <li>
                <a href="#">Проф</a>
              </li>
              <li>
                <a href="#">Проф+</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  </div>
  </div>
</>


  );
};

export default Traincart;
