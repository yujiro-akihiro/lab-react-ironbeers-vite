// src/pages/HomePage.jsx
import React from "react";
import { Link } from "react-router-dom";
import RandomBeerPage from "./RandomBeerPage";
import AddBeerPage from "./AddBeerPage";
import allBeersImg from "../assets/beers.png";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="home-page">
      <div className="section-link">
        <Link to="/beers">
          <div className="section">
            <img src={allBeersImg} alt="All Beers" className="section-image" />
            <div className="section-content">
              <h2>All Beers</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                pharetra egestas lectus, sit amet eleifend ex tincidunt in. Nam
                dictum arcu ut dignissim varius.
              </p>
            </div>
          </div>
        </Link>
      </div>
      <div className="section-link">
        <Link to="/random-beer">
          <RandomBeerPage />
        </Link>
      </div>
      <div className="section-link">
        <Link to="/new-beer">
          <AddBeerPage />
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
