import React from 'react';
import assets from '../../assets';
import './Navigation.css';

const Navigation = () => {
  return (
    <ul className="navbar">
      <li className="navlink">
        <button>
          <img src={assets.logo} alt="Fylo logo" />
        </button>
      </li>
      <li className="navlink right">
        <button>Sign in</button>
      </li>
      <li className="navlink right">
        <button>Team</button>
      </li>
      <li className="navlink right">
        <button>Features</button>
      </li>
    </ul>
  );
};

export default Navigation;
