import React from 'react';
import './Feature.css';

const Feature = ({ img, alt, title, description }) => {
  return (
    <div className="feature">
      <img src={img} alt="" />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Feature;
