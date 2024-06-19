import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'; // this!


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
// src/main.jsx

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//   <Router>
//     <App />
//   </Router>
// );
