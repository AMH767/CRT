import React, { useContext, useEffect, useRef, useState } from 'react';
import { AppContext } from 'App';
import { getCoinData } from 'component/api';
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";
import { styled, Box } from '@mui/system';
import styles from "../Styles.module.scss";

const FullScreenBox = styled('div')({
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  zIndex: 99,
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'rgba(0, 0, 0, 0.5)'
});

const CurrencyData = () => {
  const { currency } = useContext(AppContext);
  const [coinData, setCoinData] = useState({});
  let supplyPercent = useRef(0);
  let marketCapToBTC = useRef(0);
  let volume24ToBtc = useRef(0);

  useEffect(() => {
    const coin = async () => {
      const data = await getCoinData(currency);
      setCoinData(data);
      supplyPercent.current = Number(((data.market_data.total_supply / data.market_data.max_supply) * 100)).toFixed(0);
      marketCapToBTC.current = 0;
      volume24ToBtc.current = 0;
      data.tickers.forEach(item => {
        marketCapToBTC.current += item.converted_volume.btc;
        volume24ToBtc.current += item.converted_last.btc;
      });
    };
    coin();
  }, [currency]);

  if (!coinData) {
    return null;
  }

  return (
    <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
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

      <div style={{ padding: '10px', margin: '48px' }}>
        {/* контент */}
      </div>

      <FullScreenBox>
        <Box sx={{ flexGrow: 1 }} className={styles.tradingView}>
          <AdvancedRealTimeChart 
            symbol={`${coinData.symbol}usdt`} 
            theme="white" 
            height={"100%"} 
            width={"100%"} 
            timezone={Intl.DateTimeFormat().resolvedOptions().timeZone} 
            interval="60" 
            copyrightStyles={{parent: {display: "none"}}} 
          />
        </Box>
      </FullScreenBox>
      <div className="footer py-5 text-center">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <p className="mb-0">Trade🔥Live</p>
          </div>
        </div>
      </div>
    </div>
    </Box>
  );
}

export default CurrencyData;
