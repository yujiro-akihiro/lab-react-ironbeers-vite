import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './BeerDetailsPage.css';  // スタイルシートをインポート

function BeerDetailsPage() {
  const { beerId } = useParams();
  const [beer, setBeer] = useState(null);

  useEffect(() => {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then(response => {
        console.log(response.data);
        setBeer(response.data);
      })
      .catch(error => {
        console.error('Error fetching beer details:', error);
      });
  }, [beerId]);

  if (!beer) {
    return <div>Loading...</div>;
  }

  return (
    <div className="beer-details">
      <img src={beer.image_url} alt={beer.name} className="beer-image" />
      <div className="beer-info">
        <h2>{beer.name}</h2>
        <p>{beer.tagline}</p>
        <p><strong>First Brewed:</strong> {beer.first_brewed}</p>
        <p><strong>Attenuation Level:</strong> {beer.attenuation_level}</p>
        <p>{beer.description}</p>
        <p><strong>Contributed by:</strong> {beer.contributed_by}</p>
      </div>
    </div>
  );
}

export default BeerDetailsPage;
