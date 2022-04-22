import React from 'react';
import './CallToAction.css';
import assets from '../../assets';

const CallToAction = () => {
  return (
    <div className="call-to-action-container">
      <div className="call-to-action-img-container">
        <img src={assets.callToAction} alt="call to action" />
      </div>
      <div className="call-to-action-text-section">
        <h2>Stay productive, wherever you are</h2>
        <p>
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs.
        </p>
        <p>
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required.
        </p>
        <button className="btn btn-link">
          See how Fylo works
          <img src={assets.arrow} alt="arrow" />
        </button>
      </div>
    </div>
  );
};

export default CallToAction;
