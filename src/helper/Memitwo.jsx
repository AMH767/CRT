import React from 'react';

// остальной код файла Memitwo.jsx
import Picture from "../componentsthree/Picture"
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

const Homepage = () => {
  return (
    
    <div style={{minHeight:"100vh"}}>
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
        <h1>Image</h1>
        <div className="pictures">
            <Picture />
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
    </div>
  )
}

export default Homepage