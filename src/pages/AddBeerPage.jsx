// src/pages/AddBeerPage.jsx
import React from "react";
import newBeerImg from "../assets/new-beer.png";
import "./PageStyles.css";

function AddBeerPage() {
  return (
    <div className="section">
      <img src={newBeerImg} alt="New Beer" className="section-image" />
      <div className="section-content">
        <h2>New Beer</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          pharetra egestas lectus, sit amet eleifend ex tincidunt in. Nam dictum
          arcu ut dignissim varius.
        </p>
      </div>
    </div>
  );
}

export default AddBeerPage;
