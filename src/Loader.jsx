// src/Components/Loader.jsx
import React from 'react';
import './styles/Loader.css'; // Make sure this path is correct

const Loader = ({ show }) => {
  if (!show) return null;

  return (
    <div className="loader-overlay">
      <div className="loader">
        <span className="loader-text">loading</span>
        <span className="load"></span>
      </div>
    </div>
  );
};

export default Loader;
