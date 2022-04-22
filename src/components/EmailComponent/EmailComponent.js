import React from 'react';
import EmailForm from './EmailForm/EmailForm';
import './EmailComponent.css';

const EmailComponent = () => {
  return (
    <div className="email-form-container">
      <h1>Get early access today</h1>
      <p>
        It only takes a minute to sign up and our free starter tier is extremely
        generous. If you have any questions, our support team would be happy to
        help you.
      </p>
      <EmailForm />
    </div>
  );
};

export default EmailComponent;
