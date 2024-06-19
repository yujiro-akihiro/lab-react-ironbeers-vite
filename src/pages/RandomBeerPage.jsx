// src/pages/RandomBeerPage.jsx
import React from "react";
import randomBeerImg from "../assets/random-beer.png";
import "./PageStyles.css";

function RandomBeerPage() {
  return (
    <div className="section">
      <img src={randomBeerImg} alt="Random Beer" className="section-image" />
      <div className="section-content">
        <h2>Random Beer</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          pharetra egestas lectus, sit amet eleifend ex tincidunt in. Nam dictum
          arcu ut dignissim varius.
        </p>
      </div>
    </div>
  );
}

export default RandomBeerPage;
