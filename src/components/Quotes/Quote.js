import React from 'react';
import Profile from './profile/Profile';
import './Quote.css';

const Quote = ({ quote, profile }) => {
  return (
    <div className="quote">
      <p>{quote}</p>
      <Profile profile={profile} />
    </div>
  );
};

export default Quote;
