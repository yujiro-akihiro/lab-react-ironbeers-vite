import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './PageStyles.css';

function AllBeersPage() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios.get('https://ih-beers-api2.herokuapp.com/beers')
      .then(response => {
        console.log(response.data);
        setBeers(response.data);
      })
      .catch(error => {
        console.error('Error fetching beers:', error);
      });
  }, []);

  return (
    <div className="beers-list">
      {beers.map(beer => (
        <div key={beer._id} className="beer-item">
          <img src={beer.image_url} alt={beer.name} className="beer-image" />
          <div className="beer-info">
            <h2>{beer.name}</h2>
            <p>{beer.tagline}</p>
            <p><strong>Contributed by:</strong> {beer.contributed_by}</p>
            <Link to={`/beers/${beer._id}`}>View Details</Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AllBeersPage;
