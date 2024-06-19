// src/pages/AllBeersPage.jsx
import React from "react";
import allBeersImg from "../assets/beers.png";
import "./PageStyles.css";

function AllBeersPage() {
  return (
    <div className="section">
      <img src={allBeersImg} alt="All Beers" className="section-image" />
      <div className="section-content">
        <h2>All Beers</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          pharetra egestas lectus, sit amet eleifend ex tincidunt in. Nam dictum
          arcu ut dignissim varius.
        </p>
      </div>
    </div>
  );
}

export default AllBeersPage;
