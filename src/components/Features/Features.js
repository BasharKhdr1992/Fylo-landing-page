import React from 'react';
import Feature from './Feature';
import './Features.css';
import assets from '../../assets';

const Features = () => {
  return (
    <div className="features">
      <Feature
        img={assets.accessAnyWhere}
        alt="Access your files, anywhere"
        title={'Access your files, anywhere'}
        description="The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere."
      />
      <Feature
        img={assets.iconSecurity}
        alt="Security you can trust"
        title={'Access your files, anywhere'}
        description="2-factor authentication and user-controlled encryption are just a couple of the security
        features we allow to help secure your files."
      />
      <Feature
        img={assets.iconCollaboration}
        alt="Real-time collaboration"
        title={'Access your files, anywhere'}
        description="Securely share files and folders with friends, family and colleagues for live collaboration.
        No email attachments required."
      />
      <Feature
        img={assets.iconLocation}
        alt="Store any type of file"
        title={'Access your files, anywhere'}
        description="Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all
        file types to be securely stored and shared."
      />
    </div>
  );
};

export default Features;
