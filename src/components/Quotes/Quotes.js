import React from 'react';
import Quote from './Quote';
import assets from './../../assets';
import './Quotes.css';

const Quotes = () => {
  return (
    <div className="quotes-section">
      <Quote
        quote="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has
  become a well-oiled collaboration machine."
        profile={{
          url: assets.profile1,
          name: 'Satish Patel',
          jobTitle: 'Founder & CEO, Huddle',
        }}
      />
      <Quote
        quote="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has
        become a well-oiled collaboration machine."
        profile={{
          url: assets.profile2,
          name: 'Bruce McKenzie',
          jobTitle: 'Founder & CEO, Huddle',
        }}
      />
      <Quote
        quote="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has
        become a well-oiled collaboration machine."
        profile={{
          url: assets.profile3,
          name: 'Iva Boyd',
          jobTitle: 'Founder & CEO, Huddle',
        }}
      />
    </div>
  );
};

export default Quotes;
