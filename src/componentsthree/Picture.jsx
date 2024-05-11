import React from 'react';

// остальной код файла TrendingContext.js
import data from "../pages/data";
import "../styles/style.css";

const Picture = () => {
  return data.map((item) => {
    return (
      <div className="picture">
        <div className="imageContainer">
          <img src={item.src.large} alt="" />
        </div>
        <div className="info">
          <p style={{ color: "steelblue" }}>{item.photographer}</p>
        </div>
      </div>
    );
  });
};

export default Picture;
