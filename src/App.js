import React, { useEffect, useState } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Intro from './components/Intro/Intro';
import Features from './components/Features/Features';
import CallToAction from './components/CallToAction/CallToAction';
import Quotes from './components/Quotes/Quotes';
import EmailComponent from './components/EmailComponent/EmailComponent';
import Footer from './components/footer/Footer';

const App = () => {
  const [bgPositionY, setBgPositionY] = useState();

  const updateBackground = (e) => {
    if (e.currentTarget.innerWidth < 900) {
      setBgPositionY(13);
    } else if (e.currentTarget.innerWidth < 600) {
      setBgPositionY(0);
    } else {
      setBgPositionY(23);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', updateBackground);

    return () => window.removeEventListener('resize', updateBackground);
  });

  return (
    <div
      className="wrapper"
      style={{
        backgroundPositionY: `${bgPositionY}%`,
      }}
      role="main"
    >
      <Navigation />
      <Intro />
      <Features />
      <CallToAction />
      <Quotes />
      <EmailComponent />
      <Footer />
    </div>
  );
};

export default App;
