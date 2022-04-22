import React from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Intro from './components/Intro/Intro';
import Features from './components/Features/Features';
import CallToAction from './components/CallToAction/CallToAction';
import Quotes from './components/Quotes/Quotes';
import EmailComponent from './components/EmailComponent/EmailComponent';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <div className="wrapper" role="main">
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
