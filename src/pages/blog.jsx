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


const Blog = () => {
  const { trendData, resetTrendingResult} = useContext(TrendingContext);

  return (
<>
  {/* <div className="search-form" id="search-form">
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
  </div> */}
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
  <div className="untree_co-section bg-v-half-wrap"></div>
  <div className="site-section" id="blog-section">

    <div className="container">
      <div className="row mb-5">
        <div className="col-12 text-center">
          <h2 className="section-title mb-3">Психологические советы </h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 col-lg-4 mb-4 mb-lg-4">
          <div className="h-entry">
            <img
              src="https://raw.githubusercontent.com/AMH767/cryptoimage/main/cryptotwo2.png"
              alt="Image"
              className="img-fluid"
            />
            <h2>
              <a href="/blogone">Психология криптотрейдинга: Часть 1</a>
            </h2>
            {/* <div class="meta mb-4">Ham Brook <span class="mx-2">•</span> Jan 18, 2019<span class="mx-2">•</span> <a href="#">News</a></div> */}
            <p>
            Человеческий мозг развивался в совершенно
            иных условиях, по сравнению с которыми трейдеры 
            должны вести...
            </p>
            <p>
              <a href="/blogone">Читать...</a>
            </p>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 mb-4 mb-lg-4">
          <div className="h-entry">
            <img
              src="https://raw.githubusercontent.com/AMH767/cryptoimage/main/crypt.jpg"
              alt="Image"
              className="img-fluid"
            />
            <h2>
              <a href="/blogtwo">Психология криптотрейдинга: Часть 2</a>
            </h2>
            {/* <div class="meta mb-4">James Phelps <span class="mx-2">•</span> Jan 18, 2019<span class="mx-2">•</span> <a href="#">News</a></div> */}
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              eligendi nobis ea maiores sapiente veritatis reprehenderit
              suscipit quaerat rerum voluptatibus a eius.
            </p>
            <p>
              <a href="/blogtwo">Читать...</a>
            </p>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 mb-4 mb-lg-4">
          <div className="h-entry">
            <img
              src="https://raw.githubusercontent.com/Alen767/image/main/3D_Animation_Style_lots_of_boxing_gloves_3.jpg"
              alt="Image"
              className="img-fluid"
            />
            <h2>
              <a href="#">Lorem ipsum dolor sit amet</a>
            </h2>
            {/* <div class="meta mb-4">James Phelps <span class="mx-2">•</span> Jan 18, 2019<span class="mx-2">•</span> <a href="#">News</a></div> */}
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              eligendi nobis ea maiores sapiente veritatis reprehenderit
              suscipit quaerat rerum voluptatibus a eius.
            </p>
            <p>
              <a href="#">Читать...</a>
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 col-lg-4 mb-4 mb-lg-4">
          <div className="h-entry">
            <img
              src="https://raw.githubusercontent.com/Alen767/image/main/3D_Animation_Style_lots_of_boxing_gloves_3.jpg"
              alt="Image"
              className="img-fluid"
            />
            <h2>
              <a href="#">Lorem ipsum dolor sit amet</a>
            </h2>
            {/* <div class="meta mb-4">Ham Brook <span class="mx-2">•</span> Jan 18, 2019<span class="mx-2">•</span> <a href="#">News</a></div> */}
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              eligendi nobis ea maiores sapiente veritatis reprehenderit
              suscipit quaerat rerum voluptatibus a eius.
            </p>
            <p>
              <a href="#">Читать...</a>
            </p>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 mb-4 mb-lg-4">
          <div className="h-entry">
            <img
              src="https://raw.githubusercontent.com/Alen767/image/main/3D_Animation_Style_lots_of_boxing_gloves_3.jpg"
              alt="Image"
              className="img-fluid"
            />
            <h2>
              <a href="#">Lorem ipsum dolor sit amet</a>
            </h2>
            {/* <div class="meta mb-4">James Phelps <span class="mx-2">•</span> Jan 18, 2019<span class="mx-2">•</span> <a href="#">News</a></div> */}
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              eligendi nobis ea maiores sapiente veritatis reprehenderit
              suscipit quaerat rerum voluptatibus a eius.
            </p>
            <p>
              <a href="#">Читать...</a>
            </p>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 mb-4 mb-lg-4">
          <div className="h-entry">
            <img
              src="https://raw.githubusercontent.com/Alen767/image/main/3D_Animation_Style_lots_of_boxing_gloves_3.jpg"
              alt="Image"
              className="img-fluid"
            />
            <h2>
              <a href="#">Lorem ipsum dolor sit amet</a>
            </h2>
            {/* <div class="meta mb-4">James Phelps <span class="mx-2">•</span> Jan 18, 2019<span class="mx-2">•</span> <a href="#">News</a></div> */}
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              eligendi nobis ea maiores sapiente veritatis reprehenderit
              suscipit quaerat rerum voluptatibus a eius.
            </p>
            <p>
              <a href="#">Читать...</a>
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 col-lg-4 mb-4 mb-lg-4">
          <div className="h-entry">
            <img
              src="https://raw.githubusercontent.com/Alen767/image/main/3D_Animation_Style_lots_of_boxing_gloves_3.jpg"
              alt="Image"
              className="img-fluid"
            />
            <h2>
              <a href="#">Lorem ipsum dolor sit amet</a>
            </h2>
            {/* <div class="meta mb-4">Ham Brook <span class="mx-2">•</span> Jan 18, 2019<span class="mx-2">•</span> <a href="#">News</a></div> */}
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              eligendi nobis ea maiores sapiente veritatis reprehenderit
              suscipit quaerat rerum voluptatibus a eius.
            </p>
            <p>
              <a href="#">Читать...</a>
            </p>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 mb-4 mb-lg-4">
          <div className="h-entry">
            <img
              src="https://raw.githubusercontent.com/Alen767/image/main/3D_Animation_Style_lots_of_boxing_gloves_3.jpg"
              alt="Image"
              className="img-fluid"
            />
            <h2>
              <a href="#">Lorem ipsum dolor sit amet</a>
            </h2>
            {/* <div class="meta mb-4">James Phelps <span class="mx-2">•</span> Jan 18, 2019<span class="mx-2">•</span> <a href="#">News</a></div> */}
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              eligendi nobis ea maiores sapiente veritatis reprehenderit
              suscipit quaerat rerum voluptatibus a eius.
            </p>
            <p>
              <a href="#">Читать...</a>
            </p>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 mb-4 mb-lg-4">
          <div className="h-entry">
            <img
              src="https://raw.githubusercontent.com/Alen767/image/main/3D_Animation_Style_lots_of_boxing_gloves_3.jpg"
              alt="Image"
              className="img-fluid"
            />
            <h2>
              <a href="#">Lorem ipsum dolor sit amet</a>
            </h2>
            {/* <div class="meta mb-4">James Phelps <span class="mx-2">•</span> Jan 18, 2019<span class="mx-2">•</span> <a href="#">News</a></div> */}
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              eligendi nobis ea maiores sapiente veritatis reprehenderit
              suscipit quaerat rerum voluptatibus a eius.
            </p>
            <p>
              <a href="#">Читать...</a>
            </p>
          </div>
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

export default Blog;
