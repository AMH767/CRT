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


const Blogtwo = () => {
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
            Часть 2
          </span>
          <h2 data-aos="fade-up" data-aos-delay={200}>
          Психология криптотрейдинга: распространенные ошибки трейдеров при открытии позиции
          </h2>
        </div>
      </div>
      <div className="row mb-5">
        <div
          className="col-lg-6 mb-4 mb-lg-0"
          data-aos="fade-right"
          data-aos-delay={200}
        >
          <img
            src="https://raw.githubusercontent.com/AMH767/cryptoimage/main/imagecrypt1.png"
            alt="Image"
            className="img-fluid img-shadow"
          />
        </div>
        <div
          className="col-lg-5 h-100 jm-sticky-top ml-auto"
          data-aos="fade-left"
          data-aos-delay={300}
        >
          <h3 className="h5">Введение</h3>
          <p className="mb-4">
          
Человеческий мозг развивался в совершенно иных условиях, по сравнению с которыми трейдеры должны вести свою деятельность. В результате модели принятия решений человеческим мозгом могут быть более эффективными на рынке. Это не означает, что они склоняют трейдера к «медвежьей» перспективе, а скорее помещают кривую доходности его депозита в «медвежий» тренд. Вот несколько примеров того, как глубокие умственные потребности трейдера могут привести к убыткам.

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
          className="col-lg-6 order-1 order-lg-2 mb-4 mb-lg-0"
          data-aos="fade-left"
          data-aos-delay={100}
        >
          <img
            src="https://mgu-russian.com/upload/himg_cache/blog_post_v2/e29/e2927bf707e2729b9eef3b392a92d85c/motivation_58055.webp"
            alt="Image"
            className="img-fluid img-shadow"
          />
        </div>
        <div
          className="col-lg-5 h-100 jm-sticky-top mr-auto order-2 order-lg-1"
          data-aos="fade-right"
          data-aos-delay={200}
        >
          <h3 className="h5">Я хочу наслаждаться!</h3>
          <p className="mb-4">
          Система человеческих инстинктов работает по принципу кнута и пряника. За правильное действие (поесть, разогреться и т.д.) человека поощряет выброс «гормонов счастья» серотонина и дофамина, а за неправильное действие – боль и выброс гормона стресса кортизола.
          <br/>
          <br/>
Поэтому в режиме «по умолчанию» человеческий мозг всегда ищет возможности для очередной дозы радости и счастья. Если трейдер хотя бы раз получал ощутимую прибыль от сделки и испытывал эйфорию, его мозг уже выстроил логическую цепочку: «открыл позицию – наслаждался». Аналогичная ассоциация формируется у людей, которые пристрастились к азартным играм.
<br/>
<br/>

В этом случае вся сложность анализа упрощается, а самый поразительный факт сохраняется в памяти. Например, когда позиция была «трендовой». И вот, в приятном предвкушении, трейдер открывает новую позицию на линии тренда, не до конца осознавая, что он это делает, не руководствуясь анализом или стратегией, а лишь для того, чтобы снова ощутить радость легкой прибыли.

          </p>
          {/* <blockquote className="blockquote">
            <p>
              It is a paradisematic country, in which roasted parts of sentences
              fly into your mouth.
            </p>
            <p className="mb-0 d-flex align-items-center">
              <img
                className="img-fluid mr-3"
                src="images/person_2.jpg"
                alt="Image"
              />
              <cite>— John Doe</cite>
            </p>
          </blockquote> */}
        </div>
      </div>
      <div className="row mb-5">
        <div
          className="col-lg-6 mb-4 mb-lg-0"
          data-aos="fade-right"
          data-aos-delay={100}
        >
          <img
            src="https://sun9-70.userapi.com/impf/c855428/v855428166/138185/q7cJMtaElpo.jpg?size=566x274&quality=96&sign=33ef2499788f6eb8ef50e3216620836c&c_uniq_tag=qHwQYguGv4RV2QLp1cqua1FrpBkp-wjW3wOFC6E0GPk&type=album"
            alt="Image"
            className="img-fluid img-shadow"
          />
        </div>
        <div
          className="col-lg-5 h-100 jm-sticky-top ml-auto"
          data-aos="fade-left"
          data-aos-delay={200}
        >
          <h3 className="h5">Я хочу отыграться! Я не готов смириться с потерей!</h3>
          <p className="mb-4">
          Теперь вместо долгожданной прибыли трейдер получает убыток. Потом еще. Предвкушение радости сменяется недоумением: «Что происходит? Я все делал раньше!» И не так уж больно видеть небольшой убыток на своем счету, а вот перспектива выглядеть глупо в глазах друзей и близких, которым трейдер уже похвастался своими первыми успехами, пугает.
<br/>
<br/>

Прибыльная сделка для трейдера – это уже не доход – она личная. Способ исцелить уязвленную самооценку. Способ оправдать свои действия. В этом состоянии мозгу некогда думать о потенциальной доходности, оценивать соотношение риска и прибыли и делать другие значимые вещи. Главное – получить прибыль и как можно скорее вернуться в зону комфорта. А чтобы получить прибыль, нужно открыть еще одну позицию. Подсознание как бы побуждает трейдера к действию, даже если рынок ему не благоволит.

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

export default Blogtwo;
