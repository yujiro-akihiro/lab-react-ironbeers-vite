// src/pages/HomePage.jsx
import React from "react";
import { Link } from "react-router-dom";
import AllBeersPage from "./AllBeersPage";
import RandomBeerPage from "./RandomBeerPage";
import AddBeerPage from "./AddBeerPage";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="home-page">
      <div className="section-link">
        <Link to="/beers">
          <AllBeersPage />
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
