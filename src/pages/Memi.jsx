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

// import '../assets/csstwo/bootstrap-datepicker.css';
// import '../assets/csstwo/swiper.css';
// import '../assets/csstwo/lightgallery.min.css';
// import '../assets/csstwo/magnific-popup.css';
// import '../assets/csstwo/owl.theme.default.min.css';




const Memi = () => {
  const { trendData, resetTrendingResult} = useContext(TrendingContext);

  return (

<div className="site-wrap">
  <div className="site-mobile-menu">
    <div className="site-mobile-menu-header">
      <div className="site-mobile-menu-close mt-3">
        <span className="icon-close2 js-menu-toggle" />
      </div>
    </div>
    <div className="site-mobile-menu-body" />
  </div>
  <header className="site-navbar py-3 border-bottom" role="banner">
    <div className="container-fluid">
      <div className="row align-items-center">
        <div className="col-6 col-xl-2" data-aos="fade-down">
          <h1 className="mb-0">
            <a href="index.html" className="text-black h2 mb-0">
              Photon
            </a>
          </h1>
        </div>
        <div className="col-10 col-md-8 d-none d-xl-block" data-aos="fade-down">
          <nav
            className="site-navigation position-relative text-right text-lg-center"
            role="navigation"
          >
            <ul className="site-menu js-clone-nav mx-auto d-none d-lg-block">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li className="has-children active">
                <a href="single.html">Gallery</a>
                <ul className="dropdown">
                  <li>
                    <a href="#">Nature</a>
                  </li>
                  <li>
                    <a href="#">Portrait</a>
                  </li>
                  <li>
                    <a href="#">People</a>
                  </li>
                  <li>
                    <a href="#">Architecture</a>
                  </li>
                  <li>
                    <a href="#">Animals</a>
                  </li>
                  <li>
                    <a href="#">Sports</a>
                  </li>
                  <li>
                    <a href="#">Travel</a>
                  </li>
                  <li className="has-children">
                    <a href="#">Sub Menu</a>
                    <ul className="dropdown">
                      <li>
                        <a href="#">Menu One</a>
                      </li>
                      <li>
                        <a href="#">Menu Two</a>
                      </li>
                      <li>
                        <a href="#">Menu Three</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a href="services.html">Services</a>
              </li>
              <li>
                <a href="about.html">About</a>
              </li>
              <li>
                <a href="contact.html">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="col-6 col-xl-2 text-right" data-aos="fade-down">
          <div className="d-none d-xl-inline-block">
            <ul
              className="site-menu js-clone-nav ml-auto list-unstyled d-flex text-right mb-0"
              data-class="social"
            >
              <li>
                <a href="#" className="pl-0 pr-3">
                  <span className="icon-facebook" />
                </a>
              </li>
              <li>
                <a href="#" className="pl-3 pr-3">
                  <span className="icon-twitter" />
                </a>
              </li>
              <li>
                <a href="#" className="pl-3 pr-3">
                  <span className="icon-instagram" />
                </a>
              </li>
              <li>
                <a href="#" className="pl-3 pr-3">
                  <span className="icon-youtube-play" />
                </a>
              </li>
            </ul>
          </div>
          <div
            className="d-inline-block d-xl-none ml-md-0 mr-auto py-3"
            style={{ position: "relative", top: 3 }}
          >
            <a href="#" className="site-menu-toggle js-menu-toggle text-black">
              <span className="icon-menu h3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div className="site-section" data-aos="fade">
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-md-7">
          <div className="row mb-5">
            <div className="col-12 ">
              <h2 className="site-section-heading text-center">
                Nature Gallery
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="row" id="lightgallery">
        <div
          className="col-sm-6 col-md-4 col-lg-3 col-xl-2 item"
          data-aos="fade"
          // data-src="images/big-images/nature_big_1.jpg"
          data-src="https://raw.githubusercontent.com/AMH767/cryptoimage/main/images/nature_small_1.jpg"

          data-sub-html="<h4>Fading Light</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor doloremque hic excepturi fugit, sunt impedit fuga tempora, ad amet aliquid?</p>"
        >
          <a href="#">
            <img
              src="https://raw.githubusercontent.com/AMH767/cryptoimage/main/images/nature_small_1.jpg"
              alt="IMage"
              className="img-fluid"
            />
          </a>
        </div>
        <div
          className="col-sm-6 col-md-4 col-lg-3 col-xl-2 item"
          data-aos="fade"
          data-src="images/big-images/nature_big_2.jpg"
          data-sub-html="<h4>Fading Light</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam omnis quaerat molestiae, praesentium. Ipsam, reiciendis. Aut molestiae animi earum laudantium.</p>"
        >
          <a href="#">
            <img
              src="images/nature_small_2.jpg"
              alt="IMage"
              className="img-fluid"
            />
          </a>
        </div>
        <div
          className="col-sm-6 col-md-4 col-lg-3 col-xl-2 item"
          data-aos="fade"
          data-src="images/big-images/nature_big_3.jpg"
          data-sub-html="<h4>Fading Light</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem reiciendis, dolorum illo temporibus culpa eaque dolore rerum quod voluptate doloribus.</p>"
        >
          <a href="#">
            <img
              src="images/nature_small_3.jpg"
              alt="IMage"
              className="img-fluid"
            />
          </a>
        </div>
        <div
          className="col-sm-6 col-md-4 col-lg-3 col-xl-2 item"
          data-aos="fade"
          data-src="images/big-images/nature_big_4.jpg"
          data-sub-html="<h4>Fading Light</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim perferendis quae iusto omnis praesentium labore tempore eligendi quo corporis sapiente.</p>"
        >
          <a href="#">
            <img
              src="images/nature_small_4.jpg"
              alt="IMage"
              className="img-fluid"
            />
          </a>
        </div>
        <div
          className="col-sm-6 col-md-4 col-lg-3 col-xl-2 item"
          data-aos="fade"
          data-src="images/big-images/nature_big_5.jpg"
          data-sub-html="<h4>Fading Light</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, voluptatum voluptate tempore aliquam, dolorem distinctio. In quas maiores tenetur sequi.</p>"
        >
          <a href="#">
            <img
              src="images/nature_small_5.jpg"
              alt="IMage"
              className="img-fluid"
            />
          </a>
        </div>
        <div
          className="col-sm-6 col-md-4 col-lg-3 col-xl-2 item"
          data-aos="fade"
          data-src="images/big-images/nature_big_6.jpg"
          data-sub-html="<h4>Fading Light</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum cum culpa blanditiis illum, voluptatum iusto quisquam mollitia debitis quaerat maiores?</p>"
        >
          <a href="#">
            <img
              src="images/nature_small_6.jpg"
              alt="IMage"
              className="img-fluid"
            />
          </a>
        </div>
        <div
          className="col-sm-6 col-md-4 col-lg-3 col-xl-2 item"
          data-aos="fade"
          data-src="images/big-images/nature_big_7.jpg"
          data-sub-html="<h4>Fading Light</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores similique impedit possimus, laboriosam enim at placeat nihil voluptatibus voluptate hic!</p>"
        >
          <a href="#">
            <img
              src="images/nature_small_7.jpg"
              alt="IMage"
              className="img-fluid"
            />
          </a>
        </div>
        <div
          className="col-sm-6 col-md-4 col-lg-3 col-xl-2 item"
          data-aos="fade"
          data-src="images/big-images/nature_big_8.jpg"
          data-sub-html="<h4>Fading Light</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam vitae sed cum mollitia itaque soluta laboriosam eaque sit ratione, aliquid.</p>"
        >
          <a href="#">
            <img
              src="images/nature_small_8.jpg"
              alt="IMage"
              className="img-fluid"
            />
          </a>
        </div>
        <div
          className="col-sm-6 col-md-4 col-lg-3 col-xl-2 item"
          data-aos="fade"
          data-src="images/big-images/nature_big_9.jpg"
          data-sub-html="<h4>Fading Light</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem reiciendis debitis beatae facilis quos, enim quis nobis magnam architecto earum!</p>"
        >
          <a href="#">
            <img
              src="images/nature_small_9.jpg"
              alt="IMage"
              className="img-fluid"
            />
          </a>
        </div>
        <div
          className="col-sm-6 col-md-4 col-lg-3 col-xl-2 item"
          data-aos="fade"
          data-src="images/big-images/nature_big_9.jpg"
          data-sub-html="<h4>Fading Light</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque officiis magnam, facilis nam eos perspiciatis eligendi pariatur numquam debitis quos!</p>"
        >
          <a href="#">
            <img
              src="images/nature_small_9.jpg"
              alt="IMage"
              className="img-fluid"
            />
          </a>
        </div>
        <div
          className="col-sm-6 col-md-4 col-lg-3 col-xl-2 item"
          data-aos="fade"
          data-src="images/big-images/nature_big_8.jpg"
          data-sub-html="<h4>Fading Light</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis consequatur quam et, delectus, cum iste ipsa animi eligendi obcaecati nemo.</p>"
        >
          <a href="#">
            <img
              src="images/nature_small_8.jpg"
              alt="IMage"
              className="img-fluid"
            />
          </a>
        </div>
        <div
          className="col-sm-6 col-md-4 col-lg-3 col-xl-2 item"
          data-aos="fade"
          data-src="images/big-images/nature_big_7.jpg"
          data-sub-html="<h4>Fading Light</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci quia illo voluptatibus numquam inventore, ab asperiores molestiae distinctio atque nihil.</p>"
        >
          <a href="#">
            <img
              src="images/nature_small_7.jpg"
              alt="IMage"
              className="img-fluid"
            />
          </a>
        </div>
        <div
          className="col-sm-6 col-md-4 col-lg-3 col-xl-2 item"
          data-aos="fade"
          data-src="images/big-images/nature_big_6.jpg"
          data-sub-html="<h4>Fading Light</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt unde placeat obcaecati sapiente illum, fuga nostrum necessitatibus delectus maiores magnam.</p>"
        >
          <a href="#">
            <img
              src="images/nature_small_6.jpg"
              alt="IMage"
              className="img-fluid"
            />
          </a>
        </div>
        <div
          className="col-sm-6 col-md-4 col-lg-3 col-xl-2 item"
          data-aos="fade"
          data-src="images/big-images/nature_big_5.jpg"
          data-sub-html="<h4>Fading Light</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas dignissimos non consectetur. Facilis totam, explicabo nam iure! Veniam modi, molestiae.</p>"
        >
          <a href="#">
            <img
              src="images/nature_small_5.jpg"
              alt="IMage"
              className="img-fluid"
            />
          </a>
        </div>
        <div
          className="col-sm-6 col-md-4 col-lg-3 col-xl-2 item"
          data-aos="fade"
          data-src="images/big-images/nature_big_4.jpg"
          data-sub-html="<h4>Fading Light</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias minus voluptatibus inventore odio. Iure amet nesciunt a, officia quo ex.</p>"
        >
          <a href="#">
            <img
              src="images/nature_small_4.jpg"
              alt="IMage"
              className="img-fluid"
            />
          </a>
        </div>
        <div
          className="col-sm-6 col-md-4 col-lg-3 col-xl-2 item"
          data-aos="fade"
          data-src="images/big-images/nature_big_3.jpg"
          data-sub-html="<h4>Fading Light</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium illum consectetur dolorum consequuntur sint doloribus eveniet deleniti! Illo, quibusdam, earum.</p>"
        >
          <a href="#">
            <img
              src="images/nature_small_3.jpg"
              alt="IMage"
              className="img-fluid"
            />
          </a>
        </div>
        <div
          className="col-sm-6 col-md-4 col-lg-3 col-xl-2 item"
          data-aos="fade"
          data-src="images/big-images/nature_big_2.jpg"
          data-sub-html="<h4>Fading Light</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto ad iure, inventore asperiores, cupiditate optio dignissimos labore quidem totam. Dignissimos.</p>"
        >
          <a href="#">
            <img
              src="images/nature_small_2.jpg"
              alt="IMage"
              className="img-fluid"
            />
          </a>
        </div>
        <div
          className="col-sm-6 col-md-4 col-lg-3 col-xl-2 item"
          data-aos="fade"
          data-src="images/big-images/nature_big_1.jpg"
          data-sub-html="<h4>Fading Light</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam temporibus totam similique provident delectus quos fugiat officia earum nisi voluptatibus?</p>"
        >
          <a href="#">
            <img
              src="images/nature_small_1.jpg"
              alt="IMage"
              className="img-fluid"
            />
          </a>
        </div>
        <div
          className="col-sm-6 col-md-4 col-lg-3 col-xl-2 item"
          data-aos="fade"
          data-src="images/big-images/nature_big_1.jpg"
          data-sub-html="<h4>Fading Light</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe beatae qui aliquid nostrum unde ut officiis omnis delectus sequi deleniti!</p>"
        >
          <a href="#">
            <img
              src="images/nature_small_1.jpg"
              alt="IMage"
              className="img-fluid"
            />
          </a>
        </div>
        <div
          className="col-sm-6 col-md-4 col-lg-3 col-xl-2 item"
          data-aos="fade"
          data-src="images/big-images/nature_big_2.jpg"
          data-sub-html="<h4>Fading Light</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi iusto vero, soluta porro dicta quaerat tempore magni perferendis aspernatur cupiditate.</p>"
        >
          <a href="#">
            <img
              src="images/nature_small_2.jpg"
              alt="IMage"
              className="img-fluid"
            />
          </a>
        </div>
        <div
          className="col-sm-6 col-md-4 col-lg-3 col-xl-2 item"
          data-aos="fade"
          data-src="images/big-images/nature_big_3.jpg"
          data-sub-html="<h4>Fading Light</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, minus officiis modi ducimus reprehenderit at ea voluptatum consequuntur enim nulla.</p>"
        >
          <a href="#">
            <img
              src="images/nature_small_3.jpg"
              alt="IMage"
              className="img-fluid"
            />
          </a>
        </div>
        <div
          className="col-sm-6 col-md-4 col-lg-3 col-xl-2 item"
          data-aos="fade"
          data-src="images/big-images/nature_big_4.jpg"
          data-sub-html="<h4>Fading Light</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis eligendi hic sed, quidem illum ipsa, cum tempora quo reiciendis accusantium.</p>"
        >
          <a href="#">
            <img
              src="images/nature_small_4.jpg"
              alt="IMage"
              className="img-fluid"
            />
          </a>
        </div>
        <div
          className="col-sm-6 col-md-4 col-lg-3 col-xl-2 item"
          data-aos="fade"
          data-src="images/big-images/nature_big_5.jpg"
          data-sub-html="<h4>Fading Light</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex blanditiis quaerat numquam repellendus pariatur commodi neque animi voluptatum illum dolore?</p>"
        >
          <a href="#">
            <img
              src="images/nature_small_5.jpg"
              alt="IMage"
              className="img-fluid"
            />
          </a>
        </div>
        <div
          className="col-sm-6 col-md-4 col-lg-3 col-xl-2 item"
          data-aos="fade"
          data-src="images/big-images/nature_big_6.jpg"
          data-sub-html="<h4>Fading Light</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio praesentium maiores, veritatis illum voluptas alias aut unde esse aliquam itaque.</p>"
        >
          <a href="#">
            <img
              src="images/nature_small_6.jpg"
              alt="IMage"
              className="img-fluid"
            />
          </a>
        </div>
        <div
          className="col-sm-6 col-md-4 col-lg-3 col-xl-2 item"
          data-aos="fade"
          data-src="images/big-images/nature_big_7.jpg"
          data-sub-html="<h4>Fading Light</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt fugit, non facilis dignissimos minima nostrum nesciunt adipisci, quibusdam cum reprehenderit.</p>"
        >
          <a href="#">
            <img
              src="images/nature_small_7.jpg"
              alt="IMage"
              className="img-fluid"
            />
          </a>
        </div>
        <div
          className="col-sm-6 col-md-4 col-lg-3 col-xl-2 item"
          data-aos="fade"
          data-src="images/big-images/nature_big_8.jpg"
          data-sub-html="<h4>Fading Light</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos iure delectus obcaecati atque fugit enim quaerat suscipit tenetur in ratione?</p>"
        >
          <a href="#">
            <img
              src="images/nature_small_8.jpg"
              alt="IMage"
              className="img-fluid"
            />
          </a>
        </div>
        <div
          className="col-sm-6 col-md-4 col-lg-3 col-xl-2 item"
          data-aos="fade"
          data-src="images/big-images/nature_big_9.jpg"
          data-sub-html="<h4>Fading Light</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa neque, eos quae eaque officia, repellendus dolore tempore cumque quibusdam? Maxime?</p>"
        >
          <a href="#">
            <img
              src="images/nature_small_9.jpg"
              alt="IMage"
              className="img-fluid"
            />
          </a>
        </div>
        <div
          className="col-sm-6 col-md-4 col-lg-3 col-xl-2 item"
          data-aos="fade"
          data-src="images/big-images/nature_big_9.jpg"
          data-sub-html="<h4>Fading Light</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, unde quis minus ex impedit necessitatibus nostrum, neque veniam repellat officiis!</p>"
        >
          <a href="#">
            <img
              src="images/nature_small_9.jpg"
              alt="IMage"
              className="img-fluid"
            />
          </a>
        </div>
        <div
          className="col-sm-6 col-md-4 col-lg-3 col-xl-2 item"
          data-aos="fade"
          data-src="images/big-images/nature_big_8.jpg"
          data-sub-html="<h4>Fading Light</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel eveniet sequi assumenda deserunt ab, tempora commodi autem debitis iusto sed.</p>"
        >
          <a href="#">
            <img
              src="images/nature_small_8.jpg"
              alt="IMage"
              className="img-fluid"
            />
          </a>
        </div>
        <div
          className="col-sm-6 col-md-4 col-lg-3 col-xl-2 item"
          data-aos="fade"
          data-src="images/big-images/nature_big_7.jpg"
          data-sub-html="<h4>Fading Light</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, quasi, pariatur. Minima provident repellat cum, impedit, nemo exercitationem distinctio consequuntur.</p>"
        >
          <a href="#">
            <img
              src="images/nature_small_7.jpg"
              alt="IMage"
              className="img-fluid"
            />
          </a>
        </div>
        <div
          className="col-sm-6 col-md-4 col-lg-3 col-xl-2 item"
          data-aos="fade"
          data-src="images/big-images/nature_big_6.jpg"
          data-sub-html="<h4>Fading Light</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus nostrum expedita consequatur rerum laboriosam tempore nisi autem animi eveniet perspiciatis.</p>"
        >
          <a href="#">
            <img
              src="images/nature_small_6.jpg"
              alt="IMage"
              className="img-fluid"
            />
          </a>
        </div>
        <div
          className="col-sm-6 col-md-4 col-lg-3 col-xl-2 item"
          data-aos="fade"
          data-src="images/big-images/nature_big_5.jpg"
          data-sub-html="<h4>Fading Light</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque consectetur error deserunt facilis facere, consequatur at officia quae culpa voluptatibus!</p>"
        >
          <a href="#">
            <img
              src="images/nature_small_5.jpg"
              alt="IMage"
              className="img-fluid"
            />
          </a>
        </div>
        <div
          className="col-sm-6 col-md-4 col-lg-3 col-xl-2 item"
          data-aos="fade"
          data-src="images/big-images/nature_big_4.jpg"
          data-sub-html="<h4>Fading Light</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti minima porro, hic dolores. Ab, doloremque facilis numquam, ipsa repellendus voluptas.</p>"
        >
          <a href="#">
            <img
              src="images/nature_small_4.jpg"
              alt="IMage"
              className="img-fluid"
            />
          </a>
        </div>
        <div
          className="col-sm-6 col-md-4 col-lg-3 col-xl-2 item"
          data-aos="fade"
          data-src="images/big-images/nature_big_3.jpg"
          data-sub-html="<h4>Fading Light</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, dolor alias. Dignissimos hic voluptatibus dolorum expedita recusandae, consequatur distinctio est.</p>"
        >
          <a href="#">
            <img
              src="images/nature_small_3.jpg"
              alt="IMage"
              className="img-fluid"
            />
          </a>
        </div>
        <div
          className="col-sm-6 col-md-4 col-lg-3 col-xl-2 item"
          data-aos="fade"
          data-src="images/big-images/nature_big_2.jpg"
          data-sub-html="<h4>Fading Light</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum similique, dolore esse quaerat incidunt ullam sit neque laboriosam velit quas.</p>"
        >
          <a href="#">
            <img
              src="images/nature_small_2.jpg"
              alt="IMage"
              className="img-fluid"
            />
          </a>
        </div>
        <div
          className="col-sm-6 col-md-4 col-lg-3 col-xl-2 item"
          data-aos="fade"
          data-src="images/big-images/nature_big_1.jpg"
          data-sub-html="<h4>Fading Light</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem tempora deleniti, consectetur quisquam labore vitae quod quae debitis hic ab!</p>"
        >
          <a href="#">
            <img
              src="images/nature_small_1.jpg"
              alt="IMage"
              className="img-fluid"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
  <div className="footer py-4">
    <div className="container-fluid text-center">
    </div>
  </div>
</div>




  );
};

export default Memi;
