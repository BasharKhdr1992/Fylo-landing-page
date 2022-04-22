import React from 'react';
import './Intro.css';
import assets from '../../assets';
import Button from '../UI/Button';

const Intro = () => {
  return (
    <div className="intro">
      <div className="intro-img-container">
        <img src={assets.intro} alt="Illustration intro" />
      </div>
      <h1>All your files in one secure location, accessible anywhere</h1>
      <p>
        Fylo stores all your most important files in one secure location. Access
        them wherever you need, share and collaborate with friends family, and
        co-workers.
      </p>
      <Button text={'Get Started'} />
    </div>
  );
};

export default Intro;
