import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './PageStyles.css';

function BeerDetailsPage()   {
    const { beerId } =useParams();
    const [beer, setBeer] = useState[null];
    
return (
    <div>
      <h1>Beer Detailed</h1>
      <p>Beer ID: {beerId}</p>
    </div>
  );
}

export default BeerDetailsPage;
